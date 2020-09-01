import { useCallback } from "react";
import { Movie } from "../../../model/Movie";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { likeMovie, deleteMovie } from "../../../store/slices/movieReducers";

export const useMoviesTable = function (movies: Movie[]) {
    const dispatch: AppDispatch = useDispatch();

    const onLikeMovie = useCallback((id: string) => {
        dispatch(likeMovie(id));
    }, [dispatch]);

    const onDeleteMovie = useCallback((id: string) => {
        dispatch(deleteMovie(id));
    }, [dispatch]);


    return {
        onLikeMovie,
        onDeleteMovie
    };
};