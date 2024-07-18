export const SVGAdd = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={19}
      height={19}
      fill="#FFAD49"
      style={{ marginTop: "6px" }}
    >
      <path d={process.env.REACT_APP_SVG_ADD} />
    </svg>
  );
};
