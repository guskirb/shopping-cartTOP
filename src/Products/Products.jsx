import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Shipping from "../Navigation/Shipping";

function Products() {
  const { params } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      !params
        ? "https://fakestoreapi.in/api/products"
        : `https://fakestoreapi.in/api/products/category?${params}`
    )
      .then((res) => res.json())
      .then((data) => setProducts([...products, data.products]));
  }, []);

  console.log(products)

  return (
    <>
      <Navigation />
      <Shipping />
      <h1>{params}</h1>
    </>
  );
}

export default Products;
