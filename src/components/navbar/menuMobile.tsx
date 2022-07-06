
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { AiOutlineMenuUnfold, AiOutlineSearch, AiOutlineCloseSquare } from "react-icons/ai";

import '../../styles/navBar/menuMobile.css';

export const MenuMobile = ( ) => {

  useEffect ( ( ) => {
    window.addEventListener( 'scroll' , changeBackgroundWhenScrollDown );
  }, [ ] );

  const [ openMenu, setOpenMenu ] = useState< boolean > ( false );

  const [ sizePage ] = useState < number > ( window.innerWidth );

  const openMenuMobile = (  ) => {
    setOpenMenu( true );
  };

  const closeMenuMobile = (  ) => {
    setOpenMenu( false );
  };

  const [ backgroundColor, setBackgroundColor ] = useState < string > ( ' transparent ' );

  
  const changeBackgroundWhenScrollDown = ( ) => {
   const bg = window.scrollY > 40 ? ( setBackgroundColor( '#000000d9' ) ) : ( setBackgroundColor( 'transparent' ) );
    return bg;
  };

  return (
    <>
    { sizePage < 800 ? (
      <div className="mobileContainer" style={ sizePage > 800 ? ( { display: 'none' } ) : ( { display: 'flex' } ) }>
        <header style={ { background: backgroundColor } } >
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