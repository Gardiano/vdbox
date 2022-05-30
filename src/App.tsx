
import { useEffect, useLayoutEffect, useState } from 'react';
import { Header } from './components/header';
import { MenuMobile } from './components/menuMobile';
import { AppRoutes }  from './routes';

import './styles/global.css';

export const App = ( ) => {

  const [ size, setSize ] = useState( 0 );

  function useWindowSize( ) { 

    useLayoutEffect( (  ) => {

      function updateSize() {
        setSize(  window.innerWidth );
      }

      window.addEventListener( 'resize', updateSize );

      updateSize( );
      
    }, [] );

    return size;

  } useWindowSize( );

  return (
    <>
      { size >= 800 ? ( <Header /> ) : ( <MenuMobile /> ) }
      <AppRoutes /> 
    </>
  );
};
