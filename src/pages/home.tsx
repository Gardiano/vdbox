  
  import { Overlay } from '../components/movies/overlay';
  import { MovieList } from '../components/movies/movieList';
  import { SeriesList } from '../components/series/seriesList';

  import { useEffect } from 'react';

  export const Home = ( ) => {

    useEffect(() => {
    }, [ ])

    return (
     <>
      <Overlay />
      <MovieList />
      <SeriesList />
     </>
    );
  };