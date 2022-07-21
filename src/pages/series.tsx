

  import { useEffect, useState } from 'react';
  import { Cards } from '../view/card';

  import { Link, useLocation } from 'react-router-dom';

  import { Autoplay, Navigation, Pagination } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/react';

  import { SeriesPageController } from '../controllers/seriesController/SeriesController';
  import { SearchController } from '../controllers/seriesController/SearchController';

  import { BackButton } from '../components/buttons/backButton';

  import InfiniteScroll from 'react-infinite-scroll-component';

  import { Loader } from '../helper/loader';

  import movieTypes from '../models/cards';
  
  import '../styles/pages/series.css';
  import '../styles/medias/series.css';
  import '../styles/search/search.css';

  export const Series = ( ) => {

    useEffect( ( ) => {
      getData( );
    }, [ ] );

    const [ series , setSeries ] = useState< movieTypes[ ] > ( [ ] );

    const [ input , setInput ] = useState< string > ( '' );

    const [ seriesFromSearch , setSeriesFromSearch ] = useState< movieTypes[ ] > ( [ ] );

    const [ page, setPage ] = useState< number > ( 1 );

    const [ hasBeenLoaded, setHasBeenLoaded ] = useState < boolean > ( false );

    const [ bgPath ] = useState < string > ( 'https://image.tmdb.org/t/p/w500' );

    useEffect( ( ) => {
        getDataFromInput( );
      }, [ input ] );

    const handleChange = ( e: any ) => {
          e.target.value == ' ' || e.target.value.length === 0 ? ( setInput( '' ) ) : ( setInput( e.target.value ) );
    };

    const getDataFromInput = async ( ) => {
        if( input?.length === 0 ) {
          setSeriesFromSearch( [ ] );
        }
  
        if( input?.length >= 1 ) {
          const data = await SearchController( input );
            setHasBeenLoaded( true )
            setSeriesFromSearch( data );
        }
    }; 

    const getData = async ( ) => {
        const data = await SeriesPageController( page );
            setHasBeenLoaded( true );
                setSeries( data );
    };

    const getMoreData = async ( ) => {
        setPage ( page + 1 );
        const moreSeries = await SeriesPageController( page + 1 );
          setSeries( [ ...series, ...moreSeries ] );
    };
    
    return (
        <>
          { hasBeenLoaded === true ? (
            <InfiniteScroll
                dataLength={ series?.length }
                next={ getMoreData }
                height='100vh'
                hasMore={ true }
                loader={ <h4> Loading... </h4> }
                scrollableTarget="scrollableDiv"
              >
            
              <div className='SeriesContainer' id="scrollableDiv">
                  <div className="searchContainer">
                      <input
                        onChange={ ( e ) => handleChange( e ) }
                        type="text" 
                        alt="Search"
                        placeholder="Procure sua serie favorita"
                        value={ input || '' }
                      />

                        { input?.length >= 1 ? (
                            <>
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
                                
                                  { seriesFromSearch.map( ( card: movieTypes ) => {
                                    return (
                                      <SwiperSlide key={ card.id }>
                                        <section >
                                          <Cards
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
                            </Swiper>
                            </> ) : ( null )}
                  </div>

                  { series.map( ( serie: movieTypes ) => {
                      return (
                        <div className='movieList' 
                            style={ input?.length >= 1 ? ({opacity: '0.05'}) : ({ background: '#020202b0', opacity: '1'}) } >
                            <Link to={ `/series/${ serie.id }` }>
                                <img src={ bgPath + serie.poster_path }  />
                            </Link>
                            <label> { serie.title } </label>
                        </div>
                      );
                  })}
              </div>
              <BackButton />
            </InfiniteScroll>
          ) : ( <Loader /> )}
        </>
    );
  };