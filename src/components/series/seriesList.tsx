
import { useState } from 'react';

import { AiringToday } from './airingToday';
import { TvOnTheAir } from '../series/tvOnTheAir';
import { TopRated } from '../series/topRated';
import { Popular } from '../series/popular';

import '../../styles/cardNavBar.css';
import '../../styles/medias/cardNavBar.css';

import '../../styles/movie.css';
import '../../styles/medias/movie.css';

export const SeriesList = ( ) => {
    const [ list, setList ] = useState < string > ( 'Hoje' );

    const changeList = ( listState: string ) => {
        setList( listState );
    };

 return (
    <>
        <div className='cardNavBar'>
            <h4> Series </h4>
            <button  onClick={ ( ) => changeList( 'Hoje' ) } > Hoje </button>
            <button  onClick={ ( ) => changeList( 'no-Ar' ) } > No Ar </button>
            <button  onClick={ ( ) => changeList( 'topRated' ) } > Mais Votados </button>
            <button  onClick={ ( ) => changeList( 'popular' ) } > Popular </button>
        </div>

        { list === 'Hoje' ? ( <AiringToday /> ) : ( null ) }
        { list === 'no-Ar' ? ( <TvOnTheAir /> ) : ( null ) }
        { list === 'topRated' ? ( <TopRated /> ) : ( null ) }
        { list === 'popular'  ? ( <Popular  /> ) : ( null ) }
    </>
 );
};