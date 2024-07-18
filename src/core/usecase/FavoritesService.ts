import { MovieData } from "../domain";
import { IFavoritesRepository } from "../domain/FavoriteRepository.interface";

export const FavoritesService = (movieRepository: IFavoritesRepository) => {
  const saveMovieToFavorites = (movie: MovieData): void => {
    try {
      movieRepository.saveToFavoritesInLocalStorage(movie);
    } catch (error) {
      console.error("Error saving movie to favorites: --", error);
      throw error;
    }
  };

  const getFavoriteMovies = (): MovieData[] => {
    try {
      const movies = movieRepository.getFavoritesFromLocalStorage();
      return movies;
    } catch (error) {
      console.error("Error getting favorite movies: --", error);
      throw error;
    }
  };

  const deleteFromFavorites = (movie: MovieData): void => {
    try {
      movieRepository.deleteFavoriteFromLocalStorage(movie);
    } catch (error) {
      console.error("Error deleting movie from favorites: --", error);
      throw error;
    }
  };

  const isMovieInFavorites = (movie: MovieData): boolean => {
    try {
      const isInFavorites = movieRepository.isMovieInLocalStorage(movie);
      return isInFavorites;
    } catch (error) {
      console.log("Error trying to find the movie in favorites: --", error);
      throw error;
    }
  };

  return {
    saveMovieToFavorites,
    getFavoriteMovies,
    deleteFromFavorites,
    isMovieInFavorites,
  };
};
