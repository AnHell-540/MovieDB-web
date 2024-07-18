import { MoviesResponse, MovieData } from "../../../core/domain";
import { useGetMoviesHookType } from "./useGetMovies.interface";
import { useEffect, useState } from "react";

export const useGetMovies: useGetMoviesHookType = (
  fetchFunction: () => Promise<MoviesResponse>
) => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getMovies = async () => {
    try {
      setLoading(true);
      const response: MoviesResponse = await fetchFunction();
      const movieList = response.results;
      setMovies(movieList);
      return movieList;
    } catch (e) {
      console.error("useGetMovies/getMovies - Error: -- ", e);
      return [];
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return { movies, loading };
};
