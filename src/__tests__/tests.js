import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../components/App";
import Scoreboard from "../components/Scoreboard";

describe("Component tests", () => {
  it("renders title", () => {
    render(<App />);
    expect(screen.getByText("Word Game")).toBeTruthy();
  });

  it("renders scoreboard with 25 elements", () => {
    render(<Scoreboard letters={25} />);
    expect(screen.getByTestId("scoreboard").childElementCount).toEqual(25);
  });
});

describe("Event tests", () => {
  it("render proper word after writing it", () => {
    const user = userEvent.setup();
    render(<Scoreboard letters={25} />);
    user.type("house");
    expect(screen.getByTestId("letter-1")).toHaveTextContent("h");
    expect(screen.getByTestId("letter-2")).toHaveTextContent("o");
    expect(screen.getByTestId("letter-3")).toHaveTextContent("u");
    expect(screen.getByTestId("letter-4")).toHaveTextContent("s");
    expect(screen.getByTestId("letter-5")).toHaveTextContent("e");
  });
});
