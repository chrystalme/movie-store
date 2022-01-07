import React from 'react'
import style from './moviecard.module.css'

const MovieCard = ({data}) => {
  return (
    <div className={style.card_container}>
      <div className={style.card}>        
       <img className={style.card_img} src={data.Poster} alt={data.Title} />
       <div className={style.card_body}>
        <h3>{data.Title}</h3>
        <h3>{data.Year}</h3>
       </div>
       </div>
    </div>
  )
}

export default MovieCard

