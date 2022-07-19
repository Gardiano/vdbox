
import { Link } from 'react-router-dom';

import '../styles/errorPage/errorPage.css';

import loader from '../assets/load.svg';

export const ErrorPage = ( ) => {
  return (
    <div className="errorPage">

      <h1> Oops... algo deu errado </h1>

      <p> Você quis dizer </p>

      <Link to='/'> <h1> VDBOX </h1> </Link>

      <img src={ loader } />
    </div>
  );
};