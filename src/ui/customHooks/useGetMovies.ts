import { MovieRepository } from "../../infrastructure/MovieRepository";
import { MoviesService } from "../../usecase/MoviesService";
import { MovieResponse, MovieResult } from "../../domain/Movies.interface";
import { useEffect, useState } from "react";

export const useGetMovies = (fetchFunction: () => Promise<MovieResponse>) => {
  // const movieRepository = MovieRepository();
  // const moviesService = MoviesService(movieRepository);
  const [movies, setMovies] = useState<MovieResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false)

  const esperar = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const getMovies = async () => {
    try {
      setLoading(true)
      // await esperar(500)
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
  }, []);

  return {movies, loading} ;
};
