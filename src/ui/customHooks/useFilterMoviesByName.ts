import { useState, ChangeEvent } from "react";
import { MovieData } from "../../core/domain";

interface IfilterMovies {
  ({ target: { value }, }: ChangeEvent<HTMLInputElement>): void
}

export const useFilterMoviesByName = (initialMovies: MovieData[]) => {
  const [filter, setFilter] = useState<string>('');

  const filterMovies:IfilterMovies = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    setFilter(value);
  }


  const filteredMovies = initialMovies.filter((item: MovieData) => {
    const title = item.title || ''
    return title.toLowerCase().includes(filter.toLowerCase())
  }
  );

  return { filterMovies, filteredMovies };
}

