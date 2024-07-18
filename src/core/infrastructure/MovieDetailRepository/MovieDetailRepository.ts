import { MovieDetail } from "../../domain";
import { IMovieDetailRepository } from "../../domain";
import { MovieDetailDTO } from "./MovieDetail.dto";
import { DTOtoMovieDetail } from "./MovieDetailMapper";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_MOVIE_DETAIL_AUTHORIZATION}`,
  },
};
const baseUrl = process.env.REACT_APP_BASE_URL;

export const MovieDetailRepository: IMovieDetailRepository = {
  fetchMovieDetail: async (id: string): Promise<MovieDetail> => {
    try {
      const data = await fetch(`${baseUrl}${id}?language=en-US`, options);
      const response: MovieDetailDTO = await data.json();
      const convertedResponse: MovieDetail = DTOtoMovieDetail(response);
      return convertedResponse;
    } catch (e) {
      console.error(e);
      throw new Error("Error fetch.");
    }
  },
};
