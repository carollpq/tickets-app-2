













import React, { useState } from "react";
import style from "./../../styles/EventPage.module.css";








const TicketPurchase = ({ price }) => {
  const [isTicketVisible, setTicketVisible] = useState(false);

  const handleBuy = () => {
    setTicketVisible(!isTicketVisible); // Show the ticket
  };

  return (
    <>
      <div className={style["ticket-purchase-container"]}>
        <h2 className={style["price"]}>{price}</h2>
        <button onClick={handleBuy} className={style["buy-button"]}>
          Book Now
        </button>
      </div>
      {isTicketVisible && (
        <>
          <div className={style["overlay"]}></div>
          <div className={style["ticket-popup"]}>
            <h3>Ticket Confirmation</h3>
            <p>Price: {price}</p>
            <p>Thank you for your purchase!</p>
            <img src="src/assets/qr_code.png" alt="" id={style["qr-code"]} />
            <div className={style["btn-container"]}>
              <button className={style['btn']} onClick={handleBuy}>
                Close
              </button>
              <button className={style['btn']}>Send to Email</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TicketPurchase;
