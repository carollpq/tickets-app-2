import React from 'react';
import Header from './components/Header/Header';
import EventDetail from './components/EventPage/EventDetail';
import TicketPurchase from './components/EventPage/TicketPurchase';

const App = () => {
  return (
    <div>
      <header className="header-container">
        {/* Include the header component here */}
      </header>
      <main>
        <Header></Header>
        <EventDetail />
      </main>
    </div>
  );
};

export default App;
