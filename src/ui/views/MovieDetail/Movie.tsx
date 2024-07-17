import style from "./Movie.module.css";
import { useSearchParams, useLocation } from "react-router-dom";
import { useGetMovieDetail } from "../../customHooks";
import { MovieDetailRepository } from "../../../core/infrastructure";
import { MovieDetailService } from "../../../core/usecase";
import { CinemaMap } from "../../components";
import { useEffect } from "react";
import { ImageAndTitle } from "./ImageAndTitle";
import { MovieInfo } from "./MovieInfo";

export const Movie = () => {
  const location = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  const movieDetailRepository = MovieDetailRepository
  const movieDetailService = MovieDetailService(movieDetailRepository);

  const [params] = useSearchParams();
  const movieId = params.get("id") ?? "";

  const { movie } = useGetMovieDetail(() =>
    movieDetailService.getMovieDetail(movieId)
  );

  return (
    <>
      <div className={style.container}>
        <ImageAndTitle movie={movie} />
        <MovieInfo movie={movie} />
      </div>
      <section className={style.map_container}>
        <h3 role="map" className={style.map_title}>Localización de cines cercanos</h3>
        <CinemaMap />
      </section>
    </>
  );
};
