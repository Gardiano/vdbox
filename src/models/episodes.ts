
export default interface EpisodesTypes {
    id: number
    _id: string
    name: string
    season_number: number
    
    map?: any
    poster_path: string
    overview: string
    still_path?: string

    episodes?: [ ]

    seasons?: any

    episode_number?: number
}