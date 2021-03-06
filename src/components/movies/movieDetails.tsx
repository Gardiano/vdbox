    // eslint-disable-next-line spaced-comment
  import { useEffect, useState } from 'react';  

  import { useParams } from 'react-router';

  import { useSearch } from '../../hooks/useSearchContext';

  import { Link, useNavigate } from "react-router-dom";
  
  import { MovieByIdController, TraillersController, GetActorsController } from '../../controllers/moviesController/movieDetailsController';
  import { BsFillPersonCheckFill, BsFillPersonBadgeFill, BsFillHandThumbsUpFill, BsFillStarFill, BsArrowReturnLeft } from 'react-icons/bs';
  
  import { Swiper, SwiperSlide } from 'swiper/react';
  import { Autoplay, Navigation, Pagination } from 'swiper';

  import { Loader } from '../../helper/loader';

 //@ts-ignore
  import person from '../../assets/person.svg';

  //@ts-ignore
  import traillerFig from '../../assets/trailler.svg';

  import cardsTypes from '../../models/cards';
  import ActorsTypes from '../../models/actors';
  import traillerTypes from '../../models/trailler';

  import '../../styles/movies/movie.css';
  import '../../styles/medias/movie.css';

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/navigation";
  
  import Moment from 'react-moment';
  import "moment/locale/pt-br";
import { BackButton } from '../buttons/backButton';

  Moment.globalLocale = "pt-br";

  export const MovieDetails = ( ) => {

    const movieId = useParams( );

    const { setValues } = useSearch( );

    useEffect( ( ) => {
      window.scrollTo( 0 , 0 );
        getData( );
    }, [ movieId.id ] );

    const [ hasBeenLoaded, setHasBeenLoaded ] = useState < boolean > ( false );

    const [ movie, setMovie ] = useState < cardsTypes > ( Object );

    const [ trailler, setTrailler ] = useState < traillerTypes [ ] > ( [ ] );

    const [ credits, setCredits ] = useState < ActorsTypes [ ] > ( [ ] );

    const [ bgPath ] = useState < string > ( 'https://image.tmdb.org/t/p/w500' );

    const [ youTubePath ] = useState < string > ( 'https://www.youtube.com/embed/' );

    const [ gradient ] = useState < string > ( '0deg,#020202 0,rgba(2,2,2,.96) 10%,rgba(2,2,2,.9) 22%,rgba(2,2,2,.66) 38%,rgba(2,2,2,.61) 58%,rgba(0,0,21,.76) 100%' )

    const goBackPage = () => {
     
    };

    const getData = async ( ) => {
      try {
        const data      = await MovieByIdController( movieId.id as string );
        const traillers = await TraillersController( movieId.id as string );
        const credits   = await GetActorsController( movieId.id as string );
      
        setMovie( data! ); setTrailler( traillers! ); setCredits( credits! );
        setHasBeenLoaded( true );
      } catch ( e ) {
        console.log( e );
      };
    };

    return (
      <>
        { hasBeenLoaded === true ? (
          <div className='wrapper' >
            <div className='movieContainer' 
              style={ { backgroundImage: `linear-Gradient( ${ gradient } ), url( ${ bgPath+movie.backdrop_path } )` } } >
              <div className='details'>
                  <div className='poster'>
                    <img src={`${ bgPath+movie.poster_path }`} />
                  </div>

                  <div className='movieDetails'>
                    <h4> { movie.title } </h4>
                    
                    <h2> Lan??amento: <Moment locale="pt-br"format="DD/MM/YYYY" date={ movie.release_date } /> </h2>

                    {movie.runtime === 0 ? ( null ) : ( <h3> { movie.runtime } min </h3> )}

                    <div className='genres'>  
                      { movie.genres?.map( ( gens: cardsTypes ) => {
                          return ( <b key={ gens.id }> { gens.name } </b> ) })}
                    </div>

                    <u> { movie.tagline } </u>

                    { movie.overview === '' ? 
                        ( <span> Sinopse Indispon??vel </span> ) 
                      : 
                        ( <span> { movie.overview } </span> )}
                  </div>

                  <div className="rating">
                    <ul>
                      <li> 
                        <p> { movie.vote_average?.toPrecision( 2 ) } </p> 
                        <BsFillStarFill style={{ color: 'rgb(255, 255, 47)', fontSize: '25px', margin:'0 auto' }} /> 
                      </li>

                      <li>  <p> <BsFillHandThumbsUpFill style={{color: 'rgb(131, 210, 131)' }} /> </p> </li>
                      
                      <li> <p> { movie.vote_count } </p> </li>
                    </ul>
                  </div>
              </div>
            </div>

              <h4> ATORES </h4>

              <Swiper
                resizeObserver={ false }
                autoplay={ true }
                slidesPerView={ 'auto' }
                spaceBetween={ 0 }
                pagination={ { clickable: true } }
                modules={ [ Autoplay , Pagination , Navigation ] }
                navigation={ true }
                className="myActorsSlider"
              >
                
                { credits?.map( ( actor: ActorsTypes ) => {
                  return (
                    <SwiperSlide key={ actor?.id }> 
                      <div className='actors'>
                            { actor?.profile_path == undefined ? 
                              ( <Link to={ `/person/${actor?.id}` } onClick={ ( ) => setValues( '' ) } > <img src={ person } /> </Link> ) 
                                : 
                              ( <Link to={ `/person/${actor?.id}` } onClick={ ( ) => setValues( '' ) } > <img src={ bgPath + actor?.profile_path } /> </Link> ) }
                            <p> <BsFillPersonBadgeFill /> { actor?.character } </p>
                            <label> <BsFillPersonCheckFill /> { actor?.original_name } </label>
                      </div>
                    </SwiperSlide>
                    );
                })}
              </Swiper>

            <div className='trailler' >
              { trailler.length ? ( 
                  <iframe
                    src={ `${ youTubePath + trailler[0] }` }
                    allowFullScreen
                    title={ movie.title } >
                  </iframe>
                 ) : (
                  <div className='traillerSvg'>
                    <p> TRAILLER INDISPON??VEL </p>
                    <img src={ traillerFig } />
                  </div>
              )}
            </div>
            
            <BackButton />
          </div> ) : ( <Loader /> )
        }
      </>
    );
  }