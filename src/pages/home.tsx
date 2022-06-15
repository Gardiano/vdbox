
  import { MovieList } from '../components/movieList';

  import { Overlay } from '../components/overlay';

  import '../styles/home.css';

  export const Home = ( ) => {
    return (
        <main>
          <Overlay />
          <MovieList />
        </main>
      );
  };