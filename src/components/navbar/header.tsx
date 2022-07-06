
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import '../../styles/navBar/header.css';

export const Header = ( ) => {

  useEffect ( ( ) => {
    window.addEventListener( 'scroll' , changeBackgroundWhenScrollDown );
  }, [ ]);

  const [ backgroundColor, setBackgroundColor ] = useState < string > ( ' transparent ' );

  
  const changeBackgroundWhenScrollDown = ( ) => {
   const bg = window.scrollY > 40 ? ( setBackgroundColor( '#000000d9' ) ) : ( setBackgroundColor( 'transparent' ) );
    return bg;
  }

  return (
    <header style={ { background: ` ${ backgroundColor } ` } } >
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