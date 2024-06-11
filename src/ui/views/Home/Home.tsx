import style from "./Home.module.css";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { useFilterMoviesByName, useGetMovies } from "../../customHooks";
import { MovieRepository } from "../../../core/infrastructure/MovieRepository";
import { MoviesService } from "../../../core/usecase/MoviesService";

const movieRepository = MovieRepository();
const moviesService = MoviesService(movieRepository);

export const Home = () => {
  const { movies, loading } = useGetMovies(moviesService.getPopularMovies);
  const { filterMovies, filteredMovies } = useFilterMoviesByName(movies);

  return (
    <div className={style.container}>

      <section>
        <h1 className={`${style.title} ${style.poppins_bold}`} role="title">
          Popular movies
        </h1>
        <div>
          <input
            className={style.input}
            id="search"
            type="text"
            placeholder={"Search Movies"}
            onChange={filterMovies}
          />
        </div>
      </section>

      <main>
        <div className={style.movie_count}>
          <p>{filteredMovies.length} items</p>
        </div>
        
        {loading ? (
          <span className={style.loader} data-testid="loader"></span>
        ) : (
          <div role="list" className={style.movie_list_container}>
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </main>
      
    </div>
  );
};
