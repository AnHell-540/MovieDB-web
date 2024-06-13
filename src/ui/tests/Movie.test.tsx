import { Movie } from "../views";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { server } from "./mocks/server";
import { MemoryRouter, Route, Routes } from "react-router-dom";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Movie component", () => {
  
  test("render all the info", async () => {
    const movieId = "929590";
    render(
      <MemoryRouter initialEntries={[`/movie?id=${movieId}`]}>
        <Routes>
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </MemoryRouter>
    );

    const title = await screen.findByText(/Civil War/);
    const tagline = await screen.findByText(/Welcome to the frontline/i);
    const overview = await screen.findByText(/In the near future/i);
    const ratingValue = await screen.findByText(/7.0/i);
    const releaseDate = await screen.findByText(/2024-04-10/);
    const runTime = await screen.findByText(/109/);
    const genres = await screen.findByText(/War, Action, Drama/i);
    const headerPoster = await screen.findByAltText(/header_img/i);
    const poster = await screen.findByAltText(/poster_img/i);

    expect(title).toBeInTheDocument();
    expect(tagline).toBeInTheDocument();
    expect(overview).toBeInTheDocument();
    expect(ratingValue).toBeInTheDocument();
    expect(releaseDate).toBeInTheDocument();
    expect(runTime).toBeInTheDocument();
    expect(genres).toBeInTheDocument();
    expect(headerPoster).toBeInTheDocument();
    expect(poster).toBeInTheDocument();
  });
});
