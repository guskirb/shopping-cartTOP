import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Products from "./Products/Products";

function App() {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value.toLowerCase());
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home handleSearch={handleSearch} search={search}/>,
    },
    {
      path: "products",
      element: <Products handleSearch={handleSearch} search={search}/>,
    },
    {
      path: "products/:params",
      element: <Products handleSearch={handleSearch} search={search}/>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
