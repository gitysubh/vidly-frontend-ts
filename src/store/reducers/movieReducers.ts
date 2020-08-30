import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from './../../model/Movie';
import { getMovies } from '../../services/fakeMovieService';

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
    }
});


export default movieReducer;
export const { loadMovies, addMovie } = actions;