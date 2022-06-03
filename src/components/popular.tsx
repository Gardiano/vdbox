
  import { useEffect, useState } from 'react';

  import { popularController } from '../controllers/popularController';

  import { Movies } from '../view/cardMovies';

  import movieTypes from '../models/movie';

  import '../styles/cardListContainer.css';

  import Moment from "react-moment";
  import "moment/locale/pt-br";

  import { Pagination } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/react';
  Moment.globalLocale = "pt-br";

  export const Popular = ( ) => {

  useEffect( ( ) => {
    getData();
  }, [ ] );

  const [ movies , setMovies ] = useState < [ ] > ( [ ] );

  const getData = async () => {
    const data = await popularController();
    setMovies( data );
  };
  
return (
  <>
    <h1> Popular </h1>
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
