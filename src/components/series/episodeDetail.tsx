
  
  import { useEffect, useState } from 'react';  
  import { useParams } from 'react-router';
  
  import Moment from 'react-moment';
  import "moment/locale/pt-br";
  Moment.globalLocale = "pt-br";

  export const EpisodeDetail = ( ) => {
    
    useEffect( ( ) => {
      window.scrollTo( 0 , 0 );
      
    }, [ ] );

    const serieId = useParams( );

    return (
      <>
          <div className='wrapper'>
            <h4 style={ { color: 'red' } } > EPISODE DETAILS ! </h4>
          </div>
      </>
    );
  }