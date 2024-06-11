import { useEffect, useState } from "react";
import { MovieResult } from "../../core/domain/Movies.interface";

export const useGetMovieDetail = (fetchFunction: () => Promise<MovieResult>) => {
  
  const emptyMovie = {
    backdrop_path: "",
    id: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    release_date: "",
    title: "",
    vote_average: 0,
  };
  const [movie, setMovie] = useState<MovieResult>(emptyMovie);

  const getMovie = async (): Promise<MovieResult> => {
    try {
      const response: MovieResult = await fetchFunction()
      const movie = await response
      setMovie(movie);
      return response
    } catch (e) {
      console.error(e);
      throw new Error("Error fetch.");
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return {movie}
};
