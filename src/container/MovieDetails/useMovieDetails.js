import useFetchingAndError from "../../customHooks/useFetchingAndError";
import { useEffect, useContext, useState } from "react";
import fetchMovieDetails from "./fetchMovieDetails";
import Axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import AppContext from "../../AppContext/Appcontext";

const useMovieDetails = () => {
    const { isError, isFetching, setisFetching, errorMessage, handleErrorMessage } = useFetchingAndError();
    const [season, setseason] = useState({ selectedOption: 1, options: [] });
    const [episode, setepisode] = useState({ selectedOption: [], options: [] });
    const { goBack } = useHistory();
    const source = Axios.CancelToken.source();
    const { updateCurrentDisplayedMovie, currentDisplayedMovie } = useContext(AppContext);
    const [initialData, setinitialData] = useState();
    const { id } = useParams();
    const handleEpisodeChange = (event, value) => {
        setepisode((prev) => ({ ...prev, selectedOption: value }));
    };
    const handleSeasonChange = (event) => {
        console.log({ hey: event.target.value });
        setseason((prev) => ({ ...prev, selectedOption: event.target.value }));
    };
    useEffect(() => {
        if (currentDisplayedMovie?._embedded?.episodes && season.options.length !== 0) {
            const newData = initialData.filter(({ number, season: newSeason }) => {
                return (
                    newSeason === season.selectedOption &&
                    number >= episode.selectedOption[0] &&
                    number <= episode.selectedOption[1]
                );
            });
            updateCurrentDisplayedMovie({ ...currentDisplayedMovie, _embedded: { episodes: newData } });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [episode.selectedOption, season.selectedOption]);
    useEffect(() => {
        let timerId;
        (async () => {
            setisFetching(true);
            const { isError, data, errorMessage } = await fetchMovieDetails(source, id);
            if (isError) {
                handleErrorMessage(errorMessage);
            } else {
                let episodesData = data._embedded.episodes;
                let seasonOptions = [];
                let episodeOptions = [];
                for (let index = 0; index < episodesData.length; index++) {
                    if (!seasonOptions.includes(episodesData[index].season)) {
                        seasonOptions.push(episodesData[index].season);
                    }
                    if (!episodeOptions.includes(episodesData[index].number)) {
                        episodeOptions.push(episodesData[index].number);
                    }
                }
                setseason({ selectedOption: seasonOptions[0], options: seasonOptions });
                setepisode({
                    selectedOption: [episodeOptions[0], episodeOptions[episodeOptions.length - 1]],
                    options: [episodeOptions[0], episodeOptions[episodeOptions.length - 1]],
                });
                setinitialData(data._embedded.episodes);
                updateCurrentDisplayedMovie(data);
            }
            // added timeout becasue the api responds quickly hence reducing the importance of skeleton loader
            timerId = setTimeout(() => {
                setisFetching(false);
            }, 3000);
        })();
        return () => {
            source.cancel("Operation cancelled");
            clearTimeout(timerId);
            updateCurrentDisplayedMovie(null);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        isError,
        isFetching,
        errorMessage,
        currentDisplayedMovie,
        goBack,
        season,
        episode,
        handleEpisodeChange,
        handleSeasonChange,
    };
};

export default useMovieDetails;
