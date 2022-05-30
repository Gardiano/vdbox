
  import { useEffect, useState } from 'react';

  import { theatersController } from '../controllers/theatersController';

  import { Movies } from '../view/cardMovies';

  import { ScrollingCarousel } from '@trendyol-js/react-carousel';

  import { BsFillArrowRightCircleFill } from "react-icons/bs";

  import movieTypes from '../models/movie';

  import '../styles/cardListContainer.css';

  import Moment from "react-moment";
  import "moment/locale/pt-br";
  Moment.globalLocale = "pt-br";

  export const Theaters: any = ( ) => {
    useEffect( ( ) => {
    getData();
    
  }, [] );

  const [ movies , setMovies ] =  useState  < [ ] > ( [ ] );
  const [ runtime, setRuntime ] = useState  < [ ] > ( [ ] );

  const getData = async ( ) => {
    const data = await theatersController( );
    setMovies( data ); 
  }
  
return (
  <>
    <h1> Em Cartaz </h1>
    <ScrollingCarousel rightIcon={ <span> <BsFillArrowRightCircleFill className="slideIcon" /> </span> } className="slide">       
      { movies.map( ( movie: movieTypes ) => {
        return (    
            <section key={ movie.id } >
              <Movies
                key={ movie.id }
                id={ movie.id }
                title={ movie.title }
                release_date={ movie.release_date }
                poster_path={ movie.poster_path }
                vote_average={ movie.vote_average }
              />
            </section>
      )})}  
    </ScrollingCarousel>
    </>
  );
};
