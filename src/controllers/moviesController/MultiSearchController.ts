
  import { multiSearch } from '../../services/services';

  export const SearchController = async ( search: string ) => {
    const data = await multiSearch( search );
      return data;
  };