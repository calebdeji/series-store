import React from "react";
import { Switch, InputBase } from "@material-ui/core";
import useHeader from "./useHeader";
import SearchIcon from "@material-ui/icons/Search";
const Header = () => {
    const { isSwitchChecked, toggleSwitch } = useHeader();
    return (
        <header>
            <Switch
                checked={isSwitchChecked}
                onChange={toggleSwitch}
                name="theme"
                inputProps={{ "aria-label": "Theme" }}
            />

            <div>
                <div>
                    <SearchIcon />
                </div>
                <InputBase placeholder="Search" inputProps={{ "aria-label": "search" }} />
            </div>
        </header>
    );
};

export default Header;
