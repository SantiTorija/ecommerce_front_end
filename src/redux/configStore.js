import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import cartSlice from "./cartSlice";

import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({ user: userSlice, cart: cartSlice });

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);
export { store, persistor };
