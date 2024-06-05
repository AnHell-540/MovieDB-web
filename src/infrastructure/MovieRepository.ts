import { useState } from "react";
import { MovieResponse } from "../domain/Movies.interface";

export const MovieRepository = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorFetch, setErrorFetch] = useState<boolean>(false);

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
      setLoading(true);
      const data = await fetch(url, options);
      const response = await data.json();
      setLoading(false);
      setErrorFetch(false);
      return response as MovieResponse;
    } catch (e) {
      setLoading(false);
      setErrorFetch(true);
      console.error(e);
      throw new Error("Error fetch.");
    }
  };

  const fetchPopularMovies = (): Promise<MovieResponse> => {
    return fetchMovies("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1");
  };

  const fetchTopRatedMovies = (): Promise<MovieResponse> => {
    return fetchMovies("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1");
  };

  const fetchNextReleases = (): Promise<MovieResponse> => {
    return fetchMovies("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1");
  };

  const fetchMovie = (id: number): Promise<MovieResponse> => {
    return fetchMovies(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);
  };

  return {
    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchNextReleases,
    fetchMovie,
    loading,
    errorFetch,
  };
};
