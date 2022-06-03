
  import api from '../services/connect';

  const GK = process.env.REACT_APP_MAK;

  export const trendingController = async () => {
    try { 
      const response = await api.get( `/trending/movie/day?api_key=${GK}&language=pt-BR&page=1` ); 
        return response.data.results;     
    } catch ( e ) {
        console.log( e );
    };
  };