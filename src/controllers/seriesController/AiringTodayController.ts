
  import { getAiringTodaySeries } from '../../services/services';

  export const airingTodaySeriesController = async ( ) => {
    const data = await getAiringTodaySeries( );
      return data;
  };