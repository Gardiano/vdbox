

import { getSerieById, getEpisodeGroup } from '../../services/services';

export const SerieByIdController = async ( movieId : string ) => {
  const data = await getSerieById( movieId );
    return data;
};

export const EpisodeGroupsController = async ( movieId : string, season: number ) => {
    const data = await getEpisodeGroup( movieId, season );
      return data;
  };