import { MovieDetailRepository } from "../infrastructure";

export interface MovieDetail {
  backdrop_path: string;
  genres: string[];
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  tagline: string;
  title: string;
  vote_average: number;
  id: number
}

export interface movieDetailService {
  (movieDetailRepository: ReturnType<typeof MovieDetailRepository>): {
    getMovieDetail: serviceGetMovieDetail;
  };
}
export interface serviceGetMovieDetail {
  (id: string): Promise<MovieDetail>;
}

export interface useGetMovieDetailHookType {
  (fetchFunction: () => Promise<MovieDetail>): {
    movie: MovieDetail;
  };
}
export interface getMovieDetail {
  (): Promise<MovieDetail>;
}
