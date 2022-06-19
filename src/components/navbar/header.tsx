
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import '../../styles/header.css';

export const Header = ( ) => {

  const location = useLocation( ).pathname;

  const bg = { primary: 'transparent', secondary: '#FF5757' };

  return (
    <header style={ location == '/movies' ? ( { background: bg.secondary } ) : ( { background: bg.primary } ) }>

      <nav className="navbar">
        <p style={ location == '/movies' ? ( { color: 'white' } ) : ( { color: '#FF5357' } ) }> 
          VideoBox 
        </p>
        
        <Link to="/" > Home </Link>
        <Link to="/series" > Series </Link>
        <Link to="/movies" > Filmes </Link>
        <Link to="/Trending" > Traillers </Link>
      </nav>

      <div className="searchBox">
        <input type="text" placeholder="  Ex: Batman" />
        <button> <AiOutlineSearch /> </button>
      </div>
    </header>
  );
}