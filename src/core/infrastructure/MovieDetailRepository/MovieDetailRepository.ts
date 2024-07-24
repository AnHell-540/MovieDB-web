import { MovieDetail } from "../../domain";
import { IMovieDetailRepository } from "../../domain";
import { MovieDetailDTO } from "./MovieDetail.dto";
import { DTOtoMovieDetail } from "./MovieDetailMapper";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const MovieDetailRepository: IMovieDetailRepository = {
  fetchMovieDetail: async (id: string): Promise<MovieDetail> => {
    try {
      const data = await fetch(
        `${baseUrl}${id}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const response: MovieDetailDTO = await data.json();
      const convertedResponse: MovieDetail = DTOtoMovieDetail(response);
      return convertedResponse;
    } catch (e) {
      console.error(e);
      throw new Error("Error fetch.");
    }
  },
};
