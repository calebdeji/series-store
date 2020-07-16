import { createContext, useState } from "react";
import { movieBoxProps, movieDisplayedProps } from "../types/movieTypes";
const initialState = {
    Movies: [] as movieBoxProps[],
    searchValue: "",
    searchForValue: false,
    currentDisplayedMovie: {} as movieDisplayedProps,
    updateMovies: (Movies: movieBoxProps[]) => {},
    updateCurrentDisplayedMovie: (displayedMovie: movieDisplayedProps) => {},
    updateSearch: (status: Boolean, value: string) => {},
};

export const useAppContext = () => {
    const [appState, setappState] = useState(initialState);
    const appContextValue = {
        ...appState,
        updateMovies: (Movies: movieBoxProps[]) => {
            setappState((prevState) => ({
                ...prevState,
                Movies,
            }));
        },
        updateCurrentDisplayedMovie: (currentDisplayedMovie: movieDisplayedProps) => {
            setappState((prevState) => {
                return { ...prevState, currentDisplayedMovie };
            });
        },
        updateSearch: (status: boolean, value: string) => {
            setappState((prevState) => ({
                ...prevState,
                searchForValue: status,
                searchValue: value,
            }));
        },
    };
    return { ...appContextValue };
};
const AppContext = createContext(initialState);

export default AppContext;
