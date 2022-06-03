
export default interface traillerTypes {
    id: number
    results: [
        id: number,
        iso_639_1: string,
        key: string,
        name: string,
        official: boolean,
        published_at?: string,
        site?: string,        
        type?: string,
        size?: number
    ]
  }