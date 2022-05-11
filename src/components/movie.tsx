
  

  import { useEffect, useState } from 'react';
  import { useParams } from 'react-router';  
  import { Link } from 'react-router-dom';

  import api from '../api/connect';

  const GK = process.env.REACT_APP_MAK;

  export const MovieDetails = () => {
    const movieId = useParams();
    useEffect( ( ) => {
      getData();
    }, [ ] ); 

    const [ movie, setMovie ] = useState< any > (  );

    const [ bgPath ] = useState< string > ( 'https://image.tmdb.org/t/p/w500' );

    const getData = async () => {
      try {
        const response = await api.get( `/movie/${movieId.id}?api_key=${GK}&language=pt-BR` );
          setMovie( response.data );
      } catch ( e ) {
          console.log( e );
      }; 
    }

    return (
      <article key={ movie?.id } >
        <div className="overlay" style={ { backgroundImage: `linear-Gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgPath+movie?.poster_path})` } }>
          <div className="description">
            <Link to="/trending"> { movie?.title } &nbsp; </Link>
            <h3> { movie?.vote_average } </h3>
          </div>
        </div>
      </article>      
    );
  };


    // #222B32 background
    // #b0b0b0; color