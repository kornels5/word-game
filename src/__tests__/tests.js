import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("Greeting", () => {
  it("renders Greeting", () => {
    render(<App />);
    expect(screen.getByText("hello world")).toBeTruthy();
  });
});
