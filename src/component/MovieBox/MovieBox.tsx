import React, { FC } from "react";
import Rating from "@material-ui/lab/Rating";
import formatEpisode from "../../libs/formatEpisode";
import styles from "./moviebox.module.scss";
import { movieBoxProps } from "../../types/movieTypes";
import ReactMarkdown from "react-markdown/with-html";

const MovieBox: FC<movieBoxProps> = (props) => {
    const formattedSeasonEpisode =
        props.season && props.number ? formatEpisode(props.season, props.number) : null;
    return (
        <div className={styles.movieBox}>
            <img
                src={props?.image?.original}
                alt={props.name}
                title={`${props.name} ${formattedSeasonEpisode && formattedSeasonEpisode}`}
                className={styles.movieBoxImage}
            />
            <div className={styles.movieBoxDescription}>
                <h3>{props.name} </h3>
                {props.summary ? (
                    <ReactMarkdown
                        source={
                            props.summary.length >= 200 ? `${props.summary.substr(0, 200)}...` : props.summary
                        }
                        escapeHtml={false}
                    />
                ) : (
                    <p>No summary found </p>
                )}
                {props.url && <a href={props.url}> {props.url} </a>}
                {props.rating && (
                    <p className={styles.movieBoxDescriptionRating}>
                        {" "}
                        Rating : &nbsp;{" "}
                        <Rating name="read-only" value={props.rating?.average} max={10} readOnly />
                    </p>
                )}
                {formattedSeasonEpisode && <p> {formattedSeasonEpisode} </p>}
            </div>
        </div>
    );
};
export default MovieBox;
