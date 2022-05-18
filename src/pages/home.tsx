
 
  import { Overlay } from '../components/overlay';
  import { Popular } from '../components/popular';
  import { Theaters } from '../components/theaters';
  import { TopRated } from '../components/topRated';
  import { Trending } from '../components/trending';

  import '../styles/home.css';

  export const Home = () => {
    return (
        <main>
          <Overlay />
          <Theaters />
          <TopRated />
          <Popular />          
          <Trending />          
        </main>
      );
  };