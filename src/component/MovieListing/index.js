import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../store/movies/movieSlice';
import MovieCard from '../MovieCard';
import style from './movielist.module.css';

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
      <div>
        <h2 className={style.title}>Movies</h2>       
         <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>{renderedMovies}</div>      
      </div>
    </div>
  )
}

export default MovieListing
