import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";
import Card from "./components/Card";

test("App renders without crashing", () => {
  render(<App />);
});

test("Cards render without crashing", () => {
  render(<App />);
  render(<Card />);
});

test("Loading message works", () => {
  const { getByTestId } = render(<Card />);

  expect(getByTestId("loading")).toHaveTextContent("Loading");
});
