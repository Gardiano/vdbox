import ActorsTypes from "./actors"
import EpisodesTypes from "./episodes"

export default interface movieTypes {
  id?: string

  overview?: string

  title?: string
  serie_name?: string
  name?: string

  runtime?: any

  genres?: [ ],

  tagline?: string

  poster_path?: string
  backdrop_path?: string

  vote_count?: number
  vote_average?: number | any
  populatiry?: number

  first_air_date?: string
  release_date?: string

  number_of_seasons?: number
  seasons?: [ ]
  season_number?: number

  still_path?: string
}