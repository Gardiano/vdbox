  
  import { useEffect, useState } from 'react';  
  import { useParams } from 'react-router';
  import { MovieByIdController, TraillersController, GetActorsController } from '../../controllers/moviesController/movieDetailsController';
  import { BsFillPersonCheckFill, BsFillPersonBadgeFill } from 'react-icons/bs';

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

        setMovie( data! ); setTrailler( traillers ); setCredits ( credits );
      } catch ( e ) {
        console.log( e );
      }
    };

    return (
      <div className='movieContainer' key={ movie.id } style={ { backgroundImage: `linear-Gradient( ${ gradient } ), url( ${ bgPath+movie.backdrop_path } )` } }>
         
         <div className='details'>

          <div className='poster'>
            <img src={`${ bgPath+movie.poster_path }`} />
          </div>

            <div className='movieDetails'>
              <h4> { movie.title } </h4>

              <div> generos </div>

              <i> { movie.tagline } </i>

              <span> { movie.overview } </span>

            </div>

            <div className="rating">
              <ul>
                <li> <p> { movie.vote_average } </p> </li>
                <li> <p> 18 + </p> </li>
                <li> <p> { movie.vote_count } votos </p> </li>
              </ul>
            </div>

          

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