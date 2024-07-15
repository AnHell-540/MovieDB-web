import { MovieDetail } from "../../domain";
import {
  movieDetailRepository,
  fetchMovieDetail,
  MovieDetailDTO,
} from "./MovieDetailRepository.interface";
import { DTOtoMovieDetail } from "./MovieDetailMapper";

export const MovieDetailRepository: movieDetailRepository = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_MOVIE_DETAIL_AUTHORIZATION}`,
    },
  };
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const fetchMovieDetail: fetchMovieDetail = async (
    id: string
  ): Promise<MovieDetail> => {
    try {
      const data = await fetch(`${baseUrl}${id}?language=en-US`, options);
      const response: MovieDetailDTO = await data.json();
      return DTOtoMovieDetail(response);
    } catch (e) {
      console.error(e);
      throw new Error("Error fetch.");
    }
  };

  return { fetchMovieDetail: fetchMovieDetail };
};
