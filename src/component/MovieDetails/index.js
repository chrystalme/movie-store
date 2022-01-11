/* eslint-disable import/named */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncMovieOrShowDetails, getDetails } from '../../store/movies/movieSlice';

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getDetails);
  let renderedDetails = '';

  renderedDetails = data.Response === 'True'
    ? (data.Search.map((movie) => (<div key={movie.imdbID} data={data} />)))
    : (<div><h3>{data.Error}</h3></div>);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetails(imdbID));
  }, [dispatch, imdbID]);
  return (
    <div>
      <h3>Movie Details</h3>
      <h3>{renderedDetails}</h3>
    </div>
  );
};

export default MovieDetails;
