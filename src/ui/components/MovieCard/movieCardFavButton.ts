import { IFavoritesRepository, MovieData } from "../../../core/domain";
import { FavoritesService } from "../../../core/usecase";

interface ButtonFavProps {
  movie: MovieData;
  isFavorite: boolean;
  setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>;
  favoritesRepository: IFavoritesRepository;
}

export const movieCardFavButton = ({
  movie,
  isFavorite,
  setIsFavorite,
  favoritesRepository,
}: ButtonFavProps) => {
  const { deleteFromFavorites, saveMovieToFavorites } = FavoritesService(favoritesRepository);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isFavorite) {
      saveMovieToFavorites(movie);
    } else {
      deleteFromFavorites(movie);
    }
    setIsFavorite(!isFavorite);
    event.stopPropagation();
  };

  return handleClick;
};