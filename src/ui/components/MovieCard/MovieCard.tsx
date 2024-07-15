import { useNavigate } from "react-router-dom";
import { MovieData } from "../../../core/domain";
import style from "./MovieCard.module.css";
import { MovieRating } from "../MovieRating";
import {
  saveToFavoritesInLocalStorage,
  deleteFavoriteFromLocalStorage,
  isMovieInLocalStorage,
} from "../../../core/infrastructure";
import { useState } from "react";
import { SVGAdd } from "../SVG/SVGAdd";
import { SVGDelete } from "../SVG/SVGDelete";

interface MovieCardProps {
  movie: MovieData;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const imgBaseUrl = process.env.REACT_APP_CARD_IMAGE;
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(
    isMovieInLocalStorage(movie.id.toString())
  );

  const handleFavButtonClick = (
    movie: MovieData,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (!isFavorite) {
      saveToFavoritesInLocalStorage(movie);
    } else {
      deleteFavoriteFromLocalStorage(movie);
    }
    setIsFavorite(!isFavorite);
    event.stopPropagation();
  };

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
          onClick={(event) => {
            handleFavButtonClick(movie, event);
          }}
        >
          {!isFavorite ? (
            <SVGAdd/>
          ) : (
            <SVGDelete/>
          )}
        </button>
      </div>
    </div>
  );
};
