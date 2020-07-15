import React from "react";
import MovieBox from "../../component/MovieBox/MovieBox";
import MovieGrid from "../../component/MovieGrid/MovieGrid";
import { ArrowBack } from "@material-ui/icons";
import useMovieDetails from "./useMovieDetails";
import SkeletonLoader from "../../component/SkeletonLoader/SkeletonLoader";
import { Select, FormControl, InputLabel, MenuItem, Slider } from "@material-ui/core";
import styles from "./moviedetails.module.scss";

const MovieDetails = () => {
    const {
        isError,
        isFetching,
        currentDisplayedMovie,
        goBack,
        handleEpisodeChange,
        handleSeasonChange,
        episode,
        season,
    } = useMovieDetails();
    return (
        <main className={styles.container}>
            {isFetching ? (
                <MovieGrid>
                    {[1, 2].map((element) => {
                        return <SkeletonLoader key={element} />;
                    })}
                </MovieGrid>
            ) : isError ? (
                <p> Error </p>
            ) : (
                <>
                    <div className={styles.header}>
                        <button>
                            <ArrowBack role="button" onClick={goBack} />
                        </button>
                        <div className={styles.choiceContainer}>
                            <FormControl variant="outlined">
                                <InputLabel id="season-list-label" className={styles.selectSeasonLabel}>
                                    {" "}
                                    Season
                                </InputLabel>
                                <Select
                                    labelId="season-list-label"
                                    id="season-list"
                                    label="Season"
                                    onChange={handleSeasonChange}
                                    value={season.selectedOption}
                                    style={{ height: "40px" }}
                                    className={styles.selectSeason}
                                >
                                    {season.options.map((seasonValue) => {
                                        return (
                                            <MenuItem value={seasonValue} key={seasonValue}>
                                                {" "}
                                                {seasonValue}{" "}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                            </FormControl>

                            <Slider
                                value={episode.selectedOption}
                                onChange={handleEpisodeChange}
                                getAriaValueText={(value) => `Episode-${value}`}
                                valueLabelDisplay="auto"
                                aria-labelledby="episode-slider"
                                min={episode.options[0]}
                                max={episode.options[1]}
                                style={{ width: "100px" }}
                                className={styles.episodeSlider}
                            />
                        </div>
                    </div>
                    <MovieGrid>
                        {currentDisplayedMovie._embedded.episodes.map((data) => {
                            return <MovieBox {...data} key={data.id} />;
                        })}
                    </MovieGrid>
                </>
            )}
        </main>
    );
};

export default MovieDetails;
