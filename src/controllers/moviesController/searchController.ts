
  import api from '../../services/connect';

  const GK = process.env.REACT_APP_MAK;

  export const SearchController = async ( movie: string ) => {
    try { 
      const response = await api.get( `search/movie?api_key=${GK}&query=$${ movie }&language=pt-BR` );
        return response.data.results;          
    } catch ( e ) {
        console.log( e );
    };
  };