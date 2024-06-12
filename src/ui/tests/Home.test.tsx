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

    const movieCards = await screen.findAllByText(/Apes/i);
    expect(movieCards.length).toBeGreaterThan(0);
  });

  test("filter movies by name", async () => {
    render(<Home />);

    const loader = await screen.findByTestId("loader");
    await waitForElementToBeRemoved(loader);
    let movieCards = await screen.findAllByText(/apes/i);
    expect(movieCards.length).toBe(1);

    const searchInput = screen.getByPlaceholderText("Search Movies");
    fireEvent.change(searchInput, { target: { value: "civil" } });
    movieCards = await screen.findAllByText(/civil/i);
    expect(movieCards.length).toBe(1);
    expect(screen.getByText(/civil/i)).toBeInTheDocument();
  });

  test("renders loader before MovieCards", async () => {
    render(<Home />);

    const loader = await screen.findByTestId("loader");
    await waitForElementToBeRemoved(loader);
    const movieCards = await screen.findAllByText(/Ape/i);
    expect(movieCards.length).toBe(1);
  });
});
