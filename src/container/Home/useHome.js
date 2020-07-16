import { useHistory } from "react-router-dom";
import { useEffect, useContext } from "react";
import Axios from "axios";
import useFetchingAndError from "../../customHooks/useFetchingAndError";
import fetchMovies from "./fetchRandomMovies";
import AppContext from "../../AppContext/Appcontext";

const useHome = () => {
    const { push } = useHistory();
    const source = Axios.CancelToken.source();
    const { isFetching, setisFetching, handleErrorMessage, isError, errorMessage } = useFetchingAndError();
    const { updateMovies, Movies, searchForValue, searchValue, updateSearch } = useContext(AppContext);
    useEffect(() => {
        let timerId;
        (async () => {
            setisFetching(true);
            if (!searchForValue && Movies.length !== 0) {
                setisFetching(false);
            } else {
                const { isError, data, errorMessage } = await fetchMovies(
                    source,
                    searchValue ? searchValue : undefined
                );
                if (isError) {
                    handleErrorMessage(errorMessage);
                } else {
                    updateMovies(data);
                }
                updateSearch(false, searchValue);
                // added timeout becasue the api responds quickly hence reducing the importance of skeleton loader
                timerId = setTimeout(() => {
                    setisFetching(false);
                }, 3000);
            }
        })();

        return () => {
            source.cancel("Operation cancelled");
            clearTimeout(timerId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue]);

    const navigateToMovieDetails = (id) => {
        push(`/${id}`);
    };
    return { navigateToMovieDetails, isFetching, isError, errorMessage, Movies };
};
export default useHome;
