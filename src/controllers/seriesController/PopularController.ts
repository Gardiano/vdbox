
  import { getPopularSeries } from '../../services/services';

  export const popularSeriesController = async ( ) => {
    const data = await getPopularSeries( );
      return data;
  };