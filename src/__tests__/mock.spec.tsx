import { render, screen } from "@testing-library/react";

import App from "../App";

describe("App", () => {
  it("should render", () => {
    render(<App />);

    const text = screen.getByText("Hello Vite + React!");

    expect(text).toBeInTheDocument();
  });
});
