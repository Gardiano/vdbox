
  import { getTheaters } from '../../services/services';

  export const MoviesPageController = async ( page: number ) => {
    const data = await getTheaters( page );
      return data;
  };