import { useEffect } from "react";
import styles from "./navigation.module.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <div className={styles.navBar}>
        <Link to="/" className={styles.header}>
          <h1>TechStore</h1>
        </Link>
        <div className={styles.searchBar}>
          <input type="text"></input>
          <button className={styles.searchButton}></button>
        </div>
        <Link to="products">
          <button>Shop All</button>
        </Link>
        <button>About</button>
        <div className={styles.shoppingCart}></div>
        <div className={styles.cartNum}>1</div>
      </div>
    </>
  );
}

export default Navigation;
