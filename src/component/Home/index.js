import React, { useEffect } from 'react';
import MovieListing from '../MovieListing';
import apiKey from '../../helper/apikey';
import axiosInstance from '../../helper';

const Home = () => {
  const movieText = "Harry"
  useEffect(() => {
    const fetchMovies = async () => {
      const resp = await axiosInstance
      .get(`?apikey=${apiKey}&s=${movieText}&type=movie`)
      .catch((err) => {console.log(err.message)})
      console.log(resp)
    }
    fetchMovies()
  }, [])
  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  )
}

export default Home
