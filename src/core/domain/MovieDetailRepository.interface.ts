import { MovieDetail } from ".";

export interface IMovieDetailRepository {
  fetchMovieDetail: fetchMovieDetail 
}
interface fetchMovieDetail {
  (id: string): Promise<MovieDetail>;
}


