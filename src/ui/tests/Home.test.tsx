// src/components/__tests__/Home.test.tsx

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

describe("Home component", () => {
  test("render title", () => {
    render(<Home />);

    const title = screen.getByText(/popular/i);
    expect(title).toBeInTheDocument();
  });

  test("render cards in movie_list_container", async () => {
    render(<Home />);

    const movieCards = await screen.findAllByText(/Movie/i);
    expect(movieCards.length).toBeGreaterThan(0);
  });

  test("filter movies by name", async () => {
    render(<Home />);

    const loader = await screen.findByTestId("loader");
    await waitForElementToBeRemoved(loader);
    let movieCards = await screen.findAllByText(/film/i);
    expect(movieCards.length).toBe(2);

    const searchInput = screen.getByPlaceholderText("Search Movies");
    fireEvent.change(searchInput, { target: { value: "1" } });
    movieCards = await screen.findAllByText(/film/i);
    expect(movieCards.length).toBe(1);
    expect(screen.getByText(/film 1/i)).toBeInTheDocument();
  });

  test("renders loader before MovieCards", async () => {
    render(<Home />);

    const loader = await screen.findByTestId("loader");
    await waitForElementToBeRemoved(loader);
    const movieCards = await screen.findAllByText(/Film/i);
    expect(movieCards.length).toBeGreaterThan(0);
  });
});
