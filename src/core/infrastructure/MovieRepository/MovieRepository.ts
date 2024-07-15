import { MoviesResponse } from "../../domain";
import {
  movieRepositoryI,
  baseFetchMoviesI,
  fetchMoviesI,
  MoviesResponseDTOI
} from "./MovieRepository.interface";
import { DTOtoMovieResponse } from "./MovieMapper";

export const MovieRepository: movieRepositoryI = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${process.env.REACT_APP_MOVIES_AUTHORIZATION}`
    },
  };

  const fetchMovies: baseFetchMoviesI = async (
    url: string
  ): Promise<MoviesResponse> => {
    try {
      const data = await fetch(url, options);
      const response: MoviesResponseDTOI = await data.json();
      return DTOtoMovieResponse(response);
    } catch (e) {
      console.error('MovieRepository, error: --');
      throw e
    }
  };

  const baseUrl = process.env.REACT_APP_BASE_URL;

  const fetchPopularMovies: fetchMoviesI = (): Promise<MoviesResponse> => {
    return fetchMovies(`${baseUrl}popular?language=en-US&page=1`);
  };

  const fetchTopRatedMovies: fetchMoviesI = (): Promise<MoviesResponse> => {
    return fetchMovies(`${baseUrl}top_rated?language=en-US&page=1`);
  };

  const fetchNextReleases: fetchMoviesI = (): Promise<MoviesResponse> => {
    return fetchMovies(`${baseUrl}upcoming?language=en-US&page=1`);
  };

  return {
    fetchPopularMovies: fetchPopularMovies,
    fetchTopRatedMovies: fetchTopRatedMovies,
    fetchNextReleases: fetchNextReleases,
  };
};
