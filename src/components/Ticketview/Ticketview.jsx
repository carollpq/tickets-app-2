import React from 'react'
import style from "./Ticketview.module.css"

const Ticketview = () => {
  return (
    <div className={style['ticket-container']}>
        <div className={style['ticket']}>
        <img src="src/assets/qr_code.png" alt="" id={style["qr-code"]}/>
        <div className={style['ticket-details']}>
                <b><p className={style['ticket-title']}>Order number</p></b>
                <p>OUX4784</p>
            </div>
            <div className={style['ticket-details']}>
                <b><p className={style['ticket-title']}>Event</p></b>
                <p>Some sort of event</p>
            </div>
            <div className={style['ticket-details']}>
                <b><p className={style['ticket-title']}>Location</p></b>
                <p>Somewhere in London</p>
            </div>
            <div className={style['ticket-details']}>
                <b><p className={style['ticket-title']}>Date</p></b>
                <p>12/12/2024</p>
            </div>
        </div>
    </div>
  )
}

export default Ticketview