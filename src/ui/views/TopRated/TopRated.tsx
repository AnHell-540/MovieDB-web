import { MovieRepository } from "../../../core/infrastructure";
import { MoviesService } from "../../../core/usecase";
import { useFilterMoviesByName, useGetMovies } from "../../customHooks";
import { BaseContainer } from "../../components";

const movieRepository = MovieRepository;
const moviesService = MoviesService(movieRepository);

export const TopRated = () => {
  const { movies, loading } = useGetMovies(moviesService.getTopRatedMovies);
  const { filterMovies, filteredMovies } = useFilterMoviesByName(movies);

  return (
    <BaseContainer
      title={"Top Rated"}
      filterMovies={filterMovies}
      filteredMovies={filteredMovies}
      loading={loading}
    />
  );
};
