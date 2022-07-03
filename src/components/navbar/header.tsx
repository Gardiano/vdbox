
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import '../../styles/navBar/header.css';

export const Header = ( ) => {
  return (
    <header>
      <nav className="navbar">
        <p> VideoBox </p>
        <Link to="/" > Home </Link>
        <Link to="/movies" > Filmes </Link>
        <Link to="/series" > Series </Link>
      </nav>

      <div className="searchBox">
        <input type="text" placeholder="  Ex: Batman" />
        <button> <AiOutlineSearch /> </button>
      </div>
    </header>
  );
}