
import { getTvOnTheAirSeries } from '../../services/services';

export const tvOnTheAirSeriesController = async ( ) => {
    const data = await getTvOnTheAirSeries( );
        return data;
};