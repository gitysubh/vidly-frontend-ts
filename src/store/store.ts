import { configureStore } from "@reduxjs/toolkit";
import movies from "./reducers/movieReducers";

const store = configureStore({
    reducer: movies
})