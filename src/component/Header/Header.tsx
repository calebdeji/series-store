import React from "react";
import { Switch, TextField } from "@material-ui/core";
import useHeader from "./useHeader";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./header.module.scss";
const Header = () => {
    const { isSwitchChecked, toggleSwitch } = useHeader();
    return (
        <header className={styles.header}>
            <Switch
                checked={isSwitchChecked}
                onChange={toggleSwitch}
                name="theme"
                inputProps={{ "aria-label": "Theme" }}
            />

            <div className={styles.searchContainer}>
                <TextField
                    variant="outlined"
                    placeholder="Search"
                    inputProps={{ "aria-label": "search" }}
                    className={styles.searchInput}
                />
                <div className={styles.searchIconContainer}>
                    <SearchIcon />
                </div>
            </div>
        </header>
    );
};

export default Header;
