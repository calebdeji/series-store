import React from "react";
import { Switch, TextField } from "@material-ui/core";
import useHeader from "./useHeader";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./header.module.scss";
import "./switch.css";
const Header = () => {
    const { isSwitchChecked, toggleSwitch, handleChange, handleSubmit, search } = useHeader();
    return (
        <header className={styles.header}>
            <Switch
                checked={isSwitchChecked}
                onChange={toggleSwitch}
                name="theme"
                color="primary"
                inputProps={{ "aria-label": "Theme" }}
                style={{ color: isSwitchChecked ? "black" : "white" }}
            />

            <form className={styles.searchContainer} onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    placeholder="Search"
                    inputProps={{ "aria-label": "search" }}
                    className={styles.searchInput}
                    value={search}
                    onChange={handleChange}
                />
                <button className={styles.searchIconContainer} type="submit">
                    <SearchIcon aria-label="Search" className={styles.searchIcon} />
                </button>
            </form>
        </header>
    );
};

export default Header;
