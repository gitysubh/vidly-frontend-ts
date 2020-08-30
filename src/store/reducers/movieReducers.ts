import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Movie } from './../../model/Movie';

const initialState: Movie[] = []

const { reducer: movies, actions } = createSlice({
    initialState,
    name: "movies",
    reducers: {
        loadMovies(state: Movie[], action): Movie[] {
            return [];
        },
        addMovie(state: Movie[], action: PayloadAction<Movie>): Movie[] {
            return [...state, action.payload];
        },
    }
});


export default movies;
export const { loadMovies, addMovie } = actions;