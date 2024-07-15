import {
  MovieData,
  MoviesResponse,
} from "../../domain";
import { MoviesResponseDTOI, MovieDataDTOI } from "./MovieRepository.interface";

interface MovieDataMapper {
  (moviesData: MovieDataDTOI): MovieData;
}
interface MovieResponseMapper {
  (moviesResponse: MoviesResponseDTOI): MoviesResponse;
}

export const DTOtoMovieData: MovieDataMapper = (movieDataDTO: MovieDataDTOI) => {
  return {
    id: movieDataDTO.id,
    poster_path: movieDataDTO.poster_path,
    title: movieDataDTO.title,
    vote_average: movieDataDTO.vote_average,
  };
};
export const DTOtoMovieResponse: MovieResponseMapper = (
  movieResponseDTO: MoviesResponseDTOI
) => {
  return {
    results: movieResponseDTO.results.map(DTOtoMovieData),
  };
};
