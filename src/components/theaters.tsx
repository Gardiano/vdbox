
  import { useEffect, useState, useRef } from 'react';

  import { theatersController } from '../controllers/theatersController';

  import { Movies } from '../view/cardMovies'; 

  import { BsFillArrowRightCircleFill } from "react-icons/bs";

  // Import Swiper React components
  import { Swiper, SwiperSlide } from "swiper/react";
  import { Pagination } from 'swiper';
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/pagination";

  import movieTypes from '../models/movie';

  import '../styles/cardListContainer.css';

  import Moment from "react-moment";
  import "moment/locale/pt-br";
  
  Moment.globalLocale = "pt-br";

  export const Theaters: any = ( ) => {

  useEffect( ( ) => {
    getData( );    
  }, [] );

  const [ movies , setMovies ] =  useState  < [ ] > ( [ ] );

  const getData = async ( ) => {
    const data = await theatersController( );
    setMovies( data ); 
  }
  
  // rightIcon={ <span> <BsFillArrowRightCircleFill className="slideIcon" /> </span> }

return (
  <>
    <h1> Em Cartaz </h1>

    <Swiper
        resizeObserver={false}
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       
        { movies.map( ( movie: movieTypes ) => {
          return (   
            <SwiperSlide>           
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
            </SwiperSlide>
          )})}
    </Swiper>

  </>
  );
};

