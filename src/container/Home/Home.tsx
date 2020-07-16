import React from "react";
import MovieBox from "../../component/MovieBox/MovieBox";
import styles from "./home.module.scss";
import MovieGrid from "../../component/MovieGrid/MovieGrid";
import useHome from "./useHome";
import SkeletonLoader from "../../component/SkeletonLoader/SkeletonLoader";

const Home = () => {
    const { navigateToMovieDetails, isFetching, isError, errorMessage, Movies } = useHome();
    return (
        <main className={styles.main}>
            {isFetching ? (
                <MovieGrid>
                    {[1, 2, 3].map((element) => {
                        return <SkeletonLoader key={element} />;
                    })}
                </MovieGrid>
            ) : isError ? (
                <p>Error Encountered : {errorMessage}</p>
            ) : (
                <MovieGrid>
                    {Movies.map((data) => {
                        return (
                            <button
                                className={styles.buttonBox}
                                onClick={() => {
                                    navigateToMovieDetails(data.name);
                                }}
                                key={data.id}
                            >
                                <MovieBox {...data} />
                            </button>
                        );
                    })}
                </MovieGrid>
            )}
        </main>
    );
};
export default Home;
