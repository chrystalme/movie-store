import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: {}
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    }
  }
});

export const { addMovies } = movieSlice.actions; // action to dispatch
export const getAllMovies = state => state.movies.movies // to use with useSelector
export default movieSlice.reducer