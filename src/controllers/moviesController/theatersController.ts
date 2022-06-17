
  import { getTheaters } from '../../services/services';

  export const theatersController = async ( ) => {
    const data = await getTheaters( );
      return data;
  };