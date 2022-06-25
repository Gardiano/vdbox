  
  import { useEffect, useState } from 'react';  
  import { useParams } from 'react-router';
  import { MovieByIdController, TraillersController, GetActorsController } from '../../controllers/moviesController/movieDetailsController';
  import { BsFillPersonCheckFill, BsFillPersonBadgeFill, BsFillHandThumbsUpFill, BsFillStarFill } from 'react-icons/bs';

  import movieTypes from '../../models/cards'
  import actorsTypes from '../../models/actors';
  import traillerTypes from '../../models/trailler';

  import '../../styles/movies/movie.css';
  import '../../styles/medias/movie.css';
  
  import Moment from 'react-moment';
  import "moment/locale/pt-br";
  Moment.globalLocale = "pt-br";

  export const MovieDetails = ( ) => {
    
    useEffect( ( ) => {
      window.scrollTo( 0 , 0 );
      getData( );
    }, [ ] );

    const movieId = useParams( );

    const [ movie, setMovie ] = useState <movieTypes> ( Object );

    const [ trailler, setTrailler ] = useState < traillerTypes [ ] > ( [ ] );

    const [ credits, setCredits ] = useState < actorsTypes [ ] > ( [ ] );

    const [ bgPath ] = useState< string > ( 'https://image.tmdb.org/t/p/w500' );

    const [ youTubePath ] = useState < string > ( 'https://www.youtube.com/embed/' );

    const [ gradient ] = useState<string>('0deg,#020202 0,rgba(2,2,2,.96) 10%,rgba(2,2,2,.9) 22%,rgba(2,2,2,.66) 38%,rgba(2,2,2,.61) 58%,rgba(0,0,21,.76) 100%')

    const getData = async ( ) => {
      try {
        const data      = await MovieByIdController( movieId.id as string );
        const traillers = await TraillersController( movieId.id as string );
        const credits   = await GetActorsController( movieId.id as string );

        console.log ( data );

        setMovie( data! ); setTrailler( traillers ); setCredits ( credits );
      } catch ( e ) {
        console.log( e );
      }
    };

    return (
      <div className='wrapper'>

        <div className='movieContainer' key={ movie?.id } style={ { backgroundImage: `linear-Gradient( ${ gradient } ), url( ${ bgPath+movie.backdrop_path } )` } }>
          <div className='details'>
              <div className='poster'>
                <img src={`${ bgPath+movie.poster_path }`} />
              </div>
              

              <div className='movieDetails'>
                <h4> { movie.title } </h4>
                
                <h2> Lançamento: <Moment locale="pt-br"format="DD/MM/YYYY" date={ movie.release_date } /> </h2>

                {movie.runtime === 0 ? ( null ) : ( <h3> { movie.runtime } min </h3> )}

                <div className='genres'>  
                  { movie.genres?.map( ( gens: movieTypes ) => {
                      return ( <b key={ gens.id }>  { gens.name } </b> ) })}
                </div>

                <u> { movie.tagline } </u>

                { movie. overview === '' ? 
                    ( <span> Sinopse Indisponível </span> ) 
                  : 
                    ( <span> { movie.overview } </span> )
                }
              </div>

              <div className="rating">
                <ul>
                  <li> 
                    <p> { movie.vote_average?.toPrecision( 2 ) } </p> 
                    <BsFillStarFill style={{ color: 'rgb(255, 255, 47)', fontSize: '25px', margin:'0 auto' }} /> 
                  </li>

                  <li>  <p> <BsFillHandThumbsUpFill/> </p> </li>
                  
                  <li> <p> { movie.vote_count } votos </p> </li>
                </ul>
              </div>
          </div>
        </div>

        <div className='actors'>
          actors;
        </div>
        
      </div>
    );
  };







{/* <div className="rating">
  <ul>
    <li> <p> { movie?.vote_average } </p> </li>
    <li> <p> 18 + </p> </li>
    <li> <p> { movie?.vote_count } votos </p> </li>
  </ul>
</div> */}