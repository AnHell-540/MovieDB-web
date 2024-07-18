export interface MovieData {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
}
export interface MoviesResponse {
  results: MovieData[];
}
