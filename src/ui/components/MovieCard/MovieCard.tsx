import { useNavigate } from "react-router-dom";
import { MovieResult } from "../../../core/domain/Movies.interface";
import style from "./MovieCard.module.css";
import { MovieRating } from "../MovieRating";

interface MovieCardProps {
  movie: MovieResult;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const imgBaseUrl = process.env.REACT_APP_CARD_IMAGE;
  const navigate = useNavigate();

  return (
    <div
      className={style.card}
      onClick={() => navigate(`/movie?id=${movie.id}`)}
      role="movie-card"
    >
      <div className={style.img_rating_container}>
        {movie.vote_average > 0 && (
          <MovieRating movie={movie}/>
        )}

        <div className={style.image_container}>
          <img
            className={style.card_image}
            src={imgBaseUrl + movie.poster_path}
            alt={movie.title}
          />
        </div>
      </div>

      <h2 className={style.card_title}>{movie.title}</h2>
    </div>
  );
};
