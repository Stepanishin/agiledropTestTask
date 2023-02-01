import { createSlice } from "@reduxjs/toolkit";
import movieProps from "../../types/movieProps";

export type DefaultGetMoviesSlice = {
  movies: movieProps[];
  page: number;
  isEmpty: boolean;
};

interface GetMoviesAction {
  type: string;
  payload: movieProps[] | boolean;
}

const initialState: DefaultGetMoviesSlice = {
  movies: [],
  page: 1,
  isEmpty: false,
};

export const getMoviesSlice = createSlice({
  name: "getMovies",
  initialState,
  reducers: {
    // adding movies to movies list
    getMovies(state: DefaultGetMoviesSlice, action: GetMoviesAction) {
      state.isEmpty = false;
      state.movies = [...state.movies, ...(action.payload as movieProps[])];
    },
    // getting of the next page of movies list
    getNextPage(state: DefaultGetMoviesSlice) {
      state.page = state.page + 1;
    },
    // deleting of movies list
    clearMovies(state: DefaultGetMoviesSlice) {
      state.movies = [];
      state.page = 1;
    },
    // Function to know if you can upload more movies
    emptyList(state: DefaultGetMoviesSlice, action: GetMoviesAction) {
      state.isEmpty = action.payload as boolean;
    },
  },
});

export default getMoviesSlice.reducer;
