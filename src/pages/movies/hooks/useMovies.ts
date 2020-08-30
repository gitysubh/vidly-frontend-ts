import { useTypedSelector } from "../../../store/reducers";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { loadMovies } from "../../../store/reducers/movieReducers";
import { loadGenres } from "../../../store/reducers/gnereReducer";


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