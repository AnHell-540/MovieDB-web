interface MovieRatingProps {
  movieRating: number,
  width?: number,
  height?: number,
  classContainer: string,
  classValue: string
}

export const MovieRating = ({movieRating, width = 18, height = 18, classContainer, classValue}: MovieRatingProps) => {

  const svgPath = process.env.REACT_APP_SVG_RATING
  return (
    <div className={classContainer}>
      <svg
        width={width}
        height={height}
        fill="#FFAD49"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path d={svgPath} />
      </svg>
      <p className={classValue} role="rating">
        {movieRating.toFixed(1)}
      </p>
    </div>
  );
};


