import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../store/movies/movieSlice';
import MovieCard from '../MovieCard';
import style from './movielist.module.css';

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderedMovies = '';
  let renderedShows = '';
  renderedMovies = movies.Response === 'True'
    ? (movies.Search.map((movie) => (<MovieCard key={movie.imdbID} data={movie} />)))
    : (<div><h3>{movies.Error}</h3></div>);
  renderedShows = shows.Response === 'True'
    ? (shows.Search.map((show) => (<MovieCard key={show.imdbID} data={show} />)))
    : (<div><h3>{shows.Error}</h3></div>);
  return (
    <div>
      <div>
        <h2 className={style.title}>Movies</h2>
        <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1">{renderedMovies}</div>
      </div>
      <div>
        <h2 className={style.title}>Shows</h2>
        <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1">{renderedShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
