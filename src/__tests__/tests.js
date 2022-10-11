// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import getNodeText from "../tests/getNodeText";
// import App from "../components/App";
// import GameBoard from "../components/GameBoard";

// describe("Component tests", () => {
//   it("renders title", () => {
//     render(<App />);
//     expect(screen.getByText("Word Game")).toBeTruthy();
//   });
// });

// describe("Event tests", () => {
//   it("render proper word after writing it", async () => {
//     render(<GameBoard />);
//     await fireEvent.keyDown(screen.getByTestId("scoreboard"), { key: "h" });
//     console.log(screen.getByTestId("letter-0"));
//     expect(getNodeText(screen.getByTestId("letter-0"))).toHaveTextContent("h");
//     expect(screen.getByTestId("letter-1")).toHaveTextContent("o");
//     expect(screen.getByTestId("letter-2")).toHaveTextContent("u");
//     expect(screen.getByTestId("letter-3")).toHaveTextContent("s");
//     expect(screen.getByTestId("letter-4")).toHaveTextContent("e");
//   });
// });
