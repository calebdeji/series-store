import Axios from "axios";
import destructureErrorObject from "../../services/destructureErrorResponse";

const fetchMovieDetails = async (source, id) => {
    try {
        const url = `${process.env.REACT_APP_baseAPI}/singlesearch/shows/?q=${id}&embed=episodes`;
        const { data } = await Axios.get(url, { cancelToken: source.token });
        return { isError: false, data };
    } catch (error) {
        return destructureErrorObject(error);
    }
};
export default fetchMovieDetails;
