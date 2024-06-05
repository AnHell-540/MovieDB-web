import { useState, ChangeEvent } from "react";
import { MovieResult } from "../../domain/Movies.interface";

export function useFilterMoviesByName(initialMovies: MovieResult[]) {
  const [filter, setFilter] = useState<string>("");

  function filterMovies({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void {
    setFilter(value);
  }

  const filteredMovies = initialMovies.filter((item: MovieResult) =>
    item.title.toLowerCase().includes(filter.toLowerCase())
  );

  return { filterMovies, filteredMovies };
}
