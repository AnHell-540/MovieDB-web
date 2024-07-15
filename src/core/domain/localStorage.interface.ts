import { MovieData } from "./Movies.interface";

export interface saveInLocalStorage {
  (movie: MovieData): void;
}

export interface getFromLocalStorage {
  (): MovieData[];
}

export interface deleteFromLocalStorage {
  (movie: MovieData): void;
}

export interface MovieInLocalStorage {
  (id: string) : boolean
}

export interface getFavoriteMoviesHookType {
  () : {movies: MovieData[],setMovies: React.Dispatch<React.SetStateAction<MovieData[]>>, loading: boolean}
}