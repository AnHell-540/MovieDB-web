
import { MovieCard } from "./MovieCard/MovieCard";
import style from '../views/Home/Home.module.css'
import { MovieData } from "../../core/domain";

interface MovieListProps {
  movies: MovieData[]
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div role="list" className={style.movie_list_container}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;