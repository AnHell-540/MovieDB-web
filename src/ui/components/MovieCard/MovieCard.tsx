import { FavoritesRepository } from "../../../core/infrastructure";
import { FavoritesService } from "../../../core/usecase";
import { movieCardFavButton } from "./movieCardFavButton";
import { MovieData } from "../../../core/domain";
import { MovieRating } from "../MovieRating/MovieRating";
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
  const [isAnimating, setIsAnimating] = useState(false);
  const handleFavButtonClick = movieCardFavButton({
    movie,
    isFavorite,
    setIsFavorite,
    favoritesRepository,
  });
  const handleFavButtonAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 200);
  };

  return (
    <div
      className={style.card}
      onClick={() => navigate(`/movie?id=${movie.id}`)}
      role="movie-card"
    >
      <div className={style.img_rating_container}>
        <MovieRating movieRating={movie.vote_average} />

        <div className={style.image_container}>
          <img
            className={style.card_image}
            src={imgBaseUrl + movie.poster_path}
            alt={movie.title}
          />
          <button
            className={`${style.favButton} ${isAnimating ? style.animate : ""}`}
            onClick={(e) => {
              handleFavButtonClick(e);
              handleFavButtonAnimation();
            }}
          >
            {!isFavorite ? <SVGAdd /> : <SVGDelete />}
          </button>
        </div>
      </div>

      <div className={style.title_favButton}>
        <h2 className={style.card_title}>{movie.title}</h2>
      </div>
    </div>
  );
};
