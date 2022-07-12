
import { useEffect, useState } from 'react';

// controller
import { SearchController } from '../../controllers/moviesController/searchController';

// view
import { Cards } from '../../view/card';

// slide
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// types
import cardTypes from '../../models/cards';

import '../../styles/search/search.css';

export const Search = ( ) => {

  const [ input, setInput ] = useState ( '' );
  const [ movies, setMovies ] = useState< [ ] > ( [ ] );

  useEffect( ( ) => {
    getData( );
  }, [ input ] );

   const handleChange = ( e: any ) => {
    setInput( e.target.value );
  };

   const getData = async ( ) => {
      if( input?.length === 0 ) {
        setMovies( [ ] );
      }

      if( input?.length >= 1 ) {
        const data = await SearchController( input );
            setMovies( data );
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
    
    { input?.length >= 1 ? (
      <Swiper
          resizeObserver={ false }
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={ 'auto' }
          spaceBetween={ 0 }
          pagination={{ clickable: true }}
          modules={[ Autoplay, Pagination, Navigation ]}
          navigation={ true }
          className="mySearchSwiper"
        >
        
          { movies.map( ( card: cardTypes ) => {
            return (   
              <SwiperSlide key={ card.id }>           
                <section key={ card.id }>
                  <Cards
                    key={ card.id }
                    id={ card.id }
                    title={ card.title }
                    first_air_date={card.first_air_date}
                    release_date={ card.release_date }
                    poster_path={ card.poster_path }
                    vote_average={ card.vote_average }
                  />
                </section>
              </SwiperSlide>
            )})}
      </Swiper> ) 
      : ( null ) }
    </div>
  );
};