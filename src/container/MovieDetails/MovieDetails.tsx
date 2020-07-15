import React from "react";
import { movieDetails, movieEpisodes } from "../../types/movieTypes";
import MovieBox from "../../component/MovieBox/MovieBox";
import MovieGrid from "../../component/MovieGrid/MovieGrid";
import { ArrowBack } from "@material-ui/icons";

const dummyEpisode: movieEpisodes[] = [
    {
        id: "1",
        url: "http://www.tvmaze.com/episodes/1/under-the-dome-1x01-pilot",
        name: "Pilot",
        season: 1,
        number: 1,
        image: {
            medium: "http://static.tvmaze.com/uploads/images/medium_landscape/1/4388.jpg",
            original: "http://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg",
        },
        summary: "Hello Merlin",
    },
    {
        id: "2",
        url: "http://www.tvmaze.com/episodes/1/under-the-dome-1x01-pilot",
        name: "Pilot",
        season: 1,
        number: 1,
        image: {
            medium: "http://static.tvmaze.com/uploads/images/medium_landscape/1/4388.jpg",
            original: "http://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg",
        },
        summary: "Hello Merlin",
    },
    {
        id: "3",
        url: "http://www.tvmaze.com/episodes/1/under-the-dome-1x01-pilot",
        name: "Pilot",
        season: 1,
        number: 1,
        image: {
            medium: "http://static.tvmaze.com/uploads/images/medium_landscape/1/4388.jpg",
            original: "http://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg",
        },
        summary: "Hello Merlin",
    },
];

const MovieDetails = () => {
    return (
        <main>
            <div>
                <button>
                    <ArrowBack />
                </button>
            </div>
            <img src="" alt="" />
            <MovieGrid>
                {dummyEpisode.map((data) => {
                    return <MovieBox {...data} />;
                })}
            </MovieGrid>
        </main>
    );
};

export default MovieDetails;
