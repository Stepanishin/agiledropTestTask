import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  DefaultGetMoviesSlice,
  getMoviesSlice,
} from "../../store/reducers/getMovies";
import movieProps from "../../types/movieProps";
import "./MoviesList.scss";
import { formatDate } from "../../helpers/formatDate";
import { DefaultGerCurrentUrlForMoviesSlice } from "../../store/reducers/getCurrentUrlForMovies";
import ProgressBar from "../UI/ProgressBar/ProgressBar";
import noPicture from '../../assets/img/No_Picture.jpg'

const MoviesList: FC = () => {
  // Getting current URL for movies list
  let { currentUrl } = useAppSelector((state) => state.getCurrentUrlForMoviesSlice) as DefaultGerCurrentUrlForMoviesSlice;
  // Getting all parameters of movies list
  let { movies, page, isEmpty } = useAppSelector((state) => state.getMoviesSlice) as DefaultGetMoviesSlice;

  // Getting of functions for movies list
  const { getMovies, getNextPage, emptyList } = getMoviesSlice.actions;
  const dispatch = useAppDispatch();

  // Database query for movies
  useEffect(() => {
    fetch(`${currentUrl}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(getMovies(data.results));
        if (data.results.length === 0 && movies.length === 0) {
          dispatch(emptyList(true));
        }
      });
  }, [page, currentUrl]);

  // function for loading next page of movies
  const handleLoadMore = () => {
    dispatch(getNextPage());
  };

  // Function to track the user's scroll
  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && page > 1) {
      dispatch(getNextPage());
    }
  };

  // Hanging this function on the browser window
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [movies]);

  return (
    <div className="Movies_list_container">
      <div className="Movies_list">
        {isEmpty ? (
          <p>No items were found that match your query.</p>
        ) : (
          movies.map((movie: movieProps) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
              overview={movie.overview}
              vote_average={movie.vote_average}
            />
          ))
        )}
      </div>
      {page < 2 && !isEmpty && movies.length > 19 && (
        <button className="Movies_list_btn" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default MoviesList;

// Movie Card
const MovieCard:FC<movieProps> = React.memo(({ title, poster_path, release_date, overview, vote_average }) => {
    return (
      <div className="movie-card">
        <img
          src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : noPicture}
          alt={title}
        />
        <div>
          <div className="movie-info">
            {
              vote_average  ? <ProgressBar percent={vote_average * 10 }/> : <></> 
            }
            {
              vote_average === 0 && <ProgressBar percent={vote_average * 10} />
            }
            <h2 className="movie-title">{title}</h2>
            {release_date && (
              <p className="movie-release_date">{formatDate(release_date)}</p>
            )}
          </div>
          <div className="movie-overview">
            <p>{overview}</p>
          </div>
        </div>
      </div>
    );
  }
);
