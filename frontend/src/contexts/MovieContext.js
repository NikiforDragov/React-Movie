import { createContext, useContext } from "react";
const MovieContext = createContext(null);

export const useMovieContext = () => useContext(MovieContext);