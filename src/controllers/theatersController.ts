
  import api from '../services/connect';

  const GK = process.env.REACT_APP_MAK;

  export const theatersController = async ( ) => {
    try {
      const response = await api.get( `/movie/now_playing?api_key=${ GK }&language=pt-BR&page=1` );
      return response.data.results;
    } catch ( e ) {
        console.log( e );
    };
  };