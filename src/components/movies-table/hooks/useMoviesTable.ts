import { useCallback } from "react";
import { Movie } from "../../../model/Movie";
import { useDispatch } from "react-redux";
import { likeMovie } from "../../../store/reducers/movieReducers";
import { AppDispatch } from "../../../store";


export const useMoviesTable = function (movies: Movie[]) {
    const dispatch: AppDispatch = useDispatch();

    const onLikeMovie = useCallback((id: string) => {
        dispatch(likeMovie(id));
    }, [dispatch]);

    return {
        onLikeMovie
    };
};