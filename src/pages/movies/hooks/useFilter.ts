import { Movie } from "../../../model/Movie";
import { useCallback, useState } from "react";
import { Genre } from "../../../model/Genre";

export const useFilter = (movies: Movie[]) => {
    const [filter, setFilter] = useState<IState>({ genre: undefined, searchQuery: "" });

    const getFilteredMovies = useCallback(() => {
        return movies;
    }, [movies]);

    const onGenreClick = useCallback((genre: Genre) => {
        setFilter({ ...filter, genre });
    }, [movies]);

    return { getFilteredMovies, setFilter };
};

interface IState {
    genre: Genre | undefined;
    searchQuery: string;
}