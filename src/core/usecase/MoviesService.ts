import { MoviesResponse, moviesService, serviceGetMovies } from "../domain";
import { MovieRepository } from "../infrastructure";

export const MoviesService: moviesService = (
  movieRepository: ReturnType<typeof MovieRepository>
) => {
  const getPopularMovies: serviceGetMovies =  (): Promise<MoviesResponse> => {
    return  movieRepository.fetchPopularMovies();
  };
  const getTopRatedMovies: serviceGetMovies =  (): Promise<MoviesResponse> => {
    return  movieRepository.fetchTopRatedMovies();
  };
  const getNextReleases: serviceGetMovies =  (): Promise<MoviesResponse> => {
    return  movieRepository.fetchNextReleases();
  };

  return {
    getTopRatedMovies,
    getPopularMovies,
    getNextReleases,
  };
};
