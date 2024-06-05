import React from "react";
import { ReactDOM } from "react";
import { Home } from "../views";
import { render, screen } from "@testing-library/react";

test("renders title in", () => {
  render(<Home />);
  const title = screen.getByText(/popular/i);
  expect(title).toBeInTheDocument();
});

test("Renders movie container", () => {
  
  const {container} = render(<Home/>)
  
});
