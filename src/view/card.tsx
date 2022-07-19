
import { useState } from 'react';

import { Link } from 'react-router-dom';

import { BsFillStarFill } from 'react-icons/bs';

import { useSearch } from '../hooks/useSearchContext';
//@ts-ignore
import pic from '../assets/pic.svg';

import movieTypes from "../models/cards";

import '../styles/card/cards.css';
import '../styles/medias/cards.css';

import Moment from "react-moment";
import "moment/locale/pt-br";

Moment.globalLocale = "pt-br";

export const Cards = ( { id, title, name, poster_path, release_date, vote_average, first_air_date } : movieTypes ) => {

const { setValues } = useSearch( );

const [ bgPath ] = useState< string > ( 'https://image.tmdb.org/t/p/w500/' );

const  clearSearchWhenClickingOnACard = ( ) => {
  setValues( '' );
}

  return (
    <div className="cardList" key={ id } >
      { title ? (
        <Link to={`/movie/${ id }`} onClick={ clearSearchWhenClickingOnACard }>
          <i> { title } </i>
          { poster_path == undefined ? ( 
            <img src={ `${ pic }` } alt={ `${ title }` } /> 
            ) : ( 
            <img src={ `${ bgPath + poster_path }` } alt={ `${ title }` } /> 
          )}
        </Link>
      ) : (
        <Link to={`/series/${ id }`} onClick={ clearSearchWhenClickingOnACard } >
            <i> { name } </i>
            { poster_path == undefined ? ( 
                <img src={ `${pic}` } alt={ `${ title }` } /> 
                ) : (
                <img src={ `${ bgPath + poster_path }` } alt={ `${ name }` } /> 
            )}
        </Link>
      )}

      <div className="infos">
        { release_date ? (
            // movies date
            <p> <Moment locale="pt-br" format="YYYY" date={ release_date } > </Moment> </p>
        ) : (
            // series date
            <p> <Moment locale="pt-br" format="YYYY" date={ first_air_date } > </Moment> </p>
        )}
            <p> { vote_average?.toPrecision( 2 ) } <BsFillStarFill className="star" /> </p>
      </div>
    </div>
  );
};