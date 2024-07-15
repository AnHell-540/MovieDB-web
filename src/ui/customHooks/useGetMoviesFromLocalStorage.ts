import { useEffect, useState } from "react";
import { getFavoritesFromLocalStorage } from "../../core/infrastructure";
import { MovieData } from "../../core/domain";
import { getFavoriteMoviesHookType } from "../../core/domain/localStorage.interface";

export const useGetMoviesFromLocalStorage: getFavoriteMoviesHookType = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getFavoriteMovies = async () => {
    try {
      setLoading(true);
      const favMovies = getFavoritesFromLocalStorage();
      setMovies(favMovies)
    } catch (e) {
      console.error("Error - useGetMoviesFromLocalStorage: --", e);

    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getFavoriteMovies()
  }, [])

  return {movies, setMovies, loading}
};
