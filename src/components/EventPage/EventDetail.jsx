import React from 'react';
import style from './EventPage.module.css';
import TicketPurchase from './TicketPurchase';

const EventDetail = ({cardImage, title, date, location, description, price}) => {
  // Hardcoded example event

  return (
    <div className={style['event-detail-container']}>
      <img src={cardImage} className={style['event-image']} />
      <h2 className={style['event-title']}>{title}</h2>
      <p className={style['event-date']}>Date: {date}</p>
      <p className={style['event-location']}>Location: {location}</p>
      <p className={style['event-description']}>{description}</p>
      <TicketPurchase price={price}></TicketPurchase>
    </div>
  );
};

export default EventDetail;
