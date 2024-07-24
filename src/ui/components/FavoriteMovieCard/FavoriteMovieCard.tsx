import { useNavigate } from "react-router-dom";
import { MovieData } from "../../../core/domain";
import style from "../MovieCard/MovieCard.module.css";
import { MovieRating } from "../MovieRating/MovieRating";
import { SVGDelete } from "../SVG";

interface MovieCardProps {
  movie: MovieData;
  onDeleteFavorite: (movie: MovieData) => void;
}

export const FavoriteMovieCard = ({
  movie,
  onDeleteFavorite,
}: MovieCardProps) => {
  const imgBaseUrl = process.env.REACT_APP_CARD_IMAGE;
  const navigate = useNavigate();

  const handleDeleteFavButtonClick = (
    movie: MovieData,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onDeleteFavorite(movie);
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
          <MovieRating movieRating={movie.vote_average} />
        )}

        <div className={style.image_container}>
          <img
            className={style.card_image}
            src={imgBaseUrl + movie.poster_path}
            alt={movie.title}
          />
          <button
            className={style.favButton}
            onClick={(event) => handleDeleteFavButtonClick(movie, event)}
          >
            <SVGDelete />
          </button>
        </div>
      </div>

      <div className={style.title_favButton}>
        <h2 className={style.card_title}>{movie.title}</h2>
      </div>
    </div>
  );
};
