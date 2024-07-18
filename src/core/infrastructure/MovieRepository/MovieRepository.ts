import { MoviesResponse } from "../../domain";
import { IMovieRepository } from "../../domain";
import { MoviesResponseDTO } from "./MovieRepository.dto";
import { DTOtoMovieResponse } from "./MovieMapper";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_MOVIES_AUTHORIZATION}`,
  },
};
const baseUrl = process.env.REACT_APP_BASE_URL;
const fetchMovies = async (url: string): Promise<MoviesResponse> => {
  try {
    const data = await fetch(url, options);
    const response: MoviesResponseDTO = await data.json();
    const convertedResponse: MoviesResponse = DTOtoMovieResponse(response);
    return convertedResponse;
  } catch (e) {
    console.error("MovieRepository, error: --");
    throw e;
  }
};

export const MovieRepository: IMovieRepository = {
  fetchPopularMovies: (): Promise<MoviesResponse> => {
    return fetchMovies(`${baseUrl}popular?language=en-US&page=1`);
  },

  fetchTopRatedMovies: (): Promise<MoviesResponse> => {
    return fetchMovies(`${baseUrl}top_rated?language=en-US&page=1`);
  },

  fetchNextReleases: (): Promise<MoviesResponse> => {
    return fetchMovies(`${baseUrl}upcoming?language=en-US&page=1`);
  },
};
