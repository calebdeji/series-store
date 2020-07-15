const { useState } = require("react");

const useHeader = () => {
    const [isSwitchChecked, setisSwitchChecked] = useState(false);
    const toggleSwitch = () => {
        setisSwitchChecked((prevState) => !prevState);
    };
    return { isSwitchChecked, toggleSwitch };
};
export default useHeader;
