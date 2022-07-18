
  import { getPersons } from '../../services/services';

  export const PersonController = async ( personId: string ) => {
    const data = await getPersons( personId );
      return data;
  };