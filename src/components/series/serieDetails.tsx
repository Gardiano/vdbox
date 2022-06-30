  
  import { useEffect, useState } from 'react';  
  import { useParams } from 'react-router';
  import { SerieByIdController, EpisodeGroupsController } from '../../controllers/seriesController/SerieDetailsController';
  import { BsFillPersonCheckFill, BsFillPersonBadgeFill, BsFillHandThumbsUpFill, BsFillStarFill } from 'react-icons/bs';
  
  import { Loader } from '../../helper/loader';

  import person from '../../assets/person.svg';
  import traillerFig from '../../assets/trailler.svg';

  import cardTypes from '../../models/cards'
  import actorsTypes from '../../models/actors';
  import traillerTypes from '../../models/trailler';

  import '../../styles/series/serie.css';
  import '../../styles/medias/serie.css';
  
  import Moment from 'react-moment';
  import "moment/locale/pt-br";
  
  Moment.globalLocale = "pt-br";

  export const SerieDetails = ( ) => {
    
    useEffect( ( ) => {
      window.scrollTo( 0 , 0 );
      getData( );
    }, [ ] );

    const serieId = useParams( );

    const [ hasBeenLoaded, setHasBeenLoaded ] = useState < boolean > ( false );

    const [ serie, setSerie ] = useState < cardTypes > ( Object );

    const [ seasons, setSeasons ] = useState < number > ( 0 );

    const [ episodes, setEpisodes ] = useState < any > ( );

    const [ trailler, setTrailler ] = useState < traillerTypes [ ] > ( [ ] );

    const [ credits, setCredits ] = useState < actorsTypes [ ] > ( [ ] );

    const [ bgPath ] = useState < string > ( 'https://image.tmdb.org/t/p/w500' );

    const [ youTubePath ] = useState < string > ( 'https://www.youtube.com/embed/' );

    const [ gradient ] = useState < string > ( '0deg,#020202 0,rgba(2,2,2,.96) 10%,rgba(2,2,2,.9) 22%,rgba(2,2,2,.66) 38%,rgba(2,2,2,.61) 58%,rgba(0,0,21,.76) 100%' )

    const getData = async ( ) => {
      try {
        const data = await SerieByIdController( serieId.id as string );
        setSerie( data! );
        setHasBeenLoaded( true );
      } catch ( e ) {
        console.log( e );
      }
    };

    const getSeasonsAndEpisodes = async ( seasonState: number ) => {
      setSeasons( seasonState );
      const episodes = await EpisodeGroupsController ( serieId.id as string, seasonState );
      setEpisodes( episodes ); 
      console.log('season: ', seasonState)
    };

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
                    
                    <h2> Lançamento: <Moment locale="pt-br"format="DD/MM/YYYY" date={ serie.first_air_date } /> </h2>

                    { serie.number_of_seasons === 0 ? 
                      ( null ) :
                      ( <h3> { serie.number_of_seasons } Temporadas </h3> )}

                    <div className='genres'>  
                      { serie.genres?.map( ( gens: cardTypes ) => {
                          return ( <b key={ gens.id }> { gens.name } </b> ) })}
                    </div>

                    <u> { serie.tagline } </u>

                    { serie.overview === '' ? 
                        ( <span> Sinopse Indisponível </span> ) 
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
           
            <div className='seasonNavBar'>
            <h4> TEMPORADAS </h4>
              {serie.seasons?.map( ( season: cardTypes ) => {
                return (
                  <div key={ season.id } >
                    <button onClick={ ( ) => getSeasonsAndEpisodes( season.season_number! ) } > 
                      {season.season_number} 
                    </button>
                  </div>
                );
              })}
            </div>

            <div className='actors'>
                { credits?.map( ( actor: actorsTypes ) => {
                  return (
                    <div key={actor?.id}>
                      { actor?.profile_path == undefined ? 
                        ( <img src={ person } alt={ 'empty person' } /> ) 
                          : 
                        ( <img src={ bgPath + actor.profile_path } /> )
                      }
                      
                      <p> <BsFillPersonCheckFill /> { actor?.original_name } </p>
                      <p> <BsFillPersonBadgeFill /> { actor?.character } </p>
                    </div>
                  )
                })}
            </div>

            <div className='trailler'>
              { trailler.length ? ( 
                  <iframe 
                    src={ `${ youTubePath + trailler[0] }` }
                    allowFullScreen
                    title={ serie.title } >
                  </iframe>
                 ) : (
                  <div className='traillerSvg'>
                    <p> TRAILLER INDISPONÍVEL </p>
                    <img src={ traillerFig } />
                  </div>
                 )}
            </div>

          </div> ) : 
          ( <Loader /> )
        }
      </>
    );
  }