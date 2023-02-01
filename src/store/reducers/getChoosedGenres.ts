import { createSlice } from "@reduxjs/toolkit";

export type DefaultgetChoosedGenres = {
  choosedGenres: string[];
  isDisabled: boolean;
};

type AddGenresAction = {
  type: string;
  payload: string;
};

const initialState: DefaultgetChoosedGenres = {
  choosedGenres: [],
  isDisabled: true,
};

export const getChoosedGenresSlice = createSlice({
  name: "addGenres",
  initialState,
  reducers: {
    // add or remove genre in genres list
    addGenres(state: DefaultgetChoosedGenres, action: AddGenresAction) {
      state.isDisabled = false;
      if (state.choosedGenres.includes(action.payload)) {
        state.choosedGenres = state.choosedGenres.filter(
          (el: string) => el !== action.payload
        );
      } else {
        state.choosedGenres.push(action.payload);
      }
    },
    // clear genres list
    clearGenres(state: DefaultgetChoosedGenres) {
      state.choosedGenres = [];
    },
    // diabling of Search button on filter panel
    setDisabled(state: DefaultgetChoosedGenres) {
      state.isDisabled = true;
    },
  },
});

export default getChoosedGenresSlice.reducer;
