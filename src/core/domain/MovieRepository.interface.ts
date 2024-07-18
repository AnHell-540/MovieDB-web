import { MoviesResponse } from "./Movies.interface";

export interface IMovieRepository {
    fetchPopularMovies: FetchMovies;
    fetchTopRatedMovies: FetchMovies;
    fetchNextReleases: FetchMovies;
}

interface FetchMovies {
  (): Promise<MoviesResponse>;
}
