import { Movie } from "../views";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { server } from "./mocks/server";
import { MemoryRouter, Route, Routes } from "react-router-dom";

jest.mock("../components/CinemasMap/CinemaMap");
beforeAll(() => {
  server.listen();

  const mockGeolocation = {
    getCurrentPosition: jest.fn().mockImplementation((success, error) => {
      success({
        coords: {
          latitude: 37.7749,
          longitude: -122.4194,
          accuracy: 100,
          altitude: null,
          altitudeAccuracy: null,
          heading: null,
          speed: null,
        },
        timestamp: Date.now(),
      });
    }),
  };

  Object.defineProperty(global.navigator, "geolocation", {
    value: mockGeolocation,
  });
});

afterEach(() => {
  server.resetHandlers();
  jest.clearAllMocks();
});

afterAll(() => {
  server.close();
});

const storedMovie = {
  id: 929590,
  poster_path: "/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
  title: "Civil War",
  vote_average: 7.013,
};

const movieId = "929590";

describe("Movie component", () => {
  test("render all the info", async () => {
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

    screen.debug();
  });

  test("Add and delete movie from favorite", () => {
    render(
      <MemoryRouter initialEntries={[`/movie?id=${movieId}`]}>
        <Routes>
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </MemoryRouter>
    );

    const favButton = screen.getByRole("button");

    let movieFromLocalStorage = localStorage.getItem("0");
    expect(movieFromLocalStorage).toBeFalsy();
    if (favButton) {
      fireEvent.click(favButton);
    } else {
      throw new Error("FavButton not found");
    }

    movieFromLocalStorage = localStorage.getItem("0");
    expect(movieFromLocalStorage).toBeTruthy();

    fireEvent.click(favButton);

    movieFromLocalStorage = localStorage.getItem("0");
    expect(movieFromLocalStorage).toBeFalsy();
  });
});
