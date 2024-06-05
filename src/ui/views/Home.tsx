import { useEffect, useState } from "react";
import { MovieResponse, MovieResult } from "../../domain/Movies.interface";
import style from "../style/Home.module.css";
import { MovieRepository } from "../../infrastructure/MovieRepository";
import { MoviesService } from "../../usecase/MoviesService";
import { MovieCard } from "../components/MovieCard";
import { useFilterMoviesByName } from "../customHooks/useFilterMoviesByName";

export const Home = () => {

  const [popularMovies, setPopularMovies] = useState<MovieResult[]>([]);
  const movieRepository = MovieRepository();
  const moviesService = MoviesService(movieRepository);

  useEffect(() => {
    const popularMovies = async () => {
      try {
        const response: MovieResponse = await moviesService.getPopularMovies();
        setPopularMovies(response.results);
      } catch (e) {
        console.error(e);
        throw new Error("Error");
      }
    };

    popularMovies();
  }, []);

  const { filterMovies, filteredMovies } = useFilterMoviesByName(popularMovies);

  return (
    <div className={style.container}>
      <h1 className={`${style.title} ${style.poppins_bold}`}>Popular movies</h1>
      <div>
        <input
          className={style.input}
          id="search"
          type="text"
          placeholder={"Search Movies"}
          onChange={filterMovies}
        />
      </div>
      <div className={style.movie_count}>
        <p>{filteredMovies.length} items</p>
      </div>
      <div className={style.movie_list_container}>
        {!moviesService.error &&
          (!moviesService.loading ? (
            <div className={style.movie_list_container}>
              {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          ) : (
            <span className="loader"></span>
          ))}

        {moviesService.error && (
          <div>
            <p>Error</p>
          </div>
        )}
      </div>
    </div>
  );
};
