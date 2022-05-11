
  import { useEffect, useState } from 'react';

  import { Link } from 'react-router-dom';
  import { Header } from './header';

  import { getDataForOverlayFilm } from '../controllers/overlayController';

  import '../styles/overlay.css';

  import wp from '../images/2.jpg';

  export const Overlay = () => {

  useEffect( ( ) => {
    getDataFromOverLayController( );
  }, [ ] );

  const [ movie, setMovie ] = useState< any[ ] > ( [ ] );

  const [ bg ] = useState<string>(`linear-Gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${wp})`);

  const getDataFromOverLayController = async () => {
    const data = await getDataForOverlayFilm();
      setMovie( data );
  };
  
  return (
      <article key={ movie[1]?.id } >
        <div className="overlay" style={ { backgroundImage: bg } }>
          <div className="description">
            <Link to="/trending"> { movie[1]?.original_title } &nbsp; </Link>
            <h3> { movie[1]?.vote_average } </h3>
          </div>
        </div>
      </article>
    );
  };