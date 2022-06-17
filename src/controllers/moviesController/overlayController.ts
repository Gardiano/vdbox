
  import { getMovieToOverlayComponent } from '../../services/services';

  export const OverLayController = async ( ) => {
    const data = await getMovieToOverlayComponent( );
      return data;
  };