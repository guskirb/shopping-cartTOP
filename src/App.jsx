import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Products from "./Products/Products";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  function handleSearch(e) {
    setSearch(e.target.value.toLowerCase());
  }

  function handleSetCart(e) {
    console.log(e);
  }
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          handleSearch={handleSearch}
          search={search}
          cart={cart}
          handleSetCart={handleSetCart}
        />
      ),
    },
    {
      path: "products",
      element: (
        <Products
          products={products}
          setProducts={setProducts}
          handleSearch={handleSearch}
          search={search}
          cart={cart}
          handleSetCart={handleSetCart}
        />
      ),
    },
    {
      path: "products/:params",
      element: (
        <Products
        products={products}
          setProducts={setProducts}
          handleSearch={handleSearch}
          search={search}
          cart={cart}
          handleSetCart={handleSetCart}
        />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
