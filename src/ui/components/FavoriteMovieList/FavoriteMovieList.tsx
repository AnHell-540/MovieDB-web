import { MovieData } from "../../../core/domain";
import { FavoritesRepository } from "../../../core/infrastructure";
import { FavoritesService } from "../../../core/usecase";
import { FavoriteMovieCard } from "../FavoriteMovieCard/FavoriteMovieCard";
import style from "./FavoriteMovieList.module.css";

interface FavoriteMovieListProps {
  loading: boolean;
  filteredMovies: MovieData[];
  setMovies: React.Dispatch<React.SetStateAction<MovieData[]>>;
}

const favoritesRepository = FavoritesRepository;
const { deleteFromFavorites } = FavoritesService(favoritesRepository);

export const FavoriteMovieList = ({
  loading,
  filteredMovies,
  setMovies,
}: FavoriteMovieListProps) => {
  const handleDeleteFavorite = (movie: MovieData) => {
    deleteFromFavorites(movie);
    setMovies((prevMovies) => prevMovies.filter((m) => m.id !== movie.id));
  };

  return loading ? (
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
  );
};
