import { useState, useCallback } from "react";
import { Movie } from "../../../model/Movie";


export const useMoviesTable = function (movies: Movie[]) {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" });

    const getPagedMovies = useCallback(() => {
        return movies;
    }, [movies]);

    return {
        currentPage,
        getPagedMovies
    };
};