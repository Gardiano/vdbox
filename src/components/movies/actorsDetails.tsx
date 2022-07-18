
  
  import { useEffect, useState } from 'react';  

  import { useParams } from 'react-router';
  
  import { PersonController } from '../../controllers/moviesController/PersonController';

  import { BsSuitHeartFill } from 'react-icons/bs';

  import { Loader } from '../../helper/loader';

  import person from '../../assets/person.svg';

  import ActorsTypes from '../../models/actors';

  import '../../styles/movies/actors.css';
  import '../../styles/medias/actors.css';
  
  import Moment from 'react-moment';
  import "moment/locale/pt-br";

  Moment.globalLocale = "pt-br";

  export const ActorsDetails = ( ) => {

    const actorId = useParams( );

    useEffect( ( ) => {
      window.scrollTo( 0 , 0 );
        getData( );
    }, [ actorId.id ] );

    const [ hasBeenLoaded, setHasBeenLoaded ] = useState < boolean > ( false );

    const [ actors, setActors ] = useState <ActorsTypes> ( );

    const [ bgPath ] = useState < string > ( 'https://image.tmdb.org/t/p/w500' );

    const getData = async ( ) => {
      try {
        const data = await PersonController( actorId.id as string );

        console.log ( 'actor', data )
        setActors( data! );

        setHasBeenLoaded( true );
      } catch ( e ) {
        console.log( e );
      };
    };

    return (
      <>
        { hasBeenLoaded === true ? (
            <div className='wrapper'>
              <div className='actorsContainer'>
                  <div className='poster'>
                      {actors?.profile_path != undefined ? (
                        <img src={`${ bgPath+actors?.profile_path }`} />
                      ) : (
                        <img src={`${ person }`} />
                      )}
                  </div>

                  <p> <BsSuitHeartFill style={{color: '#F8686D'}} /> { actors?.popularity } </p>
                  
                  { actors?.name !== undefined ? (
                    <h1> { actors?.name } </h1>
                  ) : (
                    <h1> Nome Indisponível </h1>
                  )}

                  <p> Data De Nascimento : { actors?.birthday == undefined ? (
                    <span> Indisponível </span> ) : ( <span> <Moment locale="pt-br"format="DD/MM/YYYY" date={ actors?.birthday } /></span> )}
                  </p>

                  <p> Local De Nascimento : { actors?.place_of_birth == undefined ? ( 
                    <span> Indisponível </span> ) : ( <span> { actors?.place_of_birth } </span> )}
                  </p>

                  <div className='biography'>
                      <details open>
                        { actors?.biography ? (
                          <summary> Biografia </summary>
                        ) : (
                        <summary> Biografia Indisponível </summary> )}
                        <label> { actors?.biography } </label>
                      </details>
                  </div>
              </div>
            </div> ) : ( <Loader /> )
        }
      </>
    );
  }