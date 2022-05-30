
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenuUnfold, AiOutlineSearch, AiOutlineCloseSquare } from "react-icons/ai";

import '../styles/menuMobile.css';
import { useLocation } from 'react-router';

export const MenuMobile = () => {

  const location = useLocation( ).pathname;

  const [ openMenu, setOpenMenu ] = useState< boolean > ( false );

  const [ sizePage ] = useState < number > ( window.innerWidth );

  const bg = { primary: 'transparent', secondary: '#FF5757' };

  const openMenuMobile = (  ) => {
    setOpenMenu( true );
  }

  const closeMenuMobile = (  ) => {
    setOpenMenu( false );
  }

  return (
    <>
    { sizePage < 800 ? (
      <div className="mobileContainer" style={ sizePage > 800 ? ( { display: 'none' } ) : ( { display: 'flex' } ) }>
        <header style={ location == '/movies' ? ( { background: bg.secondary } ) : ( { background: bg.primary } ) }>
            <p  style={ location == '/movies' ? ( { color: 'white' } ) : ( { color: '#FF5757' } ) } > VideoBox </p>
            <div className="searchBox">
                <input type="text" placeholder="  Ex: Batman" />
                <button className="searchButton"> <AiOutlineSearch /> </button>
            </div>

            <button onClick={ openMenuMobile }> 
               <AiOutlineMenuUnfold />
            </button>
        </header>

        {openMenu !== false ? (
            <nav className="navbar">        
                <Link to="/" onClick={ () => setOpenMenu(false)} > Home </Link>
                <Link to="/series" onClick={ () => setOpenMenu(false)}  > Series </Link>
                <Link to="/movies" onClick={ () => setOpenMenu(false)}  > Filmes </Link>
                <Link to="/Trending" onClick={ () => setOpenMenu(false)}  > Traillers </Link>
                <button onClick={ closeMenuMobile }> <AiOutlineCloseSquare /> </button>

                <h1> VideoBox </h1>
            </nav>
        ) : ( null )}
        </div> ) : ( null )
     }
    </>
    
  );
}