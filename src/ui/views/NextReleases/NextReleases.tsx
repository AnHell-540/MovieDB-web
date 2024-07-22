import { MovieRepository } from "../../../core/infrastructure";
import { MoviesService } from "../../../core/usecase";
import { useFilterMoviesByName, useGetMovies } from "../../customHooks";
import { BaseContainer } from "../../components";

const movieRepository = MovieRepository;
const moviesService = MoviesService(movieRepository);

export const NextReleases = () => {
  const { movies, loading } = useGetMovies(moviesService.getNextReleases);
  const { filterMovies, filteredMovies } = useFilterMoviesByName(movies);

  return (
    <BaseContainer
      title={"Next Releases"}
      filterMovies={filterMovies}
      filteredMovies={filteredMovies}
      loading={loading}
    />
  );
};
