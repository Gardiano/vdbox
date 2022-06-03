
  import api from '../services/connect';

  const GK = process.env.REACT_APP_MAK;

  export const OverLayController = async ( ) => {
    try { 
      const response = await api.get( `search/movie?api_key=${GK}&query=$top-gun&language=pt-BR` );
        return response.data.results;
    } catch ( e ) {
        console.log( e );
    };
  };

