import { TypedUseSelectorHook, useSelector } from "react-redux";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { authReducer, optionsReducer } from "../reducer";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  auth: authReducer,
  options: optionsReducer,
});

const persistedReducer = persistReducer(
  {
    key: "store",
    storage,
    whitelist: ["options"],
  },
  rootReducer,
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useStoreSelector: TypedUseSelectorHook<RootStore> = useSelector;
export const persistor = persistStore(store);
