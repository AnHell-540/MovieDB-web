import { FavoritesRepository } from "../../../core/infrastructure";
import { FavoritesService } from "../../../core/usecase";
import { MovieDetail } from "../../../core/domain";
import { movieInfoFavButton } from "./movieInfoFavButton";
import { MovieRating } from "..";
import { useState } from "react";
import style from "../../views/MovieDetail/Movie.module.css";

const favoritesRepository = FavoritesRepository;
const { isMovieInFavorites } = FavoritesService(favoritesRepository);

interface ImageAndTitleProps {
  movie: MovieDetail;
}

export const MovieInfo = ({ movie }: ImageAndTitleProps) => {
  const genres = movie.genres.join(", ");
  const [isFavorite, setIsFavorite] = useState(isMovieInFavorites(movie));

  const handleFavButtonClick = movieInfoFavButton({
    movie,
    isFavorite,
    setIsFavorite,
    favoritesRepository,
  });

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
          <MovieRating
            movieRating={movie.vote_average}
            classContainer={style.rating}
            classValue={style.rating_value}
          />
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
            className={style.addToFavs}
            onClick={(e) => handleFavButtonClick(e)}
          >
            {!isFavorite ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width={19}
                  height={19}
                  fill="#FFAD49"
                  className={style.svg}
                >
                  <path d={process.env.REACT_APP_SVG_ADD} />
                </svg>
                <span style={{ color: "#FFAD49" }}>Add to favorites</span>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  width={19}
                  height={17}
                  fill="#FF0000"
                  className={style.svg}
                >
                  <path d={process.env.REACT_APP_SVG_DELETE} />
                </svg>
                <span style={{ color: "#FF0000" }}>Delete from favorites</span>
              </>
            )}
          </button>
        </section>
      </main>
    </>
  );
};
