import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../helper';
import apiKey from '../../helper/apikey';

const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
  const movieText = 'Harry';
  const resp = await axiosInstance
    .get(`?apikey=${apiKey}&s=${movieText}&type=movie`)
    .catch((err) => { console.error(err.message); });
  return resp.data;
});
const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.movies = payload;
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
  },
});

export const { addMovies } = movieSlice.actions; // action to dispatch
export const getAllMovies = (state) => state.movies.movies; // to use with useSelector
export default movieSlice.reducer;
