
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { MultiSearchController } from '../../controllers/moviesController/MultiSearchController';

import { useSearch } from '../../hooks/useSearchContext';

import { AiOutlineSearch } from 'react-icons/ai';

import movieTypes from '../../models/cards';

import '../../styles/navBar/header.css';


export const Header = ( ) => {

  const { values, setValues } = useSearch( );
 

  useEffect ( ( ) => {
    window.addEventListener( 'scroll' , changeBackgroundWhenScrollDown );
  }, [ ] );

  useEffect( ( ) => {
    getData( );
  }, [ values ] );

  const [ itsOpen, setItsOpen ] = useState< boolean > ( false );

  const [ data , setData ] = useState< movieTypes[ ] > ( [ ] );

  const [ bgPath ] = useState < string > ( 'https://image.tmdb.org/t/p/w500' );

  const [ gradient ] = useState < string > ( '0deg,#020202 0,rgba(2,2,2,.95) 10%,rgba(2,2,2,.5) 22%,rgba(2,2,2,.60) 38%,rgba(2,2,2,.55) 58%,rgba(0,0,21,.34) 100%' )

  const [ backgroundColor, setBackgroundColor ] = useState < string > ( ' transparent ' );

  const handleChange = ( e: any ) => {
    e.target.value == ' ' || e.target.value.length === 0 ? ( setValues( '' ) ) : ( setValues( e.target.value ) );
  };

  const changeBackgroundWhenScrollDown = ( ) => {
   const bg = window.scrollY > 40 ? ( setBackgroundColor( '#000000d9' ) ) : ( setBackgroundColor( 'transparent' ) );
    return bg;
  };

  const getData = async ( ) => {
    try {
      const data = await MultiSearchController( values );
      setData ( data );
    } catch( e: any ) {
      console.log( e )
    }
  }

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
             onChange={ ( e ) => handleChange( e ) }
             type="text"
             alt="Search"
             placeholder="Ex: O Poderoso Chefão"
             value={ values || '' }
          /> <button> <AiOutlineSearch /> </button>

          { values?.length >= 1 &&  
            <div className='searchResultsContainer'>
              <div>
                { data?.map ( ( itens: movieTypes ) => {
                  return (
                    <div key={ itens.id } 
                    style={ { backgroundImage: `linear-Gradient( ${ gradient } ), url( ${ bgPath+itens.backdrop_path } )` } }
                    >
                        { itens.media_type === 'movie' ? (
                          <Link to={  `${ `/movie/${itens?.id}` }` }>
                            <p> { itens.title || itens.name || itens.original_title } </p>
                          </Link>
                        ) : itens.media_type === 'tv' ? (
                          <Link to={ `${ `/series/${ itens?.id }` }` }>
                            <p> { itens.title || itens.name || itens.original_title } </p>
                          </Link>
                        ) : itens.media_type === 'person' ? ( 
                          <Link to={ `${ `/series/${ itens?.id }` }` }>
                            <p> { itens.title || itens.name || itens.original_title } </p>
                          </Link>
                          ) : ( null ) }
                    </div>
                  );
                })}
              </div>
            </div> 
          }
        </div>
      </header>
    </>
  );
}