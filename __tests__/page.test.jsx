import Home from "../src/app/page";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  test("renders main element", () => {
    render(<Home />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });

  test("renders hello world text", () => {
    render(<Home />);
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });

  test("main has correct className", () => {
    render(<Home />);
    expect(screen.getByRole("main")).toHaveClass(
      "flex min-h-screen flex-col items-center justify-between p-24"
    );
  });
});
