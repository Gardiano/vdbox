
import { useEffect, useState } from 'react';

// view
import { Movies } from '../../view/cardMovies';

// slide
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// controller
import { SearchController } from '../../controllers/moviesController/searchController';

// types
import movieTypes from '../../models/movie';

import '../../styles/search.css';

export const Search = ( ) => {

  const [ input, setInput ] = useState< any > (  );
  const [ movies, setMovies ] = useState< [ ] > ( [ ] );

  useEffect( ( ) => {
    getData( );
  }, [ input ] );

   const handleChange = ( e: any ) => {
    setInput( e.target.value );
  };

  async function getData ( ) {
      if( input.length >= 3 ) {
        const data = await SearchController( input );
        setMovies( data! );
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
        resizeObserver={ false }
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        slidesPerView={ 'auto' }
        spaceBetween={ 0 }
        pagination={{ clickable: true }}
        modules={[ Autoplay, Pagination, Navigation ]}
        navigation={ true }
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