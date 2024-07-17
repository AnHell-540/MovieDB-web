import { MovieData, IFavoritesRepository } from "../../domain";

const isNumericKey = (key: string) => {
  return /^\d+$/.test(key);
};

export const FavoritesRepository: IFavoritesRepository = {
  saveToFavoritesInLocalStorage: (movie: MovieData): void => {
    try {
      const jsonData = JSON.stringify(movie);
      const key = movie.id.toString();
      localStorage.setItem(key, jsonData);
      console.log(`Movie saved to local storage with key ${key}`);
    } catch (e) {
      console.error("Error - saveToFavoritesInLocalStorage: -- ", e);
    }
  },

  getFavoritesFromLocalStorage: (): MovieData[] => {
    const movies: MovieData[] = [];
    if (localStorage.length) {
      try {
        const keys = Object.keys(localStorage).filter(isNumericKey);
        keys.map((k) => {
          const movie = localStorage.getItem(k);
          if (movie) movies.push(JSON.parse(movie) as MovieData);
        });
      } catch (e) {
        console.error("Error - getFavoritesFromLocalStorage: --", e);
      }
    }
    return movies;
  },

  deleteFavoriteFromLocalStorage: (movie: MovieData) => {
    try {
      const keyToDelete = movie.id.toString();
      if (localStorage.getItem(keyToDelete)) {
        localStorage.removeItem(keyToDelete);
        console.log(keyToDelete, " movie deleted from Local Storage");
      }
    } catch (e) {
      console.error("Error - deleteFavoriteFromLocalStorage: --", e);
    }
  },

  isMovieInLocalStorage: (id: string) => {
    const exist = localStorage.getItem(id);
    return exist !== null;
  },
};
