import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../model/Movie';
import { RootState } from '.';
import { apiCallBegan } from './api';
import { SliceStateBase } from '../types/sliceStateBase';
import { getMovies, deleteMovie as deleteMovieDb } from '../../services/fakeMovieService';


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
        deleteMovie(state, action: PayloadAction<string>) {
            const newState = { ...state, list: state.list.filter(item => item._id !== action.payload) };
            deleteMovieDb(action.payload);
            return newState;
        }
    }
});

export default movieReducer;
const { moviesLoaded, addMovie } = actions;
export const { likeMovie, deleteMovie } = actions

// Selectors
export const allMovieSelector = () => (state: RootState) => state.movies.list;

// Actions
export const loadMovies = () => {
    return apiCallBegan({
        url: apiEndpoint,
        method: 'get',
        onSuccess: moviesLoaded.type
    });
}
