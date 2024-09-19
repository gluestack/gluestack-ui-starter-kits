import React from "react";
import { render, screen } from "@testing-library/react-native";
import App from "../app/index";

test("renders correctly", () => {
  render(<App />);

  // Check if a specific text or element is present in the component
  expect(screen.getByText("SplashScreen")).toBeTruthy();
});
