
import { useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';

import { MultiSearchController } from '../../controllers/moviesController/MultiSearchController';

import { SearchResult } from './searchResult';

import { useSearch } from '../../hooks/useSearchContext';

import { AiOutlineMenuUnfold, AiOutlineSearch, AiFillCloseCircle, AiOutlineClose } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";

import useOnClickOutside from '../../hooks/useOutsideClick';

import movieTypes from '../../models/cards';

import '../../styles/navBar/menuMobile.css';

export const MenuMobile = ( ) => {

   // search hook
   const { values, setValues, itsOpen, setItsOpen } = useSearch( );

   const ref = useRef<HTMLDivElement>( null ); 

   useEffect ( ( ) => {
      getData( );
      window.addEventListener( 'scroll' , changeBackgroundWhenScrollDown );
   }, [ values ] );

  const [ data, setData ] = useState< movieTypes[ ] > ( [ ] );
  
  const [ openMenu, setOpenMenu ] = useState< boolean > ( false );

  const [ sizePage ] = useState < number > ( window.innerWidth );

  const [ backgroundColor, setBackgroundColor ] = useState < string > ( ' transparent ' );

  const openMenuMobile = ( ) => {
    setOpenMenu( true );
  };

  const closeMenuMobile = ( ) => {
    setOpenMenu( false );
  };

  const handleChange = ( e: any ) => {
    e.target.value == ' ' || e.target.value.length === 0 ? ( setValues( '' ) ) : ( setValues( e.target.value ) );
  };

  const handleClickOutside = ( ) => {
    if ( itsOpen ) {
      setItsOpen( false );
      setValues( '' );
    }
  };

  const changeBackgroundWhenScrollDown = ( ) => {
    const bg = window.scrollY > 20 ? ( setBackgroundColor( '#000000d9' ) ) : ( setBackgroundColor( 'transparent' ) );
     return bg;
   };

  useOnClickOutside( ref, handleClickOutside );

  const getData = async ( ) => {
    try {
      const data = await MultiSearchController( values );
          setItsOpen ( true );
            setData( data );
    } catch( e: any ) {
      console.log( e )
   }
  };

  return (
    <>
      { sizePage < 800 ? (
        <div className="mobileContainer" style={ sizePage > 800 ? ( { display: 'none' } ) : ( { display: 'flex' } ) }>
      
          <header className='MenuMobile' style={{background: backgroundColor}}>
              <Link to='/' > <BiCameraMovie className='mobileLogoIcon' /> </Link>
              <div className="searchBox">
                <div className='inputBox'>
                  <input
                    onChange={ ( e ) => handleChange( e ) }
                    type="text"
                    alt="Search"
                    placeholder="Ex: Batman"
                    value={ values || '' }
                  />

                  { values.length > 0 ?
                    ( <AiOutlineClose className='closeIcon' /> )
                      :
                    ( <AiOutlineSearch className='searchIcon' /> ) }
                </div>
              </div>

              <button onClick={ openMenuMobile }> 
                <AiOutlineMenuUnfold />
              </button>
          </header>

          
            { itsOpen ? (
              <>
                { values.length >= 1 ? (
                  <div className='searchResultsContainer' ref={ ref }>
                    <SearchResult arr={ data } ref={ ref } />
                  </div> ) : ( null ) }
              </>
            ) : ( null ) }

          { openMenu !== false ? (
              <nav className="navbar">
                  <div>
                    <Link to="/" onClick={ ( ) => setOpenMenu( false ) } > Home </Link>
                    <Link to="/movies" onClick={ ( ) => setOpenMenu( false ) } > Filmes </Link>
                    <Link to="/series" onClick={ ( ) => setOpenMenu( false ) } > Series </Link>
                    <button onClick={ closeMenuMobile } > x </button>
                    <h1> VideoBox </h1>
                  </div>
              </nav>
          ) : ( null ) }
        </div> ) : ( null )
      }
    </>
  );
}