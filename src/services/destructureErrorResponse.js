import Axios from "axios";

const destructureErrorObject = (error) => {
    const returnValue = (errorMessage) => {
        return { isError: true, errorMessage };
    };
    if (Axios.isCancel(error)) {
        return { isError: true, errorMessage: error.message };
    } else {
        const { request, response, message } = error;
        if (response) {
            if (response.data) {
                const {
                    data: { message },
                } = response;
                return returnValue(message);
            }
            return returnValue(response.statusText);
        } else if (request) {
            const statusCodeForNoInternet = 0;
            const { status, statusText: errorMessage } = request;
            if (status === statusCodeForNoInternet) {
                return returnValue("Seems you are not connected to the internet, refresh your browser");
            }
            return returnValue(errorMessage);
        } else {
            return returnValue(message);
        }
    }
};
export default destructureErrorObject;
