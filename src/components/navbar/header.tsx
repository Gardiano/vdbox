
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import '../../styles/navBar/header.css';

export const Header = ( ) => {

  useEffect ( ( ) => {
    window.addEventListener( 'scroll' , changeBackgroundWhenScrollDown );
  }, [ ] );

  const [ input, setInput ] = useState<string> ( '' );

  const [ backgroundColor, setBackgroundColor ] = useState < string > ( ' transparent ' );

  const handleChange = ( e: any ) => {
    e.target.value == ' ' || e.target.value.length == 0 ? ( setInput( '' ) ) : ( setInput( e.target.value ) );
  };

  const changeBackgroundWhenScrollDown = ( ) => {
   const bg = window.scrollY > 40 ? ( setBackgroundColor( '#000000d9' ) ) : ( setBackgroundColor( 'transparent' ) );
    return bg;
  };

  return (
    <>
      <header style={ { background: ` ${ backgroundColor } ` } } >
        <nav className="navbar">
          <p> VideoBox </p>
          <Link to="/" > Home </Link>
          <Link to="/movies" > Filmes </Link>
          <Link to="/series" > Series </Link>
        </nav>

        <div className="searchBox">
          <input 
            type="text" 
            onChange={ ( e ) => handleChange ( e ) }
            placeholder=" Ex: O Poderoso Chefão" 
            value= { input || '' }
          />

          <button> <AiOutlineSearch /> </button>

          { input?.length >= 1 ? ( 
              <div className='searchResultsContainer'>
                <div>
                  <p>akodaskodas</p>
                  <p>akodaskodas</p>
                </div>
              </div>
            ) : ( null ) }
        </div>
      </header>
    </>
  );
}