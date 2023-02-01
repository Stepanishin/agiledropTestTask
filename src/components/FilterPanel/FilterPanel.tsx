import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  DefaultgetChoosedGenres,
  getChoosedGenresSlice,
} from "../../store/reducers/getChoosedGenres";
import { getCurrentUrlForMoviesSlice } from "../../store/reducers/getCurrentUrlForMovies";
import { getMoviesSlice } from "../../store/reducers/getMovies";
import GenresList from "../GenresList/GenresList";
import Arrow from "../UI/Arrow/Arrow";
import "./FilterPanel.scss";

const FilterPanel = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false); // State of open or closed menu Filters

  // Variables for Genres and for button: Search
  let { choosedGenres, isDisabled } = useAppSelector((state) => state.getChoosedGenresSlice) as DefaultgetChoosedGenres;
  const { addUrl } = getCurrentUrlForMoviesSlice.actions; // Changing url
  const { clearMovies } = getMoviesSlice.actions; // Delete previous movies
  const { setDisabled } = getChoosedGenresSlice.actions; // Disable button Search

  const dispatch = useAppDispatch();

  // Arrow rotation
  const changeArrow = () => {
    setIsOpen(!isOpen);
  };

  // Changing the main URL when choosing new filters
  const changeUrl = () => {
    dispatch(addUrl(`&with_genres=${choosedGenres.join(",")}`));
    dispatch(clearMovies());
    dispatch(setDisabled());
  };

  return (
    <aside className="FilterPanel">
      <div className="filters_container">
        <div className="filters_btn_container" onClick={changeArrow}>
          <h3>Filters</h3>
          <Arrow isOpen={isOpen} />
        </div>
        {isOpen && <GenresList />}
      </div>
      <button
        className="FilterPanel_search_btn"
        onClick={changeUrl}
        disabled={isDisabled}
      >
        Search
      </button>
    </aside>
  );
});

export default FilterPanel;
