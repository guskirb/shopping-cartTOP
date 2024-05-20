import { render, screen } from "@testing-library/react";
import App from "./App";
import Cart from "./Navigation/Cart";
import Navigation from "./Navigation/Navigation";
import Footer from "./Navigation/Footer";

describe("App component", () => {
  it("renders app", () => {
    render(<App path={"checkout"} />);
    expect(screen.getByText('TechStore'));
  });
});

describe("Footer component", () => {
  it("renders footer component", () => {
    render(<Footer />);
    expect(screen.getByText('Contact'));
  });
});
