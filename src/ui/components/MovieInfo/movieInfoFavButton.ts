import { MovieData } from "../../../core/domain";
import { IFavoritesRepository } from "../../../core/domain";
import { FavoritesService } from "../../../core/usecase";

interface MovieInfoFavButtonProps {
  movie: MovieData;
  isFavorite: boolean;
  setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>;
  favoritesRepository: IFavoritesRepository;
}

export const movieInfoFavButton = ({
  movie,
  isFavorite,
  setIsFavorite,
  favoritesRepository,
}: MovieInfoFavButtonProps) => {
  const { deleteFromFavorites, saveMovieToFavorites } = FavoritesService(favoritesRepository);

  const handleFavButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isFavorite) {
      const movieData: MovieData = {
        id: movie.id,
        poster_path: movie.poster_path,
        title: movie.title,
        vote_average: movie.vote_average,
      };
      saveMovieToFavorites(movieData);
    } else {
      deleteFromFavorites(movie);
    }
    setIsFavorite(!isFavorite);
    event.stopPropagation();
  };

  return handleFavButtonClick;
};