
export interface MovieResult {
  backdrop_path: string
  genres: [
    { 
      name: string
    }
  ]
  id: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  tagline: string
  runtime:string
  title: string
  vote_average: number
}

export interface MovieResponse {
  page: number
  results: MovieResult[]
  total_pages: number
  total_results: number
}