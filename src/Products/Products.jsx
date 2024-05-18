import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Shipping from "../Navigation/Shipping";
import Footer from "../Navigation/Footer";
import styles from "./products.module.css";

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
      .then((data) => setProducts(data.products));
  }, [params]);

  const listProducts = products.map((item) => (
    <div className={styles.productBox} key={item.id}>
      <img src={item.image}></img>
      <h2 className={styles.produceTitle}>
        {item.title.length > 55
          ? item.title.substring(0, 55) + "..."
          : item.title}
      </h2>
      <h2>{`$${item.price}.00`}</h2>
    </div>
  ));

  console.log(products);

  return (
    <>
      <Navigation />
      <Shipping />
      <div className={styles.productsBody}>
        <div className={styles.categories}>
          <h2>Categories</h2>
          <ul>
            <Link to={params !== "type=tv" ? "/products/type=tv" : ""}>
              <li>TVs</li>
            </Link>
            <Link to={params !== "type=audio" ? "/products/type=audio" : ""}>
              <li>Audio</li>
            </Link>
            <Link to={params !== "type=laptop" ? "/products/type=laptop" : ""}>
              <li>Laptops</li>
            </Link>
            <Link to={params !== "type=mobile" ? "/products/type=mobile" : ""}>
              <li>Mobiles</li>
            </Link>
            <Link to={params !== "type=gaming" ? "/products/type=gaming" : ""}>
              <li>Gaming</li>
            </Link>
            <Link
              to={
                params !== "type=appliances" ? "/products/type=appliances" : ""
              }
            >
              <li>Appliances</li>
            </Link>
          </ul>
        </div>
        <div className={styles.productContainer}>{listProducts}</div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
