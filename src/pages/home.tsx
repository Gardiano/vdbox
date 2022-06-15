
  import { MovieList } from '../components/movies/movieList';

  import { Overlay } from '../components/movies/overlay';

  import '../styles/home.css';

  export const Home = ( ) => {
    return (
        <main>
          <Overlay />
          <MovieList />
        </main>
      );
  };