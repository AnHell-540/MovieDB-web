import { Movie } from "../views";
import { screen, render, waitForElementToBeRemoved } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { server } from "./mocks/server";
import { MemoryRouter, Route, Routes } from "react-router-dom";

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
    watchPosition: jest.fn(),
  };

  Object.defineProperty(global.navigator, 'geolocation', {
    value: mockGeolocation,
    configurable: true,
  });
});

afterEach(() => {
  server.resetHandlers();
  jest.clearAllMocks();
});

afterAll(() => {
  server.close();
});

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

    screen.debug()

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
    
    // const mapLoader = await screen.findByText(/Loading Maps/i)
    // expect(mapLoader).toBeInTheDocument();
    // await waitForElementToBeRemoved(mapLoader, {timeout:1000})

  });
});
