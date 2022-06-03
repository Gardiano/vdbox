

import api from '../services/connect';

  const GK = process.env.REACT_APP_MAK;

  export const GetMovieById: any = async ( movieId : string ) => {
    try {
        const response = await api.get( `/movie/${ movieId }?api_key=${ GK }&language=pt-BR` );            
        console.log( 'movie detail',response.data );    
        return response.data;
      } catch ( e ) {
          console.log( e );
      };
  };

  export const GetTraillers: any = async ( movieId : string ) => {
    try {
        const response = await api.get( `/movie/${ movieId }/videos?api_key=${ GK }&language=pt-BR` );
            const traillerKey = response.data.results.map( ( traillerKey: any ) => {
                return traillerKey.key;
            });
          return traillerKey;
      } catch ( e ) {
          console.log( e );
      };
  }

  export const GetActors: any = async ( movieId : string ) => {
    try {
      const response = await api.get( `/movie/${ movieId }/credits?api_key=${ GK }&language=pt-BR` );

        let getFirstTenActors: any [ ] = [ ];

        for( let i = 0; i <= 9; i ++ ) {
          getFirstTenActors.push( response.data.cast [ i ] );
        };

        return getFirstTenActors;

      } catch ( e ) {
          console.log( e );
      };
  }


