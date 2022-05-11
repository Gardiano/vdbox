
import { Link } from 'react-router-dom';

import '../styles/header.css';

export const Header = () => {

  return (
    <header>
      <nav className="navbar">
        <p> VideoBox </p>
        <Link to="/home" > Home </Link>
        <Link to="/series" > Series </Link>
        <Link to="/filmes" > Filmes </Link>
        <Link to="/Trending" > Traillers </Link>
      </nav>

      <div className="searchBox">
        <input type="text" placeholder="  Ex: Batman" />
        <button> search </button>
      </div>
    </header>
  );

}