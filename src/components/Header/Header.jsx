import React from 'react'
import style from "./Header.module.css"

const Header = () => {
  return (
    <div className={style['header-container']}>
        <div className={style['navbar']}>
            <ul>
                <li></li>
            </ul>
        </div>
        <h1 className={style['header-title']}>Book Your Next Event With Us</h1>
        <p className={style['header-desc']}>some dummy text idk</p>
    </div>
  )
}

export default Header