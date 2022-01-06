import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../store/movies/movieSlice';

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  }
});