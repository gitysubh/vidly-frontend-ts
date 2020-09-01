import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from './../../model/Movie';
import { getMovies, deleteMovie as deleteMovieDb } from '../../services/fakeMovieService';

const initialState: Movie[] = [];

const { reducer: movieReducer, actions } = createSlice({
    initialState,
    name: "movies",
    reducers: {
        loadMovies(state, action: PayloadAction): Movie[] {
            return getMovies();
        },
        addMovie(state: Movie[], action: PayloadAction<Movie>): Movie[] {
            return [...state, action.payload];
        },
        likeMovie(state, action: PayloadAction<string>) {
            const index = state.findIndex(movie => movie._id === action.payload);
            if (index > -1) {
                state[index] = { ...state[index], isLiked: !!!state[index].isLiked };
            }
            return state;
        },
        deleteMovie(state, action: PayloadAction<string>) {
            const newState = state.filter(item => item._id !== action.payload);
            deleteMovieDb(action.payload);
            return newState;
        }
    }
});


export default movieReducer;
export const { loadMovies, addMovie, likeMovie, deleteMovie } = actions;