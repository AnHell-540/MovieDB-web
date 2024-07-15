import { MovieDetail } from "../../domain";
import { MovieDetailDTO } from "./MovieDetailRepository.interface";

interface MovieDetailMapper {
  (movieDetail: MovieDetailDTO): MovieDetail;
}
export const DTOtoMovieDetail: MovieDetailMapper = (
  movieDetailDTO: MovieDetailDTO
) => {
  return {
    backdrop_path: movieDetailDTO.backdrop_path,
    genres: movieDetailDTO.genres.map((genre) => genre.name),
    overview: movieDetailDTO.overview,
    poster_path: movieDetailDTO.poster_path,
    release_date: movieDetailDTO.release_date,
    runtime: movieDetailDTO.runtime,
    tagline: movieDetailDTO.tagline,
    title: movieDetailDTO.title,
    vote_average: movieDetailDTO.vote_average,
    id: movieDetailDTO.id
  };
};
