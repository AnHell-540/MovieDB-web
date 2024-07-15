import { useEffect, useState } from "react";
import { MovieDetail, useGetMovieDetailHookType, getMovieDetail } from "../../core/domain";

export const useGetMovieDetail: useGetMovieDetailHookType = (fetchFunction: () => Promise<MovieDetail>) => {
  
  const emptyMovie: MovieDetail = {
    backdrop_path: "",
    genres:[''],
    overview: "",
    poster_path: "",
    release_date: "",
    runtime: 0,
    tagline: "",
    title: "",
    vote_average: 0,
    id: 0
  };
  const [movie, setMovie] = useState<MovieDetail>(emptyMovie);

  const getMovieDetail: getMovieDetail = async (): Promise<MovieDetail> => {
    try {
      const response: MovieDetail = await fetchFunction()
      const movie = await response
      setMovie(movie);
      return response
    } catch (e) {
      console.error(e);
      throw new Error("Error fetch.");
    }
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  return {movie}
};
