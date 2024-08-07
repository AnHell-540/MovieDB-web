import { MovieData, MoviesResponse } from "../../domain";
import { MoviesResponseDTO, MovieDataDTO } from "./MovieRepository.dto";

interface MovieDataMapper {
  (moviesData: MovieDataDTO): MovieData;
}
interface MovieResponseMapper {
  (moviesResponse: MoviesResponseDTO): MoviesResponse;
}

const DTOtoMovieData: MovieDataMapper = (movieDataDTO: MovieDataDTO) => {
  return {
    id: movieDataDTO.id,
    poster_path: movieDataDTO.poster_path,
    title: movieDataDTO.title,
    vote_average: movieDataDTO.vote_average,
  };
};
export const DTOtoMovieResponse: MovieResponseMapper = (
  movieResponseDTO: MoviesResponseDTO
) => {
  if (!movieResponseDTO || !movieResponseDTO.results) {
    console.log("Mapper error");
    return { results: [] };
  }
  const results = movieResponseDTO.results.map(DTOtoMovieData);
  return {
    results: results,
  };
};
