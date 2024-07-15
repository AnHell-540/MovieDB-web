import { MovieDetailRepository } from "../infrastructure";
import { MovieDetail, serviceGetMovieDetail, movieDetailService } from "../domain";

export const MovieDetailService: movieDetailService = (
  movieDetailRepository: ReturnType<typeof MovieDetailRepository>
) => {
  const getMovieDetail: serviceGetMovieDetail = async (id: string): Promise<MovieDetail> => {
    return await movieDetailRepository.fetchMovieDetail(id);
  };

  return { getMovieDetail };
};
