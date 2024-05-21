import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import ErrorPage from "./ErrorPage";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  function handleSearch(e) {
    setSearch(e.target.value.toLowerCase());
  }

  function handleSetCart(e) {
    let duplicate = false;
    let item = products.find((item) => item.id === parseInt(e.target.id));

    cart.forEach((element) => {
      if (element.item.id === parseInt(e.target.id)) {
        element.amount++;
        duplicate = true;
        setCart([...cart]);
      }
    });

    if (!duplicate) {
      setCart([...cart, { item, amount: 1 }]);
    }
  }

  function addAmount(e) {
    cart.forEach((element) => {
      if (element.item.id === parseInt(e.target.id)) {
        element.amount++;
        setCart([...cart]);
      }
    });
  }

  function removeAmount(e) {
    cart.forEach((element) => {
      if (element.item.id === parseInt(e.target.id)) {
        if (element.amount === 1) {
          cart.splice(cart.indexOf(element), 1);
          setCart([...cart]);
        }
        element.amount--;
        setCart([...cart]);
      }
    });
  }

  function removeItem(e) {
    cart.forEach((element) => {
      if (element.item.id === parseInt(e.target.id)) {
        cart.splice(cart.indexOf(element), 1);
        setCart([...cart]);
      }
    });
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
      errorElement: (
        <ErrorPage
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
      errorElement: (
        <ErrorPage
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
      errorElement: (
        <ErrorPage
          handleSearch={handleSearch}
          search={search}
          cart={cart}
          handleSetCart={handleSetCart}
        />
      ),
    },
    {
      path: "cart",
      element: (
        <Cart
          handleSearch={handleSearch}
          search={search}
          cart={cart}
          handleSetCart={handleSetCart}
          addAmount={addAmount}
          removeAmount={removeAmount}
          removeItem={removeItem}
        />
      ),
      errorElement: (
        <ErrorPage
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
