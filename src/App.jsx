













import React from "react";
import Header from "./components/Header/Header";
import EventDetail from "./components/EventPage/EventDetail";
import TicketPurchase from "./components/EventPage/TicketPurchase";
import "./styles/App.css";




const App = () => {
  return (
    <div>
      <header className="header-container">
        {/* Include the header component here */}
      </header>

      <main>
        <Header></Header>

        <div className='event-detail-container'>
          <EventDetail cardImage="src/assets/audience.jpg" price="$224.99" title="Taylor Swift US Tour" date="August 15, 2024" location="Central Park, NYC" description="It's Taylor Swift. What more can I say."/>

          <EventDetail cardImage="src/assets/header-bg.jpg" price="$34.99" title="London Music Festival" date="August 30, 2024" location="London" description="A music festival filled with variety of live bands"/>

          <EventDetail cardImage="src/assets/coachella-img.jpg" price="$79.99" title="Coachella" date="September 3, 2024" location="Central Park, NYC" description="Biggest musical festival in the world."/>
        </div>
      </main>
    </div>  );  };



export default App;









