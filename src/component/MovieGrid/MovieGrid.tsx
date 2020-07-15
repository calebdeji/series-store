import React, { FC } from "react";
import styles from "./moviegrid.module.scss";
const MovieGrid: FC<{}> = ({ children }) => {
    return <div className={styles.gridContainer}>{children}</div>;
};

export default MovieGrid;
