  
  import { useState } from 'react';

  import { Link } from 'react-router-dom';

  import movieTypes from "../models/movie";

  import '../styles/movies.css';
  import '../styles/medias/movies.css';

  import Moment from "react-moment";
  import "moment/locale/pt-br";
  import { BsFillStarFill } from 'react-icons/bs';

  Moment.globalLocale = "pt-br";
  
  export const Movies = ( { id, title, runtime, poster_path, release_date, vote_average } : movieTypes ) => {

  const [ bgPath ] = useState< string > ( 'https://image.tmdb.org/t/p/w500/' );

  return ( 
      <>
        <div className="movieList" key={ id }>
            <div className="infos">
              <p> <Moment locale="pt-br"format="YYYY" date={ release_date } > </Moment> </p> 
              <p> { vote_average } <BsFillStarFill className="star" /> </p>       
              {/* <p> { runtime } </p> */}
            </div>
          
          <Link to={ `/movie/${ id }` } >
            <i> { title } </i>
            <img src={ `${ bgPath + poster_path }` } alt={ `${ title }` } />
            
          </Link>             
        </div>
      </>
  );
};
