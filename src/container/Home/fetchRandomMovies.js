import destructureErrorObject from "../../services/destructureErrorResponse";
import Axios from "axios";

const randomTitle = () => {
    const array = ["love", "hatred", "america", "revenge", "song", "sword", "joy", "baby", "fight", "beat"];
    const index = Math.floor(Math.random() * 10);
    return array[index];
};
const fetchMovies = async (source, searchValue = undefined) => {
    try {
        const modifiedSearch = searchValue ? searchValue : randomTitle();
        const url = `${process.env.REACT_APP_baseAPI}/search/shows?q=${modifiedSearch}`;
        const { data } = await Axios.get(url, { cancelToken: source.token });
        const parsedData = data.map(({ show }) => {
            return { ...show };
        });
        return { isError: false, data: parsedData };
    } catch (error) {
        return destructureErrorObject(error);
    }
};

export default fetchMovies;
