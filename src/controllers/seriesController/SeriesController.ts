
  import { getDataForSeriesPage } from '../../services/services';

  export const SeriesPageController = async ( page: number ) => {
    const data = await getDataForSeriesPage( page );
      return data;
  };