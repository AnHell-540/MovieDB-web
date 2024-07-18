import { MovieData, MoviesResponse } from "../../../core/domain";

export interface useGetMoviesHookType {
  (fetchFunction: () => Promise<MoviesResponse>): {
    movies: MovieData[];
    loading: boolean;
  };
}
