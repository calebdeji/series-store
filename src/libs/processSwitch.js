const key = "switch";

export const getSwitch = () => {
    const switchValue = window.localStorage.getItem(key);
    return switchValue;
};
/**
 *
 * @param { boolean  } status with respect to dark theme
 */
export const setSwitch = (status) => {
    window.localStorage.setItem(key, JSON.stringify(status));
};
