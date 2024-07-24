import { ChangeEvent, ReactNode, useEffect } from "react";
import { MovieData } from "../../../core/domain";
import { MovieList } from "../MovieList/MovieList";
import { TitleAndInput } from "../TitleAndInput/TitleAndInput";
import style from "./BaseContainer.module.css";
import React from "react";
import { useLocation } from "react-router-dom";

interface BaseComponenteProps {
  filterMovies: ({ target: { value } }: ChangeEvent<HTMLInputElement>) => void;
  filteredMovies: MovieData[];
  loading: boolean;
  title: string;
  children?: ReactNode;
}

export const BaseContainer = ({
  filterMovies,
  filteredMovies,
  loading,
  title,
  children,
}: BaseComponenteProps) => {
  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  return (
    <div className={style.container}>
      <TitleAndInput title={title} onChange={filterMovies} />

      <main>
        <div className={style.movie_count}>
          <p>{filteredMovies.length} items</p>
        </div>
        <>
          {React.Children.count(children) > 0 ? (
            children
          ) : (
            <MovieList loading={loading} movies={filteredMovies} />
          )}
        </>
      </main>
    </div>
  );
};
