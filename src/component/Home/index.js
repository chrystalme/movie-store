import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MovieListing from '../MovieListing';

import { fetchAsyncMovies, fetchAsyncShows } from '../../store/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img" />
      <MovieListing />
    </div>
  );
};

export default Home;
