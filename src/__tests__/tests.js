import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import Scoreboard from "../components/Scoreboard";

describe("Component structure tests", () => {
  it("renders title", () => {
    render(<App />);
    expect(screen.getByText("Word Game")).toBeTruthy();
  });

  it("renders scoreboard with 25 elements", () => {
    render(<Scoreboard letters={25} />);
    expect(screen.getByTestId("scoreboard").childElementCount).toEqual(25);
  });
});
