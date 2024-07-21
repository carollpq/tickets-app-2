import React from 'react';
import style from './EventPage.module.css';

const TicketPurchase = ({price}) => {
  const handleBuy = () => {
    alert('Proceed to checkout!');
    // Simulate a purchase action
  };

  return (
    <>
        <div className={style['ticket-purchase-container']}>
            <h2 className={style['price']}>{price}</h2>
            <button onClick={handleBuy} className={style['buy-button']}>Book Now</button>
        </div>
    </>
  );
};

export default TicketPurchase;
