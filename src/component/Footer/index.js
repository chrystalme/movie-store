import React from 'react'
import style from './footer.module.css'

const Footer = () => {
  return (
    <div className={style.container}>
      <div>Movie App</div>
      <div className={style.inner_text}>&copy;2022, all right reserved. ImDB&reg; movies</div>
    </div>
  )
}

export default Footer
