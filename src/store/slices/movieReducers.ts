import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../model/Movie';
import { getMovies } from '../../services/fakeMovieService';
import { AppDispatch } from '..';
import { RootState } from '.';
import { apiCallBegan } from './api';

interface IMovieState {
    list: Movie[];
    loadingStatus?: 'success' | 'idle' | 'failed';
    lastFetchedTime?: number
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
        }
    }
});

export default movieReducer;
const { moviesLoaded, addMovie } = actions;
export const { likeMovie } = actions

// Selectors
export const allMovieSelector = () => (state: RootState) => state.movies.list;

// Actions
export const loadMovies = () => {
    return apiCallBegan({
        url: apiEndpoint,
        method: 'get',
        onSuccess: moviesLoaded.type
    })
}
