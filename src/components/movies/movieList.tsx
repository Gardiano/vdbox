  
import { useState } from 'react';

import { Theaters } from './theaters';
import { Trending } from './trending';
import { TopRated } from './topRated';
import { Popular } from './popular';

import '../../styles/card/cardNavBar.css';
import '../../styles/medias/cardNavBar.css';

import '../../styles/movies/movie.css';
import '../../styles/medias/movie.css';

export const MovieList = ( ) => {

const [ list, setList ] = useState < string > ( 'theaters' );

const changeList = ( listState: string ) => {
    setList( listState );
};

 return (
    <>
        <div className='cardNavBar'>
            <h4> Filmes </h4>
            <button onClick={ ( ) => changeList( 'theaters' ) } > Nos Cinemas </button>
            <button onClick={ ( ) => changeList( 'trending' ) } > Trending </button>
            <button onClick={ ( ) => changeList( 'topRated' ) } > Mais Votados </button>
            <button onClick={ ( ) => changeList( 'popular'  ) } > Popular </button>
        </div>

        { list === 'theaters' ? ( <Theaters /> ) : ( null ) }

        { list === 'trending' ? ( <Trending /> ) : ( null ) }

        { list === 'topRated' ? ( <TopRated /> ) : ( null ) }

        { list === 'popular'  ? ( <Popular />  ) : ( null ) }
    </>
   );
};