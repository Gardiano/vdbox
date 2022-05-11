
import { Header } from './components/header';
import { AppRoutes }  from './routes';

import './styles/global.css';

export const App = () => {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
};
