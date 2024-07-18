import style from "../Home/Home.module.css";
import { useFilterMoviesByName, useGetFavoriteMovies } from "../../customHooks";
import { TitleAndInput } from "../../components";
import { FavoriteMovieCard } from "../../components";
import { FavoritesRepository } from "../../../core/infrastructure";
import { FavoritesService } from "../../../core/usecase";
import { MovieData } from "../../../core/domain";

const favoritesRepository = FavoritesRepository;
const { deleteFromFavorites } = FavoritesService(favoritesRepository);

export const Favorites = () => {
  const { movies, setMovies, loading } = useGetFavoriteMovies();
  const { filterMovies, filteredMovies } = useFilterMoviesByName(movies);

  const handleDeleteFavorite = (movie: MovieData) => {
    deleteFromFavorites(movie);
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
        ) : filteredMovies.length !== 0 ? (
          <div role="list" className={style.movie_list_container}>
            {filteredMovies.map((movie) => (
              <FavoriteMovieCard
                key={movie.id}
                movie={movie}
                onDeleteFavorite={() => handleDeleteFavorite(movie)}
              />
            ))}
          </div>
        ) : (
          <span>
            There are no favorite movies <u>yet.</u> &lt;3
          </span>
        )}
      </main>
    </div>
  );
};
