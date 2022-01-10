import { createSlice } from '@reduxjs/toolkit';

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
});

export const { addMovies } = movieSlice.actions; // action to dispatch
export const getAllMovies = (state) => state.movies.movies; // to use with useSelector
export default movieSlice.reducer;
