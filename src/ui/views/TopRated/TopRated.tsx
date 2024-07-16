import { MovieRepository } from "../../../core/infrastructure";
import { MoviesService } from "../../../core/usecase";
import { useFilterMoviesByName, useGetMovies } from "../../customHooks";
import { TitleAndInput } from "../../components";
import { MovieList } from "../../components/MovieList";
import style from "../Home/Home.module.css";

const movieRepository = MovieRepository();
const moviesService = MoviesService(movieRepository);

export const TopRated = () => {
  const { movies, loading } = useGetMovies(moviesService.getTopRatedMovies);
  const { filterMovies, filteredMovies } = useFilterMoviesByName(movies);

  return (
    <div className={style.container}>
      <TitleAndInput title="Top Rated Movies" onChange={filterMovies} />

      <main>
        <div className={style.movie_count}>
          <p>{filteredMovies.length} items</p>
        </div>

        {loading ? (
          <span className={style.loader} data-testid="loader"></span>
        ) : (
          <MovieList movies={filteredMovies} />
        )}
      </main>
    </div>
  );
};
