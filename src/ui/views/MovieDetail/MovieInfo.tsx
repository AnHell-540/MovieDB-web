import { useEffect, useState } from "react";
import { MovieData, MovieDetail } from "../../../core/domain";
import {
  deleteFavoriteFromLocalStorage,
  isMovieInLocalStorage,
  saveToFavoritesInLocalStorage,
} from "../../../core/infrastructure";
import { MovieRating } from "../../components";
import style from "./Movie.module.css";

interface ImageAndTitleProps {
  movie: MovieDetail;
}

export const MovieInfo = ({ movie }: ImageAndTitleProps) => {
  const genres = movie.genres.join(", ");
  const [isFavorite, setIsFavorite] = useState(
    isMovieInLocalStorage(movie.id.toString())
  );

  useEffect(() => {
    setIsFavorite(isMovieInLocalStorage(movie.id.toString()));
  }, [movie.id]);

  const handleFavButtonClick = (
    movie: MovieData,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log("FavButton clicked");
    if (!isFavorite) {
      const movieData: MovieData = {
        id: movie.id,
        poster_path: movie.poster_path,
        title: movie.title,
        vote_average: movie.vote_average,
      };
      saveToFavoritesInLocalStorage(movieData);
    } else {
      deleteFavoriteFromLocalStorage(movie);
    }
    setIsFavorite(!isFavorite);
    event.stopPropagation();
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
            onClick={(e) => handleFavButtonClick(movie, e)}
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
                <span style={{color : '#FFAD49'}}>Add to favorites</span>
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
              <span style={{color : '#FF0000'}}>Delete from favorites</span>
              </>
            )}
          </button>
        </section>
      </main>
    </>
  );
};
