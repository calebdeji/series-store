import AppContext from "../../AppContext/Appcontext";
import { useHistory } from "react-router-dom";
import changeTheme from "../../libs/changeTheme";
import { getSwitch, setSwitch } from "../../libs/processSwitch";
const { useState, useContext, useEffect } = require("react");

const useHeader = () => {
    const [isSwitchChecked, setisSwitchChecked] = useState(false);
    useEffect(() => {
        const switchValue = getSwitch();
        if (switchValue === null) {
            setisSwitchChecked(true);
        } else {
            setisSwitchChecked(JSON.parse(switchValue));
        }
    }, []);
    useEffect(() => {
        setSwitch(isSwitchChecked);
        changeTheme(isSwitchChecked);
    }, [isSwitchChecked]);
    const { updateSearch } = useContext(AppContext);
    const [search, setsearch] = useState("");
    const { push } = useHistory();
    const handleChange = ({ target: { value } }) => {
        setsearch(value);
    };
    const toggleSwitch = () => {
        setisSwitchChecked((prevState) => !prevState);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        updateSearch(true, search);
        push("/");
    };
    return { isSwitchChecked, toggleSwitch, handleChange, handleSubmit, search };
};
export default useHeader;
