
  import api from '../api/connect';

  const GK = process.env.REACT_APP_MAK;

  export const popularController = async () => {
    try { 
      const response = await api.get( `/movie/popular?api_key=${ GK }&language=pt-BR&page=1` );
        return response.data.results;
    } catch ( e ) {
        console.log( e );
    };
  };