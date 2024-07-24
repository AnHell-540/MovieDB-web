import { Favorites } from "../views";
import { render } from "./testUtils";
import { screen, fireEvent } from "@testing-library/react";

const favMovies = [
  {
    id: 823464,
    poster_path: "/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
    title: "Godzilla x Kong: The New Empire",
    vote_average: 7.227,
  },
  {
    id: 653346,
    poster_path: "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
    title: "Kingdom of the Planet of the Apes",
    vote_average: 6.894,
  },
];

beforeAll(() => {
  Object.defineProperty(window, "location", {
    value: {
      href: "http://localhost:3000/movie?id=929590",
      pathname: "/movie",
      search: "?id=929590",
    },
    writable: true,
  });
});

describe("Test Favorites page", () => {
  test("render basic info", () => {
    render(<Favorites />);

    const title = screen.getAllByText(/Favorite Movies/i);
    expect(title[0]).toBeInTheDocument();

    const input = screen.getByPlaceholderText(/Search movies/i);
    expect(input).toBeInTheDocument();

    const movieCount = screen.getByText(/items/i);
    expect(movieCount).toBeInTheDocument();
  });

  test("render favorite movies", async () => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favMovies));

    render(<Favorites />);
    const favMovieCards = screen.getAllByRole("movie-card");
    const movie1 = screen.getByText(/Godzilla/i);
    const movie2 = screen.getByText(/Kingdom/i);
    expect(favMovieCards).toHaveLength(2);
    expect(movie1).toBeInTheDocument();
    expect(movie2).toBeInTheDocument();
  });

  test("delete a movie from the list when pressing the card button", () => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favMovies));

    render(<Favorites />);
    let favMovieCards = screen.getAllByRole("movie-card");
    expect(favMovieCards).toHaveLength(2);

    const deleteButton = favMovieCards[0].querySelector("button");

    if (deleteButton) {
      fireEvent.click(deleteButton);
    } else {
      throw new Error("Delete button not found");
    }

    favMovieCards = screen.getAllByRole("movie-card");
    expect(favMovieCards).toHaveLength(1);

    const movie = screen.getByText(/Kingdom/i);
    expect(movie).toBeInTheDocument();
  });
});
