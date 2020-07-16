import { useState } from "react";

const useFetchingAndError = () => {
    const [isFetching, setisFetching] = useState(true);
    const [isError, setisError] = useState(false);
    const [errorMessage, seterrorMessage] = useState("");
    const handleErrorMessage = (errorMessage) => {
        setisError(true);
        seterrorMessage(errorMessage);
    };
    const cancelAll = () => {
        setisFetching();
        seterrorMessage();
        setisError();
    };
    return { isFetching, isError, errorMessage, setisFetching, handleErrorMessage, cancelAll };
};
export default useFetchingAndError;
