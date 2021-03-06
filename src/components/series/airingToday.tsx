
  import { useEffect, useState } from 'react';

  import { airingTodaySeriesController } from '../../controllers/seriesController/AiringTodayController';

  import { Cards } from '../../view/card';

  // Import Swiper React components
  import { Swiper, SwiperSlide } from "swiper/react";
  import { Autoplay, Pagination, Navigation } from 'swiper';

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/navigation";

  // types
  import movieTypes from '../../models/cards';

  // css
  import '../../styles/card/swiperSlide.css';

  import Moment from "react-moment";
  import "moment/locale/pt-br";
  
  Moment.globalLocale = "pt-br";

  export const AiringToday = ( ) => {
  useEffect( ( ) => {
    getData( );    
  }, [ ] );

  const [ series , setSeries ] =  useState< [ ] > ( [ ] );

  const getData = async ( ) => {
    const data = await airingTodaySeriesController( );
    setSeries( data );
  };

return (
    <>
      <Swiper
          resizeObserver={ false }
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          slidesPerView={ 'auto' }
          spaceBetween={ 0 }
          pagination={{ clickable: true }}
          modules={[ Autoplay, Pagination, Navigation ]}
          navigation={ true }
          className="mySwiper"
        >

          <h1> Hoje </h1>

          { series.map( ( serie: movieTypes ) => {
            return (   
              <SwiperSlide key={ serie.id }> 
                <section key={ serie.id }>                
                  <Cards
                    key={ serie.id }
                    id={ serie.id } 

                    title={ serie.title }
                    name={ serie.name }

                    release_date={ serie.release_date }
                    first_air_date={ serie.first_air_date }

                    poster_path={ serie.poster_path }
                    vote_average={ serie.vote_average }
                  /> 
                </section>
              </SwiperSlide>
          )})}
    </Swiper>
    </>
  );
}
