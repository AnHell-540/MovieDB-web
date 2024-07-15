import style from "../Home/Home.module.css";
import { useFilterMoviesByName } from "../../customHooks";
import { useGetMoviesFromLocalStorage } from "../../customHooks/useGetMoviesFromLocalStorage";
import { TitleAndInput } from "../../components";
import { FavoriteMovieCard } from "../../components/MovieCard/FavoriteMovieCard";
import { deleteFavoriteFromLocalStorage } from "../../../core/infrastructure";
import { MovieData } from "../../../core/domain";

export const Favorites = () => {
  const { movies, setMovies, loading } = useGetMoviesFromLocalStorage();
  const { filterMovies, filteredMovies } = useFilterMoviesByName(movies);

  const handleDeleteFavorite = (movie: MovieData) => {
    deleteFavoriteFromLocalStorage(movie);
    setMovies((prevMovies) => prevMovies.filter((m) => m.id !== movie.id));
  };

  return (
    <div className={style.container}>
      <TitleAndInput title="Favorite Movies" onChange={filterMovies} />

      <main>
        <div className={style.movie_count}>
          <p>{movies.length} items</p>
        </div>

        {loading ? (
          <span className={style.loader} data-testid="loader"></span>
        ) : (
          <div role="list" className={style.movie_list_container}>
            {filteredMovies.map((movie) => (
              <FavoriteMovieCard
                key={movie.id}
                movie={movie}
                onDeleteFavorite={() => handleDeleteFavorite(movie)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
