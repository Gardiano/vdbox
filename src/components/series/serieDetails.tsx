  
  import { useEffect, useState } from 'react';
  import { useParams } from 'react-router';
  import { useSearch } from '../../hooks/useSearchContext';
  import { Link } from 'react-router-dom';
  import { SerieByIdController, EpisodeGroupsController } from '../../controllers/seriesController/SerieDetailsController';
 
  import { Swiper, SwiperSlide } from 'swiper/react';
  import EpisodesTypes from '../../models/episodes';
  import { Autoplay, Navigation, Pagination } from 'swiper';

  import { BsFillHandThumbsUpFill, BsFillStarFill } from 'react-icons/bs';
  

  import { Loader } from '../../helper/loader';
  //@ts-ignore
  import traillerFig from '../../assets/trailler.svg';

  import cardTypes from '../../models/cards';
  import episodeTypes from '../../models/episodes';

  import '../../styles/series/serie.css';
  import '../../styles/medias/serie.css';
  
  import Moment from 'react-moment';
  import "moment/locale/pt-br";
import { BackButton } from '../buttons/backButton';

  Moment.globalLocale = "pt-br";

  export const SerieDetails = ( ) => {
    
    const serieId = useParams( );

    const { setValues } = useSearch( );
    

    useEffect( ( ) => {
      window.scrollTo( 0 , 0 );
      getData( );
    }, [ serieId.id ] );

    const [ hasBeenLoaded, setHasBeenLoaded ] = useState < boolean > ( false );

    const [ serie, setSerie ] = useState < cardTypes > ( Object );

    const [ seasons, setSeasons ] = useState < number > ( );

    const [ episodes, setEpisodes ] = useState < episodeTypes > ( );

    const [ hasEpisodes, setHasEpisodes ] = useState < boolean > ( false );

    const [ bgPath ] = useState < string > ( 'https://image.tmdb.org/t/p/w500' );

    const [ gradient ] = useState < string > ( '0deg,#020202 0,rgba(2,2,2,.96) 10%,rgba(2,2,2,.9) 22%,rgba(2,2,2,.66) 38%,rgba(2,2,2,.61) 58%,rgba(0,0,21,.76) 100%' );

    const getData = async ( ) => {
      try {
        const data = await SerieByIdController( serieId.id as string );
        console.log( data )
        setSerie( data! );
        setHasBeenLoaded( true );
      } catch ( e ) {
        console.log( e );
      }
    };

    const getSeasonsAndEpisodes = async ( seasonState: number ) => {
      setSeasons( seasonState );
      const episodes = await EpisodeGroupsController ( serieId.id as string, seasonState );
      console.log(episodes)
      setEpisodes( episodes );
      setHasEpisodes( true );
    };

    const  clearSearchWhenClickingOnACard = ( ) => {
      setValues( '' );
    }

    return (
      <>
        { hasBeenLoaded === true ? (
          <div className='wrapper'>
            <div className='serieContainer' key={ serie?.id } style={ { backgroundImage: `linear-Gradient( ${ gradient } ), url( ${ bgPath+serie.backdrop_path } )` } }>
              <div className='details'>

                  <div className='poster'>
                    <img src={`${ bgPath+serie.poster_path }`} />
                  </div>

                  <div className='movieDetails'>
                    <h4> { serie.name } </h4>
                    
                    <h2> Lan??amento: <Moment locale="pt-br"format="DD/MM/YYYY" date={ serie.first_air_date } /> </h2>

                    { serie.number_of_seasons === 0 ? 
                      ( null ) :
                      ( <h3> { serie.number_of_seasons } Temporadas </h3> )}

                    <div className='genres'>  
                      { serie.genres?.map( ( gens: cardTypes ) => {
                          return ( <b key={ gens.id }> { gens.name } </b> ) })}
                    </div>

                    <u> { serie.tagline } </u>

                    { serie.overview === '' ? 
                        ( <span> Sinopse Indispon??vel </span> ) 
                      : 
                        ( <span> { serie.overview } </span> )}
                  </div>

                  <div className="rating">
                    <ul>
                      <li> 
                        <p> { serie.vote_average?.toPrecision( 2 ) } </p> <BsFillStarFill style={{ color: 'rgb(255, 255, 47)', fontSize: '25px', margin:'0 auto' }} /> 
                      </li>

                      <li> 
                        <p> <BsFillHandThumbsUpFill style={{color: 'rgb(131, 210, 131)' }} /> </p>
                      </li>
                      
                      <li> 
                        <p> { serie.vote_count } </p> 
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
           
            <h4> TEMPORADAS </h4>

            <div className='seasonNavBar'>
              { serie.seasons?.map( ( season: cardTypes ) => {
                return (
                  <>
                    <button 
                      key={ season.id } 
                      onClick={ ( ) => getSeasonsAndEpisodes( season.season_number! ) } > 
                      { season.season_number } 
                    </button>
                  </>
                );
              })}
            </div>
           
            { hasEpisodes == true ? ( 
              <div className='slideEpisodes'>

               <h4> SEASON { episodes?.season_number } </h4>

                <Swiper
                  resizeObserver={ false }
                  autoplay={ false }
                  slidesPerView={ 'auto' }
                  spaceBetween={ 0 }
                  pagination={ { clickable: true } }
                  modules={ [ Autoplay, Pagination ] }
                  navigation={ false }
                  className="mySliderEpisodes"
                >
                  
                  { episodes?.episodes?.map( ( ep: EpisodesTypes ) => {
                      return (
                        <SwiperSlide key={ ep.id } > 
                            <div className='episodes'>
                              { ep.still_path == null ? (
                                  <Link to={`/series/${ serieId.id }/season/${ seasons }/episode/${ ep.episode_number }`} 
                                        onClick={ clearSearchWhenClickingOnACard }
                                  >
                                    <img src={ traillerFig } />
                                  </Link> ) :
                                ( <Link to={`/series/${ serieId.id }/season/${ seasons }/episode/${ ep.episode_number }`} 
                                        onClick={ clearSearchWhenClickingOnACard }
                                  > 
                                    <img src={ bgPath + ep.still_path } /> 
                                  </Link> )
                              }   <p> Epis??dio: { ep.episode_number } </p>
                                  <label> { ep.name } </label>
                            </div>
                        </SwiperSlide>
                      )})}
                </Swiper>
              </div>
             ) : ( null ) }
             
             <BackButton />
          </div> ) :
          ( <Loader /> )
        }
      </>
    );
  }