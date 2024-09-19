// __tests__/App.test.js
import React from "react";
import { render } from "@testing-library/react-native";
import App from "../App"; // Adjust the import based on your file structure

test("renders correctly", () => {
  const { getByText } = render(<App />);

  // Check if a specific text or element is present in the component
  expect(getByText("SplashScreen")).toBeTruthy();
});
