import { useEffect } from "react";

function Products() {
  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);
}
