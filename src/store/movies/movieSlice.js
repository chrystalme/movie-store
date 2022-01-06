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

export const { addMovies } = movieSlice.actions;
export const getAllMovies = state => state.movies.movies // action to dispatch
export default movieSlice.reducer