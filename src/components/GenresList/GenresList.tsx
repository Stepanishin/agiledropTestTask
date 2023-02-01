import React, { FC, useCallback, useEffect, useState } from "react";
import API_KEY from "../../assets/constants";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  DefaultgetChoosedGenres,
  getChoosedGenresSlice,
} from "../../store/reducers/getChoosedGenres";
import "./GenresList.scss";
import genreProps from "../../types/genreProps";

const GenresList: FC = React.memo(() => {
  const [genres, setGenres] = useState<genreProps[]>([]); // State of Selected genres

  // getting all Genres
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setGenres(data.genres);
      });
  }, []);

  return (
    <div className="Genres_List">
      <h2>Genres</h2>
      <div className="Genres_List_container">
        {genres.map((item: genreProps) => {
          return (
            <Genre
              key={item.id}
              id={item.id}
              name={item.name}
              genre={item.id}
            />
          );
        })}
      </div>
    </div>
  );
});

export default GenresList;

// Genre item
const Genre: FC<genreProps> = React.memo(({ id, name, genre }) => {
  // Getting Selected Genres
  let { choosedGenres } = useAppSelector(
    (state) => state.getChoosedGenresSlice
  ) as DefaultgetChoosedGenres;

  //Getting the function to add genres
  const { addGenres } = getChoosedGenresSlice.actions;
  const dispatch = useAppDispatch();

  // Function to add genre
  const handleClick = useCallback(() => {
    dispatch(addGenres(`${genre}`));
  }, [dispatch, genre]);

  return (
    <button
      className={
        choosedGenres.includes(genre.toString())
          ? "genre_btn_selected"
          : "genre_btn"
      }
      key={id}
      onClick={handleClick}
    >
      {name}
    </button>
  );
});
