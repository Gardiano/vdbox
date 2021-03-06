

  import { useEffect, useState } from 'react';

  import { topRatedController } from '../../controllers/moviesController/topRatedController';

  import { Cards } from '../../view/card';

  // Import Swiper React components
  import { Swiper, SwiperSlide } from "swiper/react";
  import { Autoplay, Pagination, Navigation } from 'swiper';

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/navigation";

  import movieTypes from '../../models/cards';

  import '../../styles/card/swiperSlide.css';

  import Moment from "react-moment";
  import "moment/locale/pt-br";
  Moment.globalLocale = "pt-br";

  export const TopRated = ( ) => {

  useEffect( ( ) => {
    getData( );
  }, [ ] );

  const [ movies , setMovies ] = useState < [ ] > ( [ ] );

  const getData = async ( ) => {
    const data = await topRatedController( );
    setMovies( data );
  }
  
return (
  <>
    <Swiper
        resizeObserver={ false }
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        slidesPerView={ 'auto' }
        spaceBetween={ 0 }
        pagination={{ clickable: true }}
        modules={[ Autoplay, Pagination, Navigation]}
        navigation={true}
        className="mySwiper"
      >

        <h1> Mais Votados </h1>
       
        { movies.map( ( movie: movieTypes ) => {
          return (   
            <SwiperSlide key={movie.id}>           
            <section key={movie.id}>                
              <Cards
                key={ movie.id }
                id={ movie.id } 
                title={ movie.title }
                first_air_date={movie.first_air_date}
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