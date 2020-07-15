import React from "react";
import MovieBox from "../../component/MovieBox/MovieBox";
import { movieBoxProps } from "../../types/movieTypes";
import styles from "./home.module.scss";
import MovieGrid from "../../component/MovieGrid/MovieGrid";
const dumyData: movieBoxProps[] = [
    {
        id: "789",
        image: {
            original: "http://static.tvmaze.com/uploads/images/original_untouched/55/139159.jpg",
        },
        name: "Merlin",
        summary: "Fantasy drama based on the legend of King Arthur and merlin",
        url: "http://www.tvmaze.com/shows/789/merlin",
        rating: { average: 7.9 },
    },
    {
        id: "780",
        image: {
            original: "http://static.tvmaze.com/uploads/images/original_untouched/55/139159.jpg",
        },
        name: "Merlin",
        summary: "Fantasy drama based on the legend of King Arthur and merlin",
        url: "http://www.tvmaze.com/shows/789/merlin",
        rating: { average: 7.9 },
    },
    {
        id: "781",
        image: {
            original: "http://static.tvmaze.com/uploads/images/original_untouched/55/139159.jpg",
        },
        name: "Merlin",
        summary: "Fantasy drama based on the legend of King Arthur and merlin",
        url: "http://www.tvmaze.com/shows/789/merlin",
        rating: { average: 7.9 },
    },
    {
        id: "782",
        image: {
            original: "http://static.tvmaze.com/uploads/images/original_untouched/55/139159.jpg",
        },
        name: "Merlin",
        summary: "Fantasy drama based on the legend of King Arthur and merlin",
        url: "http://www.tvmaze.com/shows/789/merlin",
        rating: { average: 7.9 },
    },
    {
        id: "783",
        image: {
            original: "http://static.tvmaze.com/uploads/images/original_untouched/55/139159.jpg",
        },
        name: "Merlin",
        summary: "Fantasy drama based on the legend of King Arthur and merlin",
        url: "http://www.tvmaze.com/shows/789/merlin",
        rating: { average: 7.9 },
    },
];

const Home = () => {
    return (
        <main>
            <MovieGrid>
                {dumyData.map((data) => {
                    return (
                        <button className={styles.buttonBox}>
                            <MovieBox {...data} />
                        </button>
                    );
                })}
            </MovieGrid>
        </main>
    );
};
export default Home;
