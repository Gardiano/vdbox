
  import { getTheaters } from '../../services/services';

  export const theatersController = async ( page: number ) => {
    const data = await getTheaters( page );
      return data;
  };