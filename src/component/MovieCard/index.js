import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './moviecard.module.css';

const MovieCard = ({ data }) => {
  const {
    imdbID, Title, Year, Poster,
  } = data;
  return (
    <Link to={`movie/${imdbID}`}>
      <div className={style.card_container}>
        <div className={style.card}>
          <img className={style.card_img} src={Poster} alt={data.Title} />
          <div className={style.card_body}>
            <h3>{Title}</h3>
            <h3>{Year}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

MovieCard.propTypes = {
  data: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Poster: PropTypes.string,
    imdbID: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
