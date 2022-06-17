
  import { getMovieByName } from '../../services/services';

  export const SearchController = async ( movie: string ) => {
    const data = await getMovieByName( movie );
      return data;
  };