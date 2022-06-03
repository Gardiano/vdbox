

import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { useEffect, useState } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SearchController } from '../controllers/searchController';
import movieTypes from '../models/movie';

import '../styles/search.css';
import { Movies } from '../view/cardMovies';

export const Search = ( ) => {

  const [ input, setInput ] = useState< any > (  );
  const [ movies, setMovies ] = useState< [ ] > ( [ ] );

  useEffect( ( ) => {
    getData(  );
  }, [ input ] );

   const handleChange = ( e: any ) => {
    setInput( e.target.value );
  };

  async function getData ( ) {
      if( input.length > 3 ) {
        const data = await SearchController( input );
        setMovies( data );
        return data; 
      }
  };

  return (      
    <div className="searchContainer">
       <input        
        onChange={ ( e ) => handleChange( e ) }
        type="text" 
        alt="Search" 
        placeholder="Procure seu filme favorito" 
        value={ input || '' }
       />
    
    <Swiper
        resizeObserver={false}
        slidesPerView={'auto'}
        spaceBetween={50}
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
    </div>
  );
};