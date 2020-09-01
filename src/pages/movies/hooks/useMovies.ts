import { useTypedSelector } from "../../../store/slices";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { loadMovies } from "../../../store/slices/movieReducers";
import { loadGenres } from "../../../store/slices/gnereReducer";


export const useMovies = () => {
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(loadMovies());
        dispatch(loadGenres());
    }, [dispatch]);

    const movies = useTypedSelector(state => state.movies);
    const genres = useTypedSelector(state => state.genres);

    return { movies, genres };
};