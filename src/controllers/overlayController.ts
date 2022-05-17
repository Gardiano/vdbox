
  import api from '../api/connect';

  const GK = process.env.REACT_APP_MAK;

  export const getDataForOverlayFilm = async () => {
    try { 
      const response = await api.get( `search/movie?api_key=${GK}&query=$interestelar&language=pt-BR` );
        return response.data.results;
    } catch ( e ) {
        console.log( e );
    };
  };

