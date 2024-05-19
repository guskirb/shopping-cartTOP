import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./navigation.module.css";
import { Link } from "react-router-dom";

function Navigation({ handleSearch, search, cart, handleSetCart }) {
  const navigate = useNavigate();

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      navigate("/products", { state: search });
    }
  }

  return (
    <>
      <div className={styles.navBar}>
        <Link to="/" className={styles.header} >
          <h1>TechStore</h1>
        </Link>
        <div className={styles.searchBar}>
          <input
            type="text"
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
          ></input>
          <Link to="/products" state={search}>
            <button className={styles.searchButton}></button>
          </Link>
        </div>
        <Link to="/products" state="">
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
