import { render, screen } from "@testing-library/react";
import AboutPage from "../../src/app/about/page";

describe("about", () => {
  it("renders about text", () => {
    render(<AboutPage />);
    expect(screen.getByText("about")).toBeInTheDocument();
  });
});
