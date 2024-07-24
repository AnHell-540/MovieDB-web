import { MoviesResponse } from "../../domain";
import { IMovieRepository } from "../../domain";
import { MoviesResponseDTO } from "./MovieRepository.dto";
import { DTOtoMovieResponse } from "./MovieMapper";

const baseUrl = process.env.REACT_APP_BASE_URL;
const fetchMovies = async (url: string): Promise<MoviesResponse> => {
  try {
    const data = await fetch(url);

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
    return fetchMovies(
      `${baseUrl}popular?api_key=${process.env.REACT_APP_API_KEY}`
    );
  },

  fetchTopRatedMovies: (): Promise<MoviesResponse> => {
    return fetchMovies(
      `${baseUrl}top_rated?api_key=${process.env.REACT_APP_API_KEY}`
    );
  },

  fetchNextReleases: (): Promise<MoviesResponse> => {
    return fetchMovies(
      `${baseUrl}upcoming?api_key=${process.env.REACT_APP_API_KEY}`
    );
  },
};
