import { MovieRepository } from "../infrastructure";

export interface MovieData {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
}
export interface MoviesResponse {
  results: MovieData[];
}

export interface moviesService {
  (movieRepository: ReturnType<typeof MovieRepository>): {
    getTopRatedMovies: serviceGetMovies;
    getPopularMovies: serviceGetMovies;
    getNextReleases: serviceGetMovies;
  };
}
export interface serviceGetMovies {
  (): Promise<MoviesResponse>;
}

export interface useGetMoviesHookType {
  (fetchFunction: () => Promise<MoviesResponse>): {
    movies: MovieData[];
    loading: boolean;
  };
}
export interface hookGetMovies {
  (): Promise<MovieData[]>;
}
