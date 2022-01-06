import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MovieListing from '../MovieListing';
import apiKey from '../../helper/apikey';
import axiosInstance from '../../helper';
import { addMovies } from '../../store/movies/movieSlice';

const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const resp = await axiosInstance
      .get(`?apikey=${apiKey}&s=${movieText}&type=movie`)
      .catch((err) => {console.log(err.message)})
      dispatch(addMovies(resp.data))
    }
    fetchMovies()
  }, [dispatch])
  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  )
}

export default Home
