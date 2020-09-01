import { useTypedSelector } from "../../../store/slices";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { loadMovies, allMovieSelector } from "../../../store/slices/movieReducers";
import { allGenreSelector } from "../../../store/slices/genreReducer";


export const useMovies = () => {
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(loadMovies());
    }, [dispatch]);

    const movies = useTypedSelector(allMovieSelector());
    const genres = useTypedSelector(allGenreSelector());

    return { movies, genres };
};