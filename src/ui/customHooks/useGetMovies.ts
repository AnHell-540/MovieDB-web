import { MoviesResponse, MovieData, useGetMoviesHookType, hookGetMovies} from "../../core/domain";
import { useEffect, useState } from "react";

export const useGetMovies: useGetMoviesHookType = (fetchFunction: () => Promise<MoviesResponse>) => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [loading, setLoading] = useState<boolean>(false)

  const getMovies: hookGetMovies = async () => {
    try {
      setLoading(true)
      const response: MoviesResponse = await fetchFunction()
      const movieList = response.results;
      setMovies(movieList);
      return movieList
    } catch (e) {
      console.error('useGetMovies/getMovies - Error: --');
      throw e
    } finally {
      setLoading(false)
    }
    
  };

  useEffect(() => {
    getMovies();
  }, [] );

  return {movies, loading} ;
};
