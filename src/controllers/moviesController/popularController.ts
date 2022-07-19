
  import { getPopular } from '../../services/services';

  export const PopularController = async ( ) => {
    const data = await getPopular( );
      return data;
  };