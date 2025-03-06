













import React from 'react';
import style from './../../styles/Header.module.css';




const SearchBar = ({ onSearch }) => {

  const handleKeyPress = (event, type)  =>  {

    if (event.key === 'Enter') {

      onSearch(type, event.target.value);   }};

  return (
    <div className={style['search-container']}>

      <input type="text" className={style['search-input']} placeholder="Event type or keywords" onKeyPress={(e) => handleKeyPress(e, 'keywords')} />

      <input type="text" className={style['search-input']} placeholder="Location" onKeyPress={(e) => handleKeyPress(e, 'location')} />

    </div>);    };


















export default SearchBar;




