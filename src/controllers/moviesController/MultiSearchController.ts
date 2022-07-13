
  import { multiSearch } from '../../services/services';

  export const MultiSearchController = async ( search: string ) => {
    const data = await multiSearch( search );
      return data;
  };