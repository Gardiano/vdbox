
import { getTopRatedSeries } from '../../services/services';

export const topRatedSeriesController = async ( ) => {
    const data = await getTopRatedSeries( );
        return data;
};