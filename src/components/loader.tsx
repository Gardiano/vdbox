
import '../styles/loader.css';

import gif from '../assets/loader.gif'

export const LoaderGif: any = () => {
  return (
    <div className="loader">
    <img src={ gif } />
  </div>
  )

};