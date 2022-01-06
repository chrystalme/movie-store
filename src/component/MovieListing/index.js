import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../store/movies/movieSlice';
import MovieCard from '../MovieCard';

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  let renderedMovies = '';
  renderedMovies = movies.Response === 'True' 
  ? (movies.Search.map((movie) => {
    return(<MovieCard key={movie.imdbID} data={movie} />)    
  })) 
  : (<div><h3>{movies.Error}</h3></div>)
  return (
    <div>
      <h3>{renderedMovies}</h3>
    </div>
  )
}

export default MovieListing
