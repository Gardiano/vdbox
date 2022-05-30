
  import { useEffect, useState } from 'react';

  import { trendingController } from '../controllers/trendingController';

  import { Movies } from '../view/cardMovies';

  import movieTypes from '../models/movie';

  import '../styles/cardListContainer.css';

  import Moment from "react-moment";
  import "moment/locale/pt-br";
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
  Moment.globalLocale = "pt-br";

  export const Trending = ( ) => {

  useEffect( ( ) => {
    getData();
  }, [] );

  const [ movies , setMovies ] = useState < [ ] > ( [ ] );
  const getData = async () => {
    const data = await trendingController();
    setMovies( data );
  }
  
return (
  <>
    <h1> Trending </h1>
    <ScrollingCarousel rightIcon={ <span> <BsFillArrowRightCircleFill className="slideIcon" /></span> } className="slide"  >       
            { movies.map( ( movie: movieTypes ) => {
              return (              
                <section key={movie.id}>                
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
