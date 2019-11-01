import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";
import Card from "./components/Card";

test("App renders without crashing", () => {
  render(<App />);
});

test("Cards render", () => {
  render(<App />);
  render(<Card />);
});

// test("Clicking name will change class of body to 'dark-mode'", () => {
//   render(<App />);
//   const nameDiv = document.getElementsByTagName(h1);
//   const documentBody = document.getElementsByTagName(body);

//   fireEvent.click(nameDiv);
//   expect(documentBody).toHaveClass("dark-mode");
// });
