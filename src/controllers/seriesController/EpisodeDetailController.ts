
import { getEpisodeDetail } from "../../services/services";

export const EpisodeDetailController = async ( serieId : string, season: string, episode_number: string ) => {
    const data = await getEpisodeDetail( serieId, season, episode_number );
    return data;
  };