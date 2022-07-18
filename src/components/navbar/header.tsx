
import { useEffect, useRef, useState } from 'react';

import { SearchResult } from '../navbar/searchResult';

import { Link } from 'react-router-dom';

import useOnClickOutside from "../../hooks/useOutsideClick";

import { MultiSearchController } from '../../controllers/moviesController/MultiSearchController';

import { useSearch } from '../../hooks/useSearchContext';

import { AiOutlineSearch } from 'react-icons/ai';

import movieTypes from '../../models/cards';

import '../../styles/navBar/header.css';

export const Header = ( ) => {

  // search hook
  const { values, setValues, itsOpen, setItsOpen } = useSearch( );

  const ref = useRef<HTMLDivElement>( null );  

  useEffect( ( ) => {
    getData();
     window.addEventListener( 'scroll' , changeBackgroundWhenScrollDown );
  }, [ values ] );

  const [ data, setData ] = useState< movieTypes[ ] > ( [ ] );

  const [ backgroundColor, setBackgroundColor ] = useState < string > ( ' transparent ' );

  const handleChange = ( e: any ) => {
    e.target.value == ' ' || e.target.value.length === 0 ? ( setValues( '' ) ) : ( setValues( e.target.value ) );
  };

  const handleClickOutside = ( ) => {
    if ( itsOpen ) {
      setItsOpen( false );
      setValues( '' );
    }
  };
  
  useOnClickOutside( ref, handleClickOutside );

  const changeBackgroundWhenScrollDown = ( ) => {
   const bg = window.scrollY > 40 ? ( setBackgroundColor( '#000000d9' ) ) : ( setBackgroundColor( 'transparent' ) );
    return bg;
  };

  const getData = async ( ) => {
    try {
      const data = await MultiSearchController( values );
          setItsOpen ( true );
            setData( data );
              console.log( data )
    } catch( e: any ) {
      console.log( e )
   }
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
          <div className='inputBox'>
              <input
                onChange={ ( e ) => handleChange( e ) }
                type="text"
                alt="Search"
                placeholder="Pesquise por título ou elenco..."
                value={ values || '' }
              /> 
            
             <AiOutlineSearch className='searchIcon' /> 
          </div>

           { itsOpen ? (
              <>
                { values.length >= 1 ? (
                  <div className='searchResultsContainer' ref={ ref }>
                    <SearchResult arr={ data } ref={ ref } />
                  </div> ) : ( null ) }
              </>
           ) : ( null ) }
        </div>
      </header>
    </>
  );
}