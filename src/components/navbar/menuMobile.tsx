
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { AiOutlineMenuUnfold, AiOutlineSearch, AiOutlineCloseSquare } from "react-icons/ai";

import '../../styles/navBar/menuMobile.css';

export const MenuMobile = ( ) => {

  const location = useLocation( ).pathname;

  const [ openMenu, setOpenMenu ] = useState< boolean > ( false );

  const [ sizePage ] = useState < number > ( window.innerWidth );

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
        <header >
            <p> VideoBox </p>
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
                <Link to="/movies" onClick={ () => setOpenMenu(false)}  > Filmes </Link>
                <Link to="/series" onClick={ () => setOpenMenu(false)}  > Series </Link>
                <button onClick={ closeMenuMobile }> <AiOutlineCloseSquare /> </button>
                <h1> VideoBox </h1>
            </nav>
        ) : ( null )}
        </div> ) : ( null )
     }
    </>
    
  );
}