import { configureStore, getDefaultMiddleware, Middleware } from "@reduxjs/toolkit";
import rootReducer from "./slices";
import { api } from './middlewares';

const store = configureStore({
    reducer: rootReducer,
    middleware:[
        ...getDefaultMiddleware(),
        api,
    ]
});

export default store;
export type AppDispatch = typeof store.dispatch
