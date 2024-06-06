import { MovieRepository } from "../../infrastructure/MovieRepository";
import { MoviesService } from "../../usecase/MoviesService";
import { MovieResponse, MovieResult } from "../../domain/Movies.interface";
import { useEffect, useState } from "react";

export const useGetMovies = () => {
  const movieRepository = MovieRepository();
  const moviesService = MoviesService(movieRepository);
  const [movies, setMovies] = useState<MovieResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false)

  const getMovies = async () => {
    try {
      setLoading(true)
      setTimeout(()=> console.log('2secs'), 2000)
      const response: MovieResponse = await moviesService.getPopularMovies();
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

  return {movies, setMovies, loading} ;
};
