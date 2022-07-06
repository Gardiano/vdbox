

  import { useEffect, useState } from 'react';

  import { Link } from 'react-router-dom';

  import { Search } from '../components/searchBar/search';

  import { MoviesPageController } from '../controllers/moviesController/MoviesController';

  import movieTypes from '../models/cards';

  import '../styles/pages/movies.css';

  export const Movies = ( ) => {

    useEffect( ( ) => {
      getData(  );    
    }, [ ] );

    const [ movies , setMovies ] =  useState  < movieTypes[ ] > ( [ ] );

    const [ page, setPage ] = useState< number > ( 1 );

    const [ bgPath ] = useState < string > ( 'https://image.tmdb.org/t/p/w500' );

    const getData = async ( ) => {
      setPage( page + 1 );
      const data = await MoviesPageController( page );
      setMovies( data );
    };

    const getMoreDataMovies = async ( ) => {
        if ( page !== 1 ) {
            setPage( page + 1 );
            const moreMovies = await MoviesPageController( page );
            setMovies( [ ...movies, ...moreMovies ] );
        }
            return page;
    };

    return (
        <>
            <Search />
            <div className='MoviesContainer' key={ page } >
                { movies.map( ( movie: movieTypes ) => {
                    return (
                        <div key={ movie.id }>
                            <Link to={ `/movie/${ movie.id }` } >
                                <img src={ bgPath + movie.poster_path } />
                            </Link>
                            <label> { movie.title } </label>
                        </div>
                    );
                })}
            </div>

            <button className='loadMoreMovies' onClick={ () => getMoreDataMovies ( ) } > 
                 Mais Filmes 
            </button>
        </>
    );
  };