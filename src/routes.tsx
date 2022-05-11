
import { Routes, Route } from 'react-router-dom';

import { Home } from "./pages/home";
import { Movie } from "./pages/movie";

export const AppRoutes = () => {   
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/movie/:id" element={ <Movie /> } /> 
      <Route path="*" element={ <p> pagina nao encontrada </p> } /> 
    </Routes>
  );
};

