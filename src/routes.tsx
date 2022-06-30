
import { Routes, Route } from 'react-router-dom';
import { Search } from './components/searchBar/search';

import { Home } from "./pages/home";
import { Movie } from "./pages/movie";
import { Serie } from './pages/serie';

export const AppRoutes = ( ) => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/movie/:id" element={ <Movie /> } />
      <Route path='/series/:id' element={ <Serie /> } />
      <Route path="/movies" element={ <Search /> } />
      <Route path="*" element={ <p> pagina nao encontrada </p> } />
    </Routes>
  );
};