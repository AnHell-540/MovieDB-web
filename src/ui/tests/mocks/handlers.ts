// src/mocks/handlers.ts
import { rest } from "msw";

const handlers = [
  rest.get("https://api.themoviedb.org/3/movie/popular", (req, res, ctx) => {
    return res(
      ctx.json({
        results: [
          {
            id: 1,
            title: "Film 1",
            overview: "Overview of movie 1",
            poster_path: "/path/to/poster1.jpg",
            vote_average: 6,
          },
          {
            id: 2,
            title: "Film 2",
            overview: "Overview of movie 2",
            poster_path: "/path/to/poster2.jpg",
            vote_average: 6,
          },
      ]}),
    )
  })
];

export { handlers };
