
  import { getDataForMoviesPage } from '../../services/services';

  export const MoviesPageController = async ( page: number ) => {
    const data = await getDataForMoviesPage( page );
      return data;
  };