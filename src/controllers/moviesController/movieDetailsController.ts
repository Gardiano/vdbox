
  import { getMovieById, getTraillers, getActors } from '../../services/services';

  export const MovieByIdController = async ( movieId : string ) => {
    const data = await getMovieById( movieId );
      return data;
  };

  export const TraillersController = async ( movieId : string ) => {
    const data = await getTraillers( movieId );
      return data;
  };

  export const GetActorsController = async ( movieId : string ) => {
    const data = await getActors( movieId );

    let getFirstTenActors: any [ ] = [ ];

    for( let i = 0; i <= 9; i ++ ) {
      getFirstTenActors.push( data.cast [ i ] );
    };

    return getFirstTenActors;
  };


