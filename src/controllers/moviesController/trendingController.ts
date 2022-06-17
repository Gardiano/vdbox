
  import { getTrendings } from '../../services/services';

  export const trendingsController = async ( ) => {
    const data = await getTrendings( );
      return data;
  };