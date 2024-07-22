import { MovieRepository } from "../../../core/infrastructure";
import { MoviesService } from "../../../core/usecase";
import { useFilterMoviesByName, useGetMovies } from "../../customHooks";
import { BaseContainer } from "../../components";

const movieRepository = MovieRepository;
const moviesService = MoviesService(movieRepository);

export const Home = () => {
  const { movies, loading } = useGetMovies(moviesService.getPopularMovies);
  const { filterMovies, filteredMovies } = useFilterMoviesByName(movies);

  return (
    <BaseContainer
      title={"Popular Movies"}
      filterMovies={filterMovies}
      filteredMovies={filteredMovies}
      loading={loading}
    />
  );
};
