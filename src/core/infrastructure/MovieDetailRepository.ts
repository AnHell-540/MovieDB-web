import { MovieResult } from "../domain/Movies.interface";

export const MovieDetailRepository = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
    },
  };
  const baseUrl = process.env.REACT_APP_BASE_URL;
  
  const fetchMovieDetail = async (id: string): Promise<MovieResult> => {
    try {
      const data = await fetch(`${baseUrl}${id}?language=en-US`, options);
      const response: MovieResult = await data.json();
      return response;
    } catch (e) {
      console.error(e);
      throw new Error("Error fetch.");
    }
  };

  return { fetchMovieDetail };
};
