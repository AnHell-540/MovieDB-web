import { FavoritesRepository } from "../../../core/infrastructure";
import { FavoritesService } from "../../../core/usecase";
import { movieCardFavButton } from "./movieCardFavButton";
import { MovieData } from "../../../core/domain";
import { MovieRating } from "../MovieRating";
import { SVGAdd, SVGDelete } from "../SVG";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import style from "./MovieCard.module.css";

interface MovieCardProps {
  movie: MovieData;
}
const favoritesRepository = FavoritesRepository;
const { isMovieInFavorites } = FavoritesService(favoritesRepository);

export const MovieCard = ({ movie }: MovieCardProps) => {
  const imgBaseUrl = process.env.REACT_APP_CARD_IMAGE;
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(isMovieInFavorites(movie));
  const handleFavButtonClick = movieCardFavButton({
    movie,
    isFavorite,
    setIsFavorite,
    favoritesRepository,
  });

  return (
    <div
      className={style.card}
      onClick={() => navigate(`/movie?id=${movie.id}`)}
      role="movie-card"
    >
      <div className={style.img_rating_container}>
        {movie.vote_average > 0 && (
          <MovieRating
            movieRating={movie.vote_average}
            classContainer={style.rating}
            classValue={style.rating_value}
          />
        )}

        <div className={style.image_container}>
          <img
            className={style.card_image}
            src={imgBaseUrl + movie.poster_path}
            alt={movie.title}
          />
        </div>
      </div>

      <div className={style.title_favButton}>
        <h2 className={style.card_title}>{movie.title}</h2>
        <button
          className={style.favButton}
          onClick={(e) => {
            handleFavButtonClick(e);
          }}
        >
          {!isFavorite ? <SVGAdd /> : <SVGDelete />}
        </button>
      </div>
    </div>
  );
};
