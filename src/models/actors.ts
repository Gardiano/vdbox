

export default interface ActorsTypes {
    id: string
    adult?: boolean
    cast_id?: number
    character: string
    known_for_department?: string
    name: string
    original_name: string
    popularity: number

    profile_path: string
    

    // series types
    crew: [ ]
    title: string
    first_air_date: string
    release_date: string

    // person

    biography: string
    birthday: string
    deathday: string
    gender: number
    homepage: string
    imdb_id: string
    place_of_birth: string
}