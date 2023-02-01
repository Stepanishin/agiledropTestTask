import { createSlice } from "@reduxjs/toolkit";
import API_KEY from "../../assets/constants";

export type DefaultGerCurrentUrlForMoviesSlice = {
  currentUrl: string;
};

type AddUrlAction = {
  type: string;
  payload: string;
};

const initialState: DefaultGerCurrentUrlForMoviesSlice = {
  currentUrl: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
};

export const getCurrentUrlForMoviesSlice = createSlice({
  name: "addUrl",
  initialState,
  reducers: {
    // changing of basic url for movies list
    addUrl(state: DefaultGerCurrentUrlForMoviesSlice, action: AddUrlAction) {
      state.currentUrl += action.payload;
    },
  },
});

export default getCurrentUrlForMoviesSlice.reducer;
