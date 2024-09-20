import { TypedUseSelectorHook, useSelector } from "react-redux";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { authReducer, optionsReducer } from "../reducer";
import watchOptionsSaga from "../reducer/options/options.saga";

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
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

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
    }).concat(middleware),
});

sagaMiddleware.run(watchOptionsSaga);

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useStoreSelector: TypedUseSelectorHook<RootStore> = useSelector;
export const persistor = persistStore(store);
