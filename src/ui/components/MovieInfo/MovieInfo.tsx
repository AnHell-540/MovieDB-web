import { MovieDetail } from "../../../core/domain";
import { movieInfoFavButton } from "./movieInfoFavButton";
import { MovieRating } from "../MovieRating/MovieRating";
import style from "./MovieInfo.module.css";
import { SVGAdd, SVGDelete } from "../SVG";
import { useIsFavorite } from "../../customHooks/useFavoriteMovie";
import { InfoSection } from "./InfoSection/InfoSection";
import { useState } from "react";

interface ImageAndTitleProps {
  movie: MovieDetail;
}

export const MovieInfo = ({ movie }: ImageAndTitleProps) => {
  const genres = movie.genres.join(", ");
  const { isFavorite, setIsFavorite, favoritesRepository } =
    useIsFavorite(movie);
  const [isAnimating, setIsAnimating] = useState(false);
  const handleFavButtonClick = movieInfoFavButton({
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
    <>
      <main className={style.movie_info_container}>
        <figure className={style.poster_container}>
          <img
            className={style.poster}
            src={process.env.REACT_APP_POSTER_IMAGE + movie.poster_path}
            alt="poster_img"
          />
        </figure>

        <section className={style.movie_info}>
          <h4>{movie.tagline}</h4>
          <p className={style.overview}>{movie.overview}</p>
          <MovieRating movieRating={movie.vote_average} movieInfo={true} />
          <div>
            <p className={style.info_section_title}>Release Date:</p>
            <p className={style.info_section_content}>{movie.release_date}</p>
          </div>
          <div>
            <p className={style.info_section_title}>Run time</p>
            <p className={style.info_section_content}>{movie.runtime}</p>
          </div>
          <div>
            <p className={style.info_section_title}>Genres</p>
            <p className={style.info_section_content}>{genres}</p>
          </div>
          <button
            className={`${style.favButton} ${isAnimating ? style.animate : ""}`}
            onClick={(e) => {
              handleFavButtonClick(e);
              handleFavButtonAnimation();
            }}
          >
            {!isFavorite ? (
              <>
                <SVGAdd />
                <span style={style}>Add to favorites</span>
              </>
            ) : (
              <>
                <SVGDelete />
                <span style={style}>Delete from favorites</span>
              </>
            )}
          </button>
        </section>
      </main>
    </>
  );
};
