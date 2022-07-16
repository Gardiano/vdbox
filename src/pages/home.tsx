  
  import { Overlay } from '../components/movies/overlay';
  import { MovieList } from '../components/movies/movieList';
  import { SeriesList } from '../components/series/seriesList';

  export const Home = ( ) => {
    return (
     <>
      <Overlay />
      <MovieList />
      <SeriesList />
     </>
    );
  };