
import api from './baseUrl';

process.env.REACT_APP_VERCEL_ENV;

// multi search endpoint ( movie, series, actors )
export const multiSearch = async ( search: string ) => {
    try {
      const response = await api.get( `search/multi?api_key=${ process.env.REACT_APP_VERCEL_ENV }&query=${ encodeURIComponent( search ) }&language=pt-BR&page=1&include_adult=false` );
        return response.data.results;          
    } catch ( e ) {
        return;
    };
};

// search movie endpoint
export const getMovieByName = async ( movie: string ) => {
    try {
      const response = await api.get( `search/movie?api_key=${ process.env.REACT_APP_VERCEL_ENV }&query=${ encodeURIComponent( movie ) }&language=pt-BR` );
        return response.data.results;          
    } catch ( e ) {
        console.log( e );
    };
};

// search series endpoint
export const getSerieByName = async ( serie: string ) => {
    try {
      const response = await api.get( `search/tv?api_key=${ process.env.REACT_APP_VERCEL_ENV }&query=${ encodeURIComponent( serie ) }&language=pt-BR` );
        return response.data.results;
    } catch ( e ) {
        console.log( e );
    };
};

// movie endpoints
export const getMovieToOverlayComponent = async ( ) => {
    try { 
      const response = await api.get( `search/movie?api_key=${ process.env.REACT_APP_VERCEL_ENV }&query=$top-gun&language=pt-BR` );
        return response.data.results;
    } catch ( e: any ) {
        console.log( e );
    };
};

export const getTheaters = async ( ) => {
    try {
        const response = await api.get(`/movie/now_playing?api_key=${ process.env.REACT_APP_VERCEL_ENV }&language=pt-BR&page=1`);
        return response.data.results;
    } catch ( e ) {
        console.log( e );
    };
};

export const getTrendings = async ( ) => {
    try {
        const response = await api.get(`/trending/movie/day?api_key=${ process.env.REACT_APP_VERCEL_ENV }&language=pt-BR&page=1`);
        return response.data.results;
    } catch ( e ) {
        console.log( e );
    };
};

export const getTopRated = async ( ) => {
    try {
        const response = await api.get(`/movie/top_rated?api_key=${ process.env.REACT_APP_VERCEL_ENV }&language=pt-BR&page=2`);
        return response.data.results;
    } catch ( e ) {
        console.log( e );
    };
};

export const getPopular = async ( ) => {
    try { 
        const response = await api.get( `/movie/popular?api_key=${ process.env.REACT_APP_VERCEL_ENV }&language=pt-BR&page=1` );
        return response.data.results;
    } catch ( e ) {
        console.log( e );
    };
};

export const getDataForMoviesPage = async ( page: number ) => {
    try { 
        const response = await api.get( `search/movie?api_key=${ process.env.REACT_APP_VERCEL_ENV }&query=a&language=pt-BR&page=${ page }&include_adult=false` );
        return response.data.results;
    } catch ( e ) {
        console.log( e );
    };
};

// movie details endpoint
export const getMovieById = async ( movieId : string ) => {
    try {
        const response = await api.get( `/movie/${ movieId }?api_key=${ process.env.REACT_APP_VERCEL_ENV }&language=pt-BR` );
        return response.data;
      } catch ( e ) {
          console.log( e );
      };
};

export const getTraillers = async ( movieId : string ) => {
    try {
        const response = await api.get( `/movie/${ movieId }/videos?api_key=${ process.env.REACT_APP_VERCEL_ENV }&language=pt-BR` );
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
      const response = await api.get( `/movie/${ movieId }/credits?api_key=${ process.env.REACT_APP_VERCEL_ENV }&language=pt-BR` );
        return response.data;
      } catch ( e ) {
          console.log( e );
      };
};

// series endpoints
export const getPopularSeries = async ( page: number ) => {
    try { 
      const response = await api.get( `/tv/popular?api_key=${ process.env.REACT_APP_VERCEL_ENV }&language=en-US&page=${ page }` );
        return response.data.results;        
    } catch ( e ) {
        console.log( e );
    };
};

export const getTopRatedSeries = async ( ) => {
    try { 
      const response = await api.get( `/tv/top_rated?api_key=${ process.env.REACT_APP_VERCEL_ENV }&language=en-US&page=1` );
        return response.data.results;        
    } catch ( e ) {
        console.log( e );
    };
};

export const getTvOnTheAirSeries = async ( ) => {
    try { 
      const response = await api.get( `/tv/on_the_air?api_key=${ process.env.REACT_APP_VERCEL_ENV }&language=en-US&page=1` );
      return response.data.results;
    } catch ( e ) {
        console.log( e );
    };
};

export const getAiringTodaySeries = async ( ) => {
    try { 
      const response = await api.get( `/tv/airing_today?api_key=${ process.env.REACT_APP_VERCEL_ENV }&language=en-US&page=1` );
      return response.data.results;
    } catch ( e ) {
        console.log( e );
    };
};

export const getDataForSeriesPage = async ( page: number ) => {
    try { 
        const response = await api.get( `search/tv?api_key=${ process.env.REACT_APP_VERCEL_ENV }&query=a&language=pt-BR&page=${ page }&include_adult=false` );
        return response.data.results;
    } catch ( e ) {
        console.log( e );
    };
};

// serie details 
export const getSerieById = async ( serieId: string ) => {
    try { 
      const response = await api.get( `/tv/${ serieId }?api_key=${ process.env.REACT_APP_VERCEL_ENV }&language=pt-BR` );
      return response.data;
    } catch ( e ) {
        console.log( e );
    };
};

export const getEpisodeGroup = async ( serieId: string, season: number ) => {
    try { 
      const response = await api.get( `/tv/${ serieId }/season/${ season }?api_key=${ process.env.REACT_APP_VERCEL_ENV }&language=pt-BR` );
      return response.data;
    } catch ( e ) {
        console.log( e );
    };
};

export const getEpisodeDetail = async ( serieId: string, season: string, episode_number: string ) => {
    try { 
      const response = await api.get( `/tv/${ serieId }/season/${ season }/episode/${ episode_number }?api_key=${ process.env.REACT_APP_VERCEL_ENV }&language=pt-BR` );
      return response.data;
    } catch ( e ) {
        console.log( e );
    };
};

export const getActorsByEpisodes = async ( serieId: string, season: number, episode_number: number ) => {
    try { 
      const response = await api.get( `/tv/${ serieId }/season/${ season }/episode/${ episode_number }/credits?api_key=${ process.env.REACT_APP_VERCEL_ENV }&language=pt-BR` );   
      return response.data;
    } catch ( e ) {
        console.log( e );
    };
};

// person endpoint
export const getPersons = async ( personId : string ) => {
    try {
      const response = await api.get( `/person/${ personId }?api_key=${ process.env.REACT_APP_VERCEL_ENV }&language=pt-BR` );
        return response.data;
      } catch ( e ) {
          console.log( e );
      };
};