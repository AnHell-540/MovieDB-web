import { useFilterMoviesByName, useGetFavoriteMovies } from "../../customHooks";
import { BaseContainer } from "../../components";
import { FavoriteMovieList } from "../../components/FavoriteMovieList/FavoriteMovieList";

export const Favorites = () => {
  const { movies, setMovies, loading } = useGetFavoriteMovies();
  const { filterMovies, filteredMovies } = useFilterMoviesByName(movies);

  return (
    <BaseContainer
      filterMovies={filterMovies}
      filteredMovies={filteredMovies}
      loading={loading}
      title="Favorite Movies"
    >
      <FavoriteMovieList
        filteredMovies={filteredMovies}
        loading={loading}
        setMovies={setMovies}
      />
    </BaseContainer>
  );
};
