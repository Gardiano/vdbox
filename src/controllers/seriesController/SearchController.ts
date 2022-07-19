
  import { getSerieByName } from '../../services/services';

  export const SearchController = async ( serie: string ) => {
    const data = await getSerieByName( serie );
      return data;
  };