import { MovieData, IFavoritesRepository } from "../../domain";

const getFavoriteMovies = () => {
  const existingFavoritesSTR = localStorage.getItem("favoriteMovies");
  let favoriteMovies: MovieData[] = [];
  if (existingFavoritesSTR) {
    favoriteMovies = JSON.parse(existingFavoritesSTR);
  }
  return favoriteMovies
}

export const FavoritesRepository: IFavoritesRepository = {
  saveToFavoritesInLocalStorage: (movie: MovieData): void => {
    try {
      const favoriteMovies = getFavoriteMovies()

      favoriteMovies.push(movie);
      const favoriteMoviesString = JSON.stringify(favoriteMovies);
      localStorage.setItem("favoriteMovies", favoriteMoviesString);
    } catch (error) {
      console.error("Error - saveToFavoritesInLocalStorage: -- ", error);
    }
  },

  getFavoritesFromLocalStorage: (): MovieData[] => {
    try {
      const favoriteMovies = getFavoriteMovies()
      return favoriteMovies;
    } catch (error) {
      console.error("Error - getFavoritesFromLocalStorage: -- ", error);
      return []
    }
  },

  deleteFavoriteFromLocalStorage: (movie: MovieData): void => {
    try {
      const favoriteMovies = getFavoriteMovies();
      const index = favoriteMovies.findIndex((m) => m.id === movie.id);
      if (index!== -1) {
        favoriteMovies.splice(index, 1);
        const favoriteMoviesString = JSON.stringify(favoriteMovies);
        localStorage.setItem("favoriteMovies", favoriteMoviesString);
      }
    } catch (error) {
      console.error("Error - deleteFavoriteFromLocalStorage: -- ", error);
    }
  },

  isMovieInLocalStorage: (movie: MovieData): boolean => {
    try {
      const favoriteMovies = getFavoriteMovies();
      return favoriteMovies.some((m) => m.id === movie.id);
    } catch (error) {
      console.error("Error - isMovieInLocalStorage: -- ", error);
      return false;
    }
  },
};
