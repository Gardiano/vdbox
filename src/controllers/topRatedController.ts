
  import api from '../api/connect';

  const GK = process.env.REACT_APP_MAK;

  export const topRatedController = async () => {
    try { 
      const response = await api.get( `/movie/top_rated?api_key=${ GK }&language=pt-BR&page=2` );
        return response.data.results;     
    } catch ( e ) {
        console.log( e );
    };
  };