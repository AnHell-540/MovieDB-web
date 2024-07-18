import { FavoritesRepository } from "../../core/infrastructure";
import { FavoritesService } from "../../core/usecase";
import { MovieDetail } from "../../core/domain";
import { useState, useEffect } from "react";

export const useIsFavorite = (movie: MovieDetail) => {
  const favoritesRepository = FavoritesRepository;
  const { isMovieInFavorites } = FavoritesService(favoritesRepository);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const checkIfMovieIsFavorite = async () => {
      const isFavorite = await isMovieInFavorites(movie);
      setIsFavorite(isFavorite);
    };
    checkIfMovieIsFavorite();
  }, [movie]);

  return { isFavorite, setIsFavorite, favoritesRepository };
};
