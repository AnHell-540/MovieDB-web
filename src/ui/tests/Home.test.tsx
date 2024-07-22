import { Home } from "../views";
import {
  fireEvent,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { render } from "./testUtils";
import "@testing-library/jest-dom/extend-expect";
import { server } from "./mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const storedMovie = {
  id: 653346,
  poster_path: "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
  title: "Kingdom of the Planet of the Apes",
  vote_average: 6.894,
};

describe("Home component", () => {
  test("render basic info", () => {
    render(<Home />);

    const title = screen.getByText(/Popular Movies/i);
    expect(title).toBeInTheDocument();

    const input = screen.getByPlaceholderText(/Search movies/i);
    expect(input).toBeInTheDocument();

    const movieCount = screen.getByText(/items/i);
    expect(movieCount).toBeInTheDocument();
  });

  test("render MovieList and MovieCard", async () => {
    render(<Home />);

    const movieCards = await screen.findAllByText(/Apes/i);
    const movieCardsRole = screen.getAllByRole("movie-card");
    expect(movieCards.length).toBe(1);
    expect(movieCardsRole.length).toBe(20);
  });

  test("filter movies by name", async () => {
    render(<Home />);

    const loader = await screen.findByTestId("loader");
    await waitForElementToBeRemoved(loader);

    const movieCards = await screen.findAllByText(/apes/i);
    expect(movieCards[0]).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText("Search Movies");
    fireEvent.change(searchInput, { target: { value: "civil" } });

    expect(movieCards[0]).not.toBeInTheDocument();
    const movieCardsFiltered = await screen.findAllByText(/civil/i);
    expect(movieCardsFiltered.length).toBe(1);
    expect(movieCardsFiltered[0]).toBeInTheDocument();
  });

  test("renders loader before MovieCards", async () => {
    render(<Home />);

    const loader = await screen.findByTestId("loader");
    expect(loader).toBeInTheDocument();
    await waitForElementToBeRemoved(loader);

    const movieCards = await screen.findAllByRole("movie-card");
    expect(movieCards.length).toBe(20);

    expect(loader).not.toBeInTheDocument();
  });

  test("add movie to favorites when pressing the button", async () => {
    render(<Home />);

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
    render(<Home />);

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
