
  
  import { useEffect, useState } from 'react';

  import { useParams } from 'react-router';

  import { EpisodeDetailController } from '../../controllers/seriesController/EpisodeDetailController';

  import { Loader } from '../../helper/loader';

  import { BsFillHandThumbsUpFill, BsFillStarFill } from 'react-icons/bs';

  import '../../styles/series/serie.css';
  import '../../styles/series/episodeDetails.css';
  import '../../styles/medias/serie.css';


  import Moment from 'react-moment';
  import "moment/locale/pt-br";
  Moment.globalLocale = "pt-br";

  export const EpisodeDetail = ( ) => {

    useEffect( ( ) => {
      window.scrollTo( 0 , 0 );
      getData ( );
    }, [ ] );

    const serieId = useParams( );

    const [ episodeDetail, setEpisodeDetail ] = useState < any > ( );

    const [ hasBeenLoaded, setHasBeenLoaded ] = useState < boolean > ( false );

    const [ bgPath ] = useState < string > ( 'https://image.tmdb.org/t/p/w500' );

    const [ gradient ] = useState < string > ( '0deg,#020202 0,rgba(2,2,2,.96) 10%,rgba(2,2,2,.9) 22%,rgba(2,2,2,.66) 38%,rgba(2,2,2,.61) 58%,rgba(0,0,21,.76) 100%' )

    const getData = async ( ) => {
      const data = await EpisodeDetailController( serieId.id as string, serieId.season_number as string, serieId.episode_number as string );
        console.log( 'ep', data );
        setHasBeenLoaded( true );
        setEpisodeDetail( data );
    }

    return (
     <>
        { hasBeenLoaded === true ? (
              <div className='wrapper'>
                <div className='serieContainer episodeDetailContainer' key={ episodeDetail?.id } style={ { backgroundImage: `linear-Gradient( ${ gradient } ), url( ${ bgPath + episodeDetail.still_path } )` } }>
                  <div className='details'>

                      <div className='poster' style={ { backgroundImage: ` url( ${ bgPath + episodeDetail.still_path } ) ` } }>
                        {/* <img src={ `${ bgPath + episodeDetail.still_path }` } /> */}
                      </div>

                      <div className='movieDetails'>
                        <h4> { episodeDetail.name } </h4>
                        
                        <h2> Lançamento: <Moment locale="pt-br"format="DD/MM/YYYY" date={ episodeDetail.first_air_date } /> </h2>

                        <h2> Episódio { episodeDetail.episode_number } </h2>

                        <h2> Duração: { episodeDetail.runtime } min </h2>

                          { episodeDetail.overview === '' ? 
                              ( <span> Sinopse Indisponível </span> ) 
                            : 
                              ( <span> { episodeDetail.overview } </span> )
                          }
                      </div>

                      <div className="rating">
                        <ul>
                          <li> 
                            <p> { episodeDetail.vote_average?.toPrecision( 2 ) } </p> <BsFillStarFill style={ { color: 'rgb(255, 255, 47)', fontSize: '25px', margin:'0 auto' } } /> 
                          </li>

                          <li> 
                            <p> <BsFillHandThumbsUpFill style={ { color: 'rgb(131, 210, 131)' } } /> </p>
                          </li>
                          
                          <li> 
                            <p> { episodeDetail.vote_count } </p> 
                          </li>
                        </ul>
                      </div>
                  </div>
                </div>
              </div> ) : 
              ( <Loader /> )
        };
     </>
    );
  }