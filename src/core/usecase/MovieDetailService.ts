import { MovieDetail } from "../domain";
import { IMovieDetailRepository } from "../domain/MovieDetailRepository.interface";

export const MovieDetailService = (
  movieDetailRepository: IMovieDetailRepository
) => {
  const getMovieDetail = async (id: string): Promise<MovieDetail> => {
    return await movieDetailRepository.fetchMovieDetail(id);
  };

  return { getMovieDetail };
};
