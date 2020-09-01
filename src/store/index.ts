import { configureStore, getDefaultMiddleware, Middleware } from "@reduxjs/toolkit";
import rootReducer from "./slices";
import { api } from './middlewares';
import { loadGenres } from "./slices/gnereReducer";

const store = configureStore({
    reducer: rootReducer,
    middleware: [
        ...getDefaultMiddleware(),
        api,
    ]
});

// Load on initial app loading
store.dispatch(loadGenres());

export default store;
export type AppDispatch = typeof store.dispatch
