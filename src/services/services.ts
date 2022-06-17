
// baseUrl.ts
import api from './baseUrl';
// .env
const GK = process.env.REACT_APP_MAK;

// movies endpoints
export const getMovieToOverlayComponent = async ( ) => {
    try { 
      const response = await api.get( `search/movie?api_key=${GK}&query=$top-gun&language=pt-BR` );
        return response.data.results;
    } catch ( e ) {
        console.log( e );
    };
};

export const getTheaters = async ( ) => {
    try {
        const response = await api.get(`/movie/now_playing?api_key=${GK}&language=pt-BR&page=1`);
        return response.data.results;
    } catch ( e ) {
        console.log( e );
    };
};

export const getTrendings = async ( ) => {
    try {
        const response = await api.get(`/trending/movie/day?api_key=${GK}&language=pt-BR&page=1`);
        return response.data.results;
    } catch ( e ) {
        console.log( e );
    };
};

export const getTopRated = async ( ) => {
    try {
        const response = await api.get(`/movie/top_rated?api_key=${GK}&language=pt-BR&page=2`);
        return response.data.results;
    } catch ( e ) {
        console.log( e );
    };
};

export const getPopular = async ( ) => {
    try { 
        const response = await api.get( `/movie/popular?api_key=${ GK }&language=pt-BR&page=1` );
        return response.data.results;
    } catch ( e ) {
        console.log( e );
    };
};

// movie details endpoint
export const getMovieById = async ( movieId : string ) => {
    try {
        const response = await api.get( `/movie/${ movieId }?api_key=${ GK }&language=pt-BR` );
        return response.data;
      } catch ( e ) {
          console.log( e );
      };
};

export const getTraillers = async ( movieId : string ) => {
    try {
        const response = await api.get( `/movie/${ movieId }/videos?api_key=${ GK }&language=pt-BR` );
            const traillerKey = response.data.results.map( ( traillerKey: any ) => {
                return traillerKey.key;
            });
          return traillerKey;
      } catch ( e ) {
          console.log( e );
      };
};

export const getActors = async ( movieId : string ) => {
    try {
      const response = await api.get( `/movie/${ movieId }/credits?api_key=${ GK }&language=pt-BR` );
        return response.data;
      } catch ( e ) {
          console.log( e );
      };
};

// search movie endpoint
export const getMovieByName = async ( movie: string ) => {
    try { 
      const response = await api.get( `search/movie?api_key=${GK}&query=$${ movie }&language=pt-BR` );
        return response.data.results;          
    } catch ( e ) {
        console.log( e );
    };
};