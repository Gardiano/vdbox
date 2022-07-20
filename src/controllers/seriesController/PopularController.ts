
  import { getPopularSeries } from '../../services/services';

  export const popularSeriesController = async ( page: number ) => {
    const data = await getPopularSeries( page );
      return data;
  };