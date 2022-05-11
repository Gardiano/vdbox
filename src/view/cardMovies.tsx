  
  import { useState } from 'react';

  import { Link } from 'react-router-dom';

  import movieTypes from "../models/movie";

  import '../styles/movies.css';

  import Moment from "react-moment";
  import "moment/locale/pt-br";

  Moment.globalLocale = "pt-br";
  
  export const Movies = ( { id, title, poster_path, release_date, vote_average } : movieTypes ) => {

  const [ bgPath ] = useState< string > ( 'https://image.tmdb.org/t/p/w500/' );

  return ( 
      <>    
        <div className="movieList" key={ id } >
          <Link to={ `/movie/${ id }` } >
            <img src={ `${ bgPath + poster_path }` } alt="image" /> 
              <span> 
                { vote_average }
              </span> 
          </Link>

          <b style={ { width: '200px' } } > { title } </b>
          <p> <Moment locale="pt-br"format="DD/MM/YYYY" date={ release_date } > </Moment> </p> 
        </div>
      </>
  );
};
