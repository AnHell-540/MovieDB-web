import { TopRated } from "../views";
import {
  fireEvent,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { render } from "./testUtils";
import "@testing-library/jest-dom/extend-expect";
import { server } from "./mocks/server";

beforeAll(() => {
  Object.defineProperty(window, 'location', {
    value: {
      href: 'http://localhost:3000/movie?id=929590',
      pathname: '/movie',
      search: '?id=929590',
    },
    writable: true,
  });
  server.listen()});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const storedMovie = {
  id: 278,
  poster_path: "/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
  title: "The Shawshank Redemption",
  vote_average: 8.7
};

describe("TopRated component", () => {
  test("render basic info", () => {
    render(<TopRated />);

    const title = screen.getByText(/Top rated/i);
    expect(title).toBeInTheDocument();

    const input = screen.getByPlaceholderText(/Search movies/i);
    expect(input).toBeInTheDocument();

    const movieCount = screen.getByText(/items/i);
    expect(movieCount).toBeInTheDocument();
  });

  test("render MovieList and MovieCards", async () => {
    render(<TopRated />);

    const movieCards = await screen.findAllByText(/Shawshank/i);
    const movieCardsRole = screen.getAllByRole("movie-card");
    expect(movieCards.length).toBe(1);
    expect(movieCardsRole.length).toBe(20);
  });

  test("filter movies by name", async () => {
    render(<TopRated />);

    const loader = await screen.findByTestId("loader");
    await waitForElementToBeRemoved(loader);

    const movieCards = await screen.findAllByText(/Shawshank/i);
    expect(movieCards[0]).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText("Search Movies");
    fireEvent.change(searchInput, { target: { value: "godfather" } });

    expect(movieCards[0]).not.toBeInTheDocument();
    const movieCardsFiltered = await screen.findAllByText(/godfather/i);
    expect(movieCardsFiltered.length).toBe(2);
    expect(movieCardsFiltered[0]).toBeInTheDocument();
  });

  test("renders loader before MovieCards", async () => {
    render(<TopRated />);

    const loader = await screen.findByTestId("loader");
    expect(loader).toBeInTheDocument();
    await waitForElementToBeRemoved(loader);

    const movieCards = await screen.findAllByRole("movie-card");
    expect(movieCards.length).toBe(20);

    expect(loader).not.toBeInTheDocument();
  });

  test("add movie to favorites when pressing the button", async () => {
    render(<TopRated />);

    const loader = await screen.findByTestId("loader");
    await waitForElementToBeRemoved(loader);
    expect(loader).not.toBeInTheDocument();

    let movieCard = screen.getAllByRole("movie-card");
    expect(movieCard[0]).toBeInTheDocument();
    const favButton = movieCard[0].querySelector("button");
    if (favButton) {
      fireEvent.click(favButton);
    } else {
      throw new Error("FavButton not found");
    }

    const favoriteMovies = localStorage.getItem("favoriteMovies");
    let favoriteMoviesArray = [];
    if (favoriteMovies) {
      favoriteMoviesArray = JSON.parse(favoriteMovies);
    }
    const newlyAddedMovieId =
      favoriteMoviesArray[favoriteMoviesArray.length - 1].id;

    expect(newlyAddedMovieId).toBe(storedMovie.id);
  });

  test("delete movie from favorites when pressing the button", async () => {
    render(<TopRated />);

    localStorage.setItem("favoriteMovies", JSON.stringify([storedMovie]));

    const loader = await screen.findByTestId("loader");
    await waitForElementToBeRemoved(loader);
    expect(loader).not.toBeInTheDocument();

    let favoriteMovies = localStorage.getItem("favoriteMovies");

    if(favoriteMovies){
      expect(JSON.parse(favoriteMovies).length).toBe(1);
    }
    
    const movieCard = screen.getAllByRole("movie-card");
    expect(movieCard.length).toBe(20);

    const favButton = movieCard[0].querySelector("button");
    if (favButton) {
      fireEvent.click(favButton);
    } else {
      throw new Error("FavButton not found");
    }
    favoriteMovies = localStorage.getItem("favoriteMovies");

    if(favoriteMovies)
    expect(JSON.parse(favoriteMovies).length).toBe(0);
  });
});
