import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Shipping from "../Navigation/Shipping";
import Footer from "../Navigation/Footer";
import styles from "./products.module.css";

function Products({
  products,
  setProducts,
  handleSearch,
  search,
  cart,
  handleSetCart,
}) {
  const location = useLocation();
  const { params } = useParams();
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(location.state);

  useEffect(() => {
    fetch(
      !params
        ? "https://fakestoreapi.in/api/products"
        : `https://fakestoreapi.in/api/products/category?${params}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .finally(setLoading(false));

    return setProducts([]);
  }, [params]);

  useEffect(() => {
    setFilter(location.state);
  }, [location]);

  const listProducts = products
    .filter((item) =>
      item.title.toLowerCase().includes(filter === null ? "" : filter)
    )
    .map((item) => (
      <div className={styles.productBox} key={item.id}>
        <img src={item.image}></img>
        <h2 className={styles.productTitle}>
          {item.title.length > 55
            ? item.title.substring(0, 55) + "..."
            : item.title}
        </h2>
        <div className={styles.productLower}>
          <h2>{`$${item.price}.00`}</h2>
          <button id={item.id} onClick={handleSetCart}>
            Add to Cart
          </button>
        </div>
      </div>
    ));

  return (
    <>
      <Navigation
        handleSearch={handleSearch}
        search={search}
        cart={cart}
        handleSetCart={handleSetCart}
      />
      <Shipping />
      {loading ? (
        <div>loading</div>
      ) : (
        <>
          <div className={styles.productsBody}>
            <div className={styles.categories}>
              <h2>Categories</h2>
              <ul>
                <Link to="/products/type=tv">
                  <li>TVs</li>
                </Link>
                <Link to="/products/type=audio">
                  <li>Audio</li>
                </Link>
                <Link to="/products/type=laptop">
                  <li>Laptops</li>
                </Link>
                <Link to="/products/type=mobile">
                  <li>Mobiles</li>
                </Link>
                <Link to="/products/type=gaming">
                  <li>Gaming</li>
                </Link>
                <Link to="/products/type=appliances">
                  <li>Appliances</li>
                </Link>
              </ul>
            </div>
            <div className={styles.productContainer}>{listProducts}</div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default Products;
