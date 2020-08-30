import { useTypedSelector } from "../../../store/reducers";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { loadMovies } from "../../../store/reducers/movieReducers";


export const useMovies = () => {
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(loadMovies());
    }, [dispatch]);

    const movies = useTypedSelector(state => state.movies);

    return { movies };
};