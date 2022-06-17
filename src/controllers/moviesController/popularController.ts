
  import { getPopular } from '../../services/services';

  export const popularController = async ( ) => {
    const data = await getPopular( );
      return data;
  };