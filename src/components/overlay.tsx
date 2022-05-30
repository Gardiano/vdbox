
  import { useEffect, useState } from 'react';

  import { Link } from 'react-router-dom';
  
  import { OverLayController } from '../controllers/overlayController';

  import '../styles/overlay.css';
  import '../styles/medias/overlay.css';

  import wp from '../assets/topgun.jpg';

  export const Overlay = () => {

  useEffect( ( ) => {
    window.scrollTo( 0 , 0 );
    getData( );
  }, [ ] );

  const [ movie, setMovie ] = useState< any[ ] > ( [ ] );

  const [ bg ] = useState< string > ( `linear-Gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url( ${ wp } )` );
  const [ bgPath ] = useState< string > ( 'https://image.tmdb.org/t/p/w500' );
  const getData = async () => {
    const data = await OverLayController( );
      setMovie( data );
  };
  
  return (
      <article key={ movie[ 1 ]?.id } >
        <div className="overlay" style={ { backgroundImage: `${bg}` } }>
          <div className="description">
            <Link to={ `/movie/${ movie[ 1 ]?.id }` } > { movie[ 1 ]?.original_title } &nbsp; </Link>
            <h3> { movie[ 1 ]?.vote_average } </h3>
          </div>
        </div>
      </article>
    );
  };