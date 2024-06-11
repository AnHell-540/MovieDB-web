import { MovieResponse } from "../domain/Movies.interface";

export const MovieRepository = () => {

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzQzYjk5MmRlZmQ2ZWQyOGRlNzMwZDg1ZDJkNjM0OCIsInN1YiI6IjY2NTViNWNkMTVmYTJiNDYzODcwNzFjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eEcz4YQRK55zwQhanxNQ_PophVOrHoXCkuCnAetGPOo",
    },
  };

  const fetchMovies = async (url: string): Promise<MovieResponse> => {
    try {
      const data = await fetch(url, options);
      const response = await data.json();
      return response as MovieResponse;
    } catch (e) {
      console.error(e);
      throw new Error("Error fetch.");
    }
  };

  const baseUrl = process.env.REACT_APP_BASE_URL;

  const fetchPopularMovies = (): Promise<MovieResponse> => {
    return fetchMovies(`${baseUrl}popular?language=en-US&page=1`);
  };

  const fetchTopRatedMovies = (): Promise<MovieResponse> => {
    return fetchMovies(`${baseUrl}top_rated?language=en-US&page=1`);
  };

  const fetchNextReleases = (): Promise<MovieResponse> => {
    return fetchMovies(`${baseUrl}upcoming?language=en-US&page=1`);
  };

  return {
    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchNextReleases,
  };
};
