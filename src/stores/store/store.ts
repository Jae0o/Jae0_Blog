import { TypedUseSelectorHook, useSelector } from "react-redux";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { authReducer } from "../reducer";

const rootReducer = combineReducers({
  auth: authReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useStoreSelector: TypedUseSelectorHook<RootStore> = useSelector;
