import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../helper';
import apiKey from '../../helper/apikey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
  const movieText = 'Harry';
  const response = await axiosInstance
    .get(`?apikey=${apiKey}&s=${movieText}&type=movie`)
    .catch((err) => { console.error(err.message); });
  return response.data;
});
const initialState = {
  movies: {},
  shows: {},
};

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async () => {
  const seriesText = 'Friends';
  const response = await axiosInstance
    .get(`?apikey=${apiKey}&s=${seriesText}&type=series`)
    .catch((err) => console.error(err.message));
  return response.data;
});

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.movies = payload;
    },
    addShows: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.shows = payload;
    },
    // filtermovies: (state, {payload}) => {
    //   state.movies.filter(movie => movie.Title === payload)
    // }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log('Pending');
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log('Rejected');
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, shows: payload };
    },
  },
});

export const { addMovies } = movieSlice.actions; // action to dispatch
export const getAllMovies = (state) => state.movies.movies; // to use with useSelector
export const getAllShows = (state) => state.movies.shows; // to use with useSelector
export default movieSlice.reducer;
