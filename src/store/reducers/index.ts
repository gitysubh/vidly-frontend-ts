import { combineReducers } from "@reduxjs/toolkit";
import movieReducer from "./movieReducers";
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import genreReducer from "./gnereReducer";

const rootReducer = combineReducers({
    movies: movieReducer,
    genres: genreReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
