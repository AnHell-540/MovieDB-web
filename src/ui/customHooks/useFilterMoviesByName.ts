import { useState, ChangeEvent } from "react";
import { MovieResult } from "../../core/domain";

export const useFilterMoviesByName = (initialMovies: MovieResult[]) => {
  const [filter, setFilter] = useState<string>("");

  const filterMovies = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    setFilter(value);
  }

  const filteredMovies = initialMovies.filter((item: MovieResult) =>
    item.title.toLowerCase().includes(filter.toLowerCase())
  );

  return { filterMovies, filteredMovies };
}
