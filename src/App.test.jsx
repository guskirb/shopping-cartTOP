import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
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

describe("Cart component", () => {
  it("renders empty cart component", () => {
    render(<BrowserRouter><Cart cart={[]} /></BrowserRouter>);
    expect(screen.getByText('Your cart is empty.'));
  });
});

describe("Cart component", () => {
  it("renders cart component with product", () => {
    render(<BrowserRouter><Cart cart={[{item:{title:'phone', id: 1}, amount: 1}]} /></BrowserRouter>);
    expect(screen.getByText('phone'));
  });
});
