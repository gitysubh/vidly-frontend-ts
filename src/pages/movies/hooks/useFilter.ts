import { Movie } from "../../../model/Movie";
import { useCallback, useState } from "react";
import { Genre } from "../../../model/Genre";
import { genreFilter, searchFilter } from "../../../Utils/movieFilter";

export const useFilter = () => {
    const [filter, setFilter] = useState<IState>({ selectedGenre: { _id: 0, name: "All Genres" }, searchQuery: "" });

    const getFilteredMovies = useCallback((movies: Movie[]) => {
        return filter.searchQuery
            ? searchFilter(movies, filter.searchQuery)
            : genreFilter(movies, filter.selectedGenre);
    }, [filter]);

    const onGenreClick = useCallback((genre: Genre) => {
        setFilter(filter => ({
            ...filter,
            searchQuery: "",
            selectedGenre: genre
        }));
    }, []);

    const onSearchMovie = useCallback((searchQuery: string) => {
        setFilter(filter => ({
            ...filter,
            searchQuery,
            selectedGenre: { _id: 0, name: "All Genres" }
        }));
    }, []);

    return { filter, getFilteredMovies, onGenreClick, onSearchMovie };
};

interface IState {
    selectedGenre: Genre;
    searchQuery: string;
}