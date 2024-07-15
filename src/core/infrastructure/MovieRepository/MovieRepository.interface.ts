import { MoviesResponse } from "../../domain";

export interface movieRepositoryI {
  (): {
    fetchPopularMovies: fetchMoviesI;
    fetchTopRatedMovies: fetchMoviesI;
    fetchNextReleases: fetchMoviesI;
  };
}

export interface baseFetchMoviesI {
  (url: string): Promise<MoviesResponse>;
}

export interface fetchMoviesI {
  (): Promise<MoviesResponse>;
}

export interface MovieDataDTOI {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface MoviesResponseDTOI {
  page: number;
  results: MovieDataDTOI[];
  total_pages: number;
  total_results: number;
}
