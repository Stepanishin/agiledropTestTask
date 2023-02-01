import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import getCurrentUrlForMoviesSlice from "./reducers/getCurrentUrlForMovies";
import getChoosedGenresSlice from "./reducers/getChoosedGenres";
import getMoviesSlice from "./reducers/getMovies";

const rootReducer = combineReducers({
  getCurrentUrlForMoviesSlice,
  getChoosedGenresSlice,
  getMoviesSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
