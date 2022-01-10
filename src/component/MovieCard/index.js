import React from 'react';
import PropTypes from 'prop-types';
import style from './moviecard.module.css';

const MovieCard = ({ data }) => (
  <div className={style.card_container}>
    <div className={style.card}>
      <img className={style.card_img} src={data.Poster} alt={data.Title} />
      <div className={style.card_body}>
        <h3>{data.Title}</h3>
        <h3>{data.Year}</h3>
      </div>
    </div>
  </div>
);

MovieCard.propTypes = {
  data: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Poster: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
