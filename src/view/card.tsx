
import { useState } from 'react';

import { Link } from 'react-router-dom';

import { BsFillStarFill } from 'react-icons/bs';

import pic from '../assets/pic.svg';

import movieTypes from "../models/cards";

import '../styles/movies.css';
import '../styles/medias/movies.css';

import Moment from "react-moment";
import "moment/locale/pt-br";

Moment.globalLocale = "pt-br";

export const Cards = ( { id, title, name, poster_path, release_date, vote_average, first_air_date } : movieTypes ) => {

  const  [ bgPath ] = useState< string >( 'https://image.tmdb.org/t/p/w500/' );

  return (
    <div className="movieList" key={ id } >
      { title ? (
        <Link to={`/movie/${ id }`}>
          <i> { title } </i>
          { poster_path == undefined ? ( 
            <img src={ `${ pic }` } alt={ `${ title }` } /> 
            ) : ( 
            <img src={ `${ bgPath + poster_path }` } alt={ `${ title }` } /> 
          )}
        </Link>
      ) : (
        <Link to={`/series/${ id }`}>
          <i> { name } </i>
          { poster_path == undefined ? ( 
              <img src={ `${pic}` } alt={ `${ title }` } /> 
              ) : ( 
            <img src={ `${ bgPath + poster_path }`} alt={ `${ name }` } /> 
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
        <p> { vote_average } <BsFillStarFill className="star" /> </p>
      </div>
    </div>
  );
};
