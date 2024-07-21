import React from 'react';
import style from './EventPage.module.css';

const TicketPurchase = () => {
  const handleBuy = () => {
    alert('Proceed to checkout!');
    // Simulate a purchase action
  };

  return (
    <>
        <div className={style['purchase-container']}>
            <h2 className={style['price']}>24.99</h2>
            <button onClick={handleBuy} className={style['buy-button']}>Book Now</button>
        </div>
    </>
  );
};

export default TicketPurchase;
