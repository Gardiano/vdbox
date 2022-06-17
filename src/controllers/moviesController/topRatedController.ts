
  import { getTopRated } from '../../services/services';

  export const topRatedController = async ( ) => {
    const data = await getTopRated( );
      return data;
  };