import { MovieResponse, MovieResult } from "../../core/domain/Movies.interface";
import { useEffect, useState } from "react";

export const useGetMovies = (fetchFunction: () => Promise<MovieResponse>) => {
  const [movies, setMovies] = useState<MovieResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false)

  const getMovies = async () => {
    try {
      setLoading(true)
      const response: MovieResponse = await fetchFunction()
      const movieList = response.results;
      setMovies(movieList);
    } catch (e) {
      console.error(e);
      throw new Error("Error");
    } finally {
      setLoading(false)
    }
    
  };

  useEffect(() => {
    getMovies();
  }, [] );

  return {movies, loading} ;
};
