import { useEffect, useState } from "react";
import { MovieData } from "../../core/domain";
import { FavoritesService } from "../../core/usecase/FavoritesService";
import { FavoritesRepository } from "../../core/infrastructure";
import { getFavoriteMoviesHookType } from "../../core/domain/FavoriteRepository.interface";

const favoritesRepository = FavoritesRepository;
const { getFavoriteMovies } = FavoritesService(favoritesRepository);

export const useGetFavoriteMovies: getFavoriteMoviesHookType = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getFavoriteMoviesHook = () => {
    try {
      setLoading(true);
      const favMovies = getFavoriteMovies();
      setMovies(favMovies);
    } catch (e) {
      console.error("Error - useGetMoviesFromLocalStorage: --", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFavoriteMoviesHook();
  }, []);

  return { movies, setMovies, loading };
};
