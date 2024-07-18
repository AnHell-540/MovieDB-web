import { MovieDetail } from "../../../core/domain";

export interface useGetMovieDetailHookType {
  (fetchFunction: () => Promise<MovieDetail>): {
    movie: MovieDetail;
  };
}