
export interface MovieResult {
  backdrop_path: string
  id: number
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  vote_average: number
  vote_count: number
}

export interface MovieResponse {
  page: number
  results: MovieResult[]
  total_pages: number
  total_results: number
}