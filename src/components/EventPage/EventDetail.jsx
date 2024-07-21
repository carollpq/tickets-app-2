import React from 'react';
import style from './EventPage.module.css';
import audienceImage from '../../assets/audience.jpg'
import TicketPurchase from './TicketPurchase';

const EventDetail = () => {
  // Hardcoded example event
  const event = {
    title: "Concert in the Park",
    date: "August 15, 2024",
    location: "Central Park, NYC",
    description: "A wonderful concert featuring local bands.",
    imageUrl: "https://example.com/concert.jpg"
  };

  return (
    <div className={style['event-detail-container']}>
      <h2 className={style['event-title']}>{event.title}</h2>
      <p className={style['event-date']}>Date: {event.date}</p>
      <p className={style['event-location']}>Location: {event.location}</p>
      <p className={style['event-description']}>{event.description}</p>
      <TicketPurchase></TicketPurchase>
      <img src={audienceImage} className={style['event-image']} />
    </div>
  );
};

export default EventDetail;
