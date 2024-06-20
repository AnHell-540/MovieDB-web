import style from "./Movie.module.css";
import { useSearchParams } from "react-router-dom";
import { useGetMovieDetail } from "../../customHooks/useGetMovieDetail";
import { MovieDetailRepository } from "../../../core/infrastructure";
import { MovieDetailService } from "../../../core/usecase/MovieDetailService";
import { MovieRating } from "../../components/MovieRating";
import { CinemaMap } from "../../components/CinemasMap/CinemaMap";

export const Movie = () => {
  const movieDetailRepository = MovieDetailRepository();
  const movieDetailService = MovieDetailService(movieDetailRepository);

  const imgUrl = "https://image.tmdb.org/t/p/w1280";
  const [params] = useSearchParams();
  const movieId = params.get("id") ?? "";

  const { movie } = useGetMovieDetail(() =>
    movieDetailService.getMovieDetail(movieId)
  );
  const genreString = movie.genres.map((g) => g.name).join(", ");

  return (
    <>
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.header_img_container}>
          <img
            className={style.header_image}
            src={imgUrl + movie.backdrop_path}
            alt="header_img"
          />
        </div>
        <div className={style.title}>
          <p>TMDB / Movie details</p>
          <h3>{movie.title}</h3>
        </div>
      </div>

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
            movie={movie}
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
            <p className={style.info_section_content}>{genreString}</p>
          </div>
        </section>
      </main>
    </div>
      <section>
        <CinemaMap/> 
      </section>
    </>
  );
};
