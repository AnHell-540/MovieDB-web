import { MovieCard } from "../MovieCard/MovieCard";
import style from "./MovieList.module.css";
import { MovieData } from "../../../core/domain";

interface MovieListProps {
  movies: MovieData[];
  loading: boolean;
}

export const MovieList = ({ movies, loading }: MovieListProps) => {
  return loading === true ? (
    <span className={style.loader} data-testid="loader"></span>
  ) : (
    <div role="list" className={style.movie_list_container}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
