  
  import { useEffect, useState } from 'react';  
  import { useParams } from 'react-router';
  import { GetMovieById, GetTraillers, GetActors } from '../controllers/movieController';
  import { BsFillPersonCheckFill, BsFillPersonBadgeFill } from 'react-icons/bs';

  import '../styles/movie.css';
  import '../styles/medias/movie.css';
  
  import Moment from 'react-moment';
  import "moment/locale/pt-br";
  Moment.globalLocale = "pt-br";

  export const MovieDetails = () => {

    useEffect( ( ) => {
      window.scrollTo( 0 , 0 );
      getData();
    }, [ ] );

    const movieId = useParams();

    const [ movie, setMovie ] = useState< any > (  );

    const [ trailler, setTrailler ] = useState < any [ ] > ( [ ] );

    const [ credits, setCredits ] = useState < any [ ] > ( [ ] );

    const [ bgPath ] = useState< string > ( 'https://image.tmdb.org/t/p/w500' );

    const [ youTubePath ] = useState < string > ( 'https://www.youtube.com/embed/' );

    const getData = async () => {
      const data      = await GetMovieById( movieId.id );
      const traillers = await GetTraillers( movieId.id );
      const credits   = await GetActors( movieId.id );
      setMovie( data );
      setTrailler( traillers );
      setCredits ( credits );
    };

    return (
      <main>
        <div className="container" key={ movie?.id } style={ { backgroundImage: `linear-Gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgPath+movie?.backdrop_path})` } }>
          <div className="details">

            <div className="pic">
              <img src={ bgPath + movie?.poster_path } alt="image" />

                <div className="trailler">
                  <iframe
                    src={ youTubePath + trailler[0] }           
                    allowFullScreen={ true }
                    title="trailler"
                  />
                </div>
            </div>

            <div className="description">
              <p> { movie?.title } </p>
              
              <div className="genres">
                { movie?.genres.map( ( genres: any ) => {
                  return (
                    <span> { genres.name } </span>
                  );
                })}
              </div>

              <h4> Lançamento:  { `${' '}`}
                <Moment locale="pt-br"format="DD/MM/YYYY" date={ movie?.release_date } > </Moment> 
              </h4> 

              <div className="sinopse">
                 <i> { movie?.tagline } </i>
                 <p> { movie?.overview } </p> 
              </div>
                
            </div>

            <div className="rating">
              <ul>
                <li> <p> { movie?.vote_average } </p> </li>
                <li> <p> 18 + </p> </li>
                <li> <p> { movie?.vote_count } votos </p> </li>
              </ul>
              
              <div className="casting">
                  {credits?.map( ( actors: any ) => {
                    return (                      
                      <span>                        
                        <img src={ bgPath + actors?.profile_path } alt="ator/atriz"></img>                                               
                        <p> <BsFillPersonCheckFill className="icons" /> { actors?.original_name } </p>                       
                        <p> <BsFillPersonBadgeFill className="icons" /> { actors?.character } </p>
                      </span>
                    )
                  })}
              </div>
              
            </div>
          </div>
        </div>
      </main>    
    );
  };