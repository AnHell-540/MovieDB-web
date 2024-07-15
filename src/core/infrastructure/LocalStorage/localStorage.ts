import { MovieData } from "../../domain";
import {
  deleteFromLocalStorage,
  getFromLocalStorage,
  MovieInLocalStorage,
  saveInLocalStorage,
} from "../../domain/localStorage.interface";

export const saveToFavoritesInLocalStorage: saveInLocalStorage = (movie) => {
  try {
    const jsonData = JSON.stringify(movie);
    const key = movie.id.toString();
    localStorage.setItem(key, jsonData);
    console.log(`Movie saved to local storage with key ${key}`);
  } catch (e) {
    console.error("Error - saveToFavoritesInLocalStorage: -- ", e);
  }
};

const isNumericKey = (key: string) => {
  return /^\d+$/.test(key);
};

export const getFavoritesFromLocalStorage: getFromLocalStorage = () => {
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
};

export const deleteFavoriteFromLocalStorage: deleteFromLocalStorage = (
  movie
) => {
  try {
    const keyToDelete = movie.id.toString();
    if (localStorage.getItem(keyToDelete)) {
      localStorage.removeItem(keyToDelete);
      console.log(keyToDelete, " movie deleted from Local Storage");
    }
  } catch (e) {
    console.error("Error - deleteFavoriteFromLocalStorage: --", e);
  }
};

export const isMovieInLocalStorage: MovieInLocalStorage = (id: string) => {
  const exist = localStorage.getItem(id);
  return exist !== null;
};
