import styleCard from './MovieRating.module.css'
import styleMovieInfo from './MovieRatingInfo.module.css'

interface MovieRatingProps {
  movieRating: number,
  width?: number,
  height?: number,
  movieInfo?: boolean
}

export const MovieRating = ({movieRating, width = 18, height = 18, movieInfo= false}: MovieRatingProps) => {

  const svgPath = process.env.REACT_APP_SVG_RATING
  const usedStyle = movieInfo === false ? styleCard : styleMovieInfo
  
  return (
    <div className={usedStyle.rating}>
      <svg
        width={width}
        height={height}
        fill="#FFAD49"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path d={svgPath} />
      </svg>
      <p className={styleCard.rating_value} role="rating">
        {movieRating.toFixed(1)}
      </p>
    </div>
  );
};


