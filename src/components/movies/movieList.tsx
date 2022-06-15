  
import { useState } from 'react';

import { Theaters } from './theaters';
import { Trending } from './trending';
import { TopRated } from './topRated';
import { Popular } from './popular';

import '../../styles/movieList.css';
import '../../styles/movie.css';

import '../../styles/medias/movieList.css';
import '../../styles/medias/movie.css';

import Moment from 'react-moment';
import "moment/locale/pt-br";

Moment.globalLocale = "pt-br";

export const MovieList = ( ) => {

const [ list, setList ] = useState < string > ( 'theaters' );

const changeList = ( listState: string ) => {
    setList( listState );
};

 return (
    <main>
        
        <div className='navbarMovie'>
        <h4> Filmes </h4>
            <button  onClick={ ( ) => changeList( 'theaters' ) } > Em Cartaz </button>
            <button  onClick={ ( ) => changeList( 'trending' ) } > Trending </button>
            <button  onClick={ ( ) => changeList( 'topRated' ) } > Mais Votados </button>
            <button  onClick={ ( ) => changeList( 'popular' ) } > Popular </button>
        </div>
        
        { list === 'theaters' ? ( <Theaters /> ) : ( null ) }

        { list === 'trending' ? ( <Trending /> ) : ( null ) }

        { list === 'topRated' ? ( <TopRated /> ) : ( null ) }

        { list === 'popular' ? ( <Popular /> ) : ( null ) }

    </main>
 );
};