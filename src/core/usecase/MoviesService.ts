import { MoviesResponse } from "../domain";
import { IMovieRepository } from "../domain/MovieRepository.interface";

export const MoviesService = (
  movieRepository: IMovieRepository
) => {
  const getPopularMovies =  (): Promise<MoviesResponse> => {
    return  movieRepository.fetchPopularMovies();
  };
  const getTopRatedMovies =  (): Promise<MoviesResponse> => {
    return  movieRepository.fetchTopRatedMovies();
  };
  const getNextReleases =  (): Promise<MoviesResponse> => {
    return  movieRepository.fetchNextReleases();
  };

  return {
    getTopRatedMovies,
    getPopularMovies,
    getNextReleases,
  };
};
