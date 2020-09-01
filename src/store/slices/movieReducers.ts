import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../model/Movie';
import { RootState } from '.';
import { apiCallBegan } from './api';
import { SliceStateBase } from '../types/sliceStateBase';

interface IMovieState extends SliceStateBase {
    list: Movie[];
}
const initialState: IMovieState = {
    list: []
};
const apiEndpoint = '/movies'

// Slices
const { reducer: movieReducer, actions } = createSlice({
    initialState,
    name: "movies",
    reducers: {
        moviesLoaded(state, action: PayloadAction<Movie[]>): IMovieState {
            return { ...state, list: action.payload };
        },
        addMovie(state, action: PayloadAction<Movie>): void {
            state.list.push(action.payload);
        },
        likeMovie(state, action: PayloadAction<string>) {
            const index = state.list.findIndex(movie => movie._id === action.payload);
            if (index > -1) {
                state.list[index] = { ...state.list[index], isLiked: !!!state.list[index].isLiked };
            }
            return state
        },
        movieDeleted(state, action: PayloadAction<Movie>) {
            const newState = { ...state, list: state.list.filter(item => item._id !== action.payload._id) };
            return newState;
        }
    }
});

export default movieReducer;
export const { likeMovie } = actions

// Selectors
export const allMovieSelector = () => (state: RootState) => state.movies.list;

// Actions
export const loadMovies = () => {
    return apiCallBegan({
        url: apiEndpoint,
        method: 'get',
        onSuccess: actions.moviesLoaded.type
    });
}
export const deleteMovie = (id: string) => {
    return apiCallBegan({
        url: `${apiEndpoint}/${id}`,
        method: 'delete',
        onSuccess: actions.movieDeleted.type
    });
}