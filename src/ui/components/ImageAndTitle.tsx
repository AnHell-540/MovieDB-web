import { MovieDetail } from '../../core/domain';
import style from '../views/MovieDetail/Movie.module.css'

interface ImageAndTitleProps {
  movie: MovieDetail
}

const imgUrl = "https://image.tmdb.org/t/p/w1280";

export const ImageAndTitle = ({movie}: ImageAndTitleProps) => {
  return (
    <div className={style.header}>
      <div className={style.header_img_container}>
        <img
          className={style.header_image}
          src={`${imgUrl}${movie.backdrop_path}`}
          alt="header_img"
        />
      </div>
      <div className={style.title}>
        <p>TMDB / Movie details</p>
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
};
