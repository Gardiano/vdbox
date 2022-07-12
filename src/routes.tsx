
import { Routes, Route } from 'react-router-dom';

import { Home } from "./pages/home";
import { Movie } from "./pages/movie";
import { Movies } from './pages/movies';
import { Serie } from './pages/serie';

import { EpisodeDetailsPage } from './pages/episodeDetails';

import { SearchContextProvider } from './context/searchContext';

export const AppRoutes = ( ) => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/movie/:id' element={ <Movie /> } />
      <Route path='/series/:id' element={ <Serie /> } />
      <Route path='/series/:id/season/:season_number/episode/:episode_number' element={ <EpisodeDetailsPage /> } />
      <Route path='/movies' element={ <Movies /> } />
      <Route path='*' element={ <p> pagina nao encontrada </p> } />
    </Routes>
  );
};