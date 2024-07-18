import { MovieData } from "./Movies.interface";

export interface IFavoritesRepository {
  saveToFavoritesInLocalStorage: (movie: MovieData) => void;
  getFavoritesFromLocalStorage: () => MovieData[];
  deleteFavoriteFromLocalStorage: (movie: MovieData) => void;
  isMovieInLocalStorage: (movie: MovieData) => boolean;
}

export interface getFavoriteMoviesHookType {
  () : {movies: MovieData[],setMovies: React.Dispatch<React.SetStateAction<MovieData[]>>, loading: boolean}
}