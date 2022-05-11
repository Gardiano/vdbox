

  import { useEffect, useState } from 'react';

  import { topRatedController } from '../controllers/topRatedController';

  import { Movies } from '../view/cardMovies';

  import movieTypes from '../models/movie';

  import '../styles/cardListContainer.css';

  import Moment from "react-moment";
  import "moment/locale/pt-br";
  Moment.globalLocale = "pt-br";

  export const TopRated = ( ) => {

  useEffect( ( ) => {
    getData();
  }, [ ] );

  const [ movies , setMovies ] = useState < [ ] > ( [ ] );

  const getData = async () => {
    const data = await topRatedController();
    setMovies( data );
  }
  
return (
 <>
  <h1> Mais Votados </h1>
    <section>
      { movies.map( ( movie: movieTypes ) => {
        return (
          <Movies
            key={ movie.id }
            id={ movie.id } 
            title={ movie.title }
            release_date={ movie.release_date }
            poster_path={ movie.poster_path }
            vote_average={ movie.vote_average }
          />
        );
      })}
    </section>   
 </>    
  );
};