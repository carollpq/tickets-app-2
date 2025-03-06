













import React from 'react'
import style from "./../../styles/Header.module.css"
import SearchBar from './Searchbar';





const Header = () => {
  return (  <>

    <header className={style['header-container']}>
      <h1 className={style['header-logo']}>TicketBeam</h1>

      <SearchBar/>

      <nav className={style['nav-links']}>
        <button>Home</button>

        <button>Your Events</button>

        <button>About</button>

        <button>Contact us</button>
      </nav>

    </header>
    </>     );      }












export default Header









