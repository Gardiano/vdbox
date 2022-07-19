
import '../styles/loaders/loader.css';
//@ts-ignore
import loader from '../assets/load.svg';

export const Loader = ( ) => {

  return (
    <div className="loader">
      <h1> VDBOX </h1>
      <img src={ loader } />
    </div>
  );
};