
export default interface movieTypes {
    id: string,
  
    overview?: string,
    title: string,
    runtime?: any,

    genres?: [],
    
    name?: string,

    tagline?: string

    poster_path?: string,
    backdrop_path?: string,

    vote_count?: number,
    vote_average?: number,
    populatiry?: number,

    release_date: string;
  }