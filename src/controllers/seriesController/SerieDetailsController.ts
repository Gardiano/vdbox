

import { getSerieById, getEpisodeGroup, getActorsByEpisodes } from '../../services/services';


export const SerieByIdController = async ( serieId : string ) => {
  const data = await getSerieById( serieId );
    return data;
};

export const EpisodeGroupsController = async ( serieId : string, season: number ) => {
    const data = await getEpisodeGroup( serieId, season );
      return data;
};

export const getActorsByEpisodesController = async ( serieId : string, season: number, season_number: number ) => {
  const data = await getActorsByEpisodes( serieId, season, season_number );
    return data;
};

