import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Genre } from "../../model/Genre";
import { getGenres } from "../../services/fakeGenreService"

const initialState: Genre[] = [];

const { reducer: genreReducer, actions } = createSlice({
    initialState,
    name: "genre",
    reducers: {
        loadGenres(state, action: PayloadAction) {
            return [{ name: "All Genres", _id: 0 }, ...getGenres(),];
        },
    }
});

export default genreReducer;
export const { loadGenres } = actions

