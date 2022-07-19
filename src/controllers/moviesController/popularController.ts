
  import { getPopular } from '../../services/services';

  export const PopularMoviesController = async ( ) => {
    const data = await getPopular( );
      return data;
  };