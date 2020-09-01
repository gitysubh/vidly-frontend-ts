import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Genre } from "../../model/Genre";
import { apiCallBegan } from "./api";
import { SliceStateBase } from "../types/sliceStateBase";
import { RootState } from ".";

interface IGenreStore extends SliceStateBase {
    list: Genre[];
}

const initialState: IGenreStore = { list: [] };
const apiEndpoint = './genres';

const { reducer: genreReducer, actions } = createSlice({
    initialState,
    name: "genre",
    reducers: {
        genreLoaded(state, action: PayloadAction<Genre[]>) {
            return { ...state, list: [{ _id: 0, name: "All Genres" }, ...action.payload] };
        },
    }
});

export default genreReducer;

export const loadGenres = () => {
    return apiCallBegan({
        url: apiEndpoint,
        method: 'get',
        onSuccess: actions.genreLoaded.type
    })
}

// Selectors 
export const allGenreSelector = () => (state: RootState) => state.genres.list;