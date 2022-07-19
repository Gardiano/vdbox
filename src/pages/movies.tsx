

  import { useEffect, useState } from 'react';
  import { Cards } from '../view/card';
  import { Link } from 'react-router-dom';

  import { Autoplay, Navigation, Pagination } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/react';

  import { MoviesPageController } from '../controllers/moviesController/MoviesController';
  import { SearchController } from '../controllers/moviesController/searchController';

  import { Loader } from '../helper/loader';

  import movieTypes from '../models/cards';
  
  import '../styles/pages/movies.css';
  import '../styles/medias/movies.css';
  import '../styles/search/search.css';

  export const Movies = ( ) => {

    useEffect( ( ) => {
      getData( );
    }, [ ] );

    const [ movies , setMovies ] = useState< movieTypes[ ] > ( [ ] );

    const [ input , setInput ] = useState<string>( '' );

    const [ moviesFromSearch , setMoviesFromSearch ] = useState< movieTypes[ ] > ( [ ] );

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
          setMoviesFromSearch( [ ] );
      }
  
        if( input?.length >= 1 ) {
          const data = await SearchController( input );
            setHasBeenLoaded( true )
              setMoviesFromSearch( data );
      }
    };

    const getData = async ( ) => {
        const data = await MoviesPageController( page );
            setHasBeenLoaded( true );
                setMovies( data );
    };

    const getMoreData = async ( ) => {
        setPage ( page + 1 );
          const moreMovies = await MoviesPageController( page + 1 );
            setMovies( [ ...movies, ...moreMovies ] );
    };
    
    return (
        <>
          { hasBeenLoaded === true ? (
            <>
                <div className='MoviesContainer'>
                    <div className="searchContainer">
                        <input
                            onChange={ ( e ) => handleChange( e ) }
                            type="text" 
                            alt="Search"
                            placeholder="Procure seu filme favorito"
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
                                  
                                    { moviesFromSearch.map( ( card: movieTypes ) => {
                                      return (
                                        <SwiperSlide key={card.id}>
                                          <section >
                                            <Cards
                                              id={card.id}
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

                    { movies.map( ( movie: movieTypes ) => {
                        return (
                          <div key={movie.id}>
                              { hasBeenLoaded === true ? (
                                  <div className='movieList' 
                                  style={ input?.length >= 1 ? ({opacity: '0.05'}) : ({ background: '#020202b0', opacity: '1'}) } >
                                      <Link to={ `/movie/${ movie.id }` }>
                                          <img src={ bgPath + movie.poster_path }  />
                                      </Link>
                                          <label> { movie.title } </label>
                                  </div>
                                  ) : ( <Loader /> ) }
                          </div>
                        );
                    })}
                </div>

                <button className='loadMoreMovies' onClick={ ( ) => getMoreData ( ) }> 
                    +
                </button>
            </>
          ) : ( <Loader /> ) }
        </>
    );
  };