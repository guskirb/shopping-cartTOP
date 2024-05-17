import { useEffect } from "react";
import styles from "./navigation.module.css";

function Navigation() {
  return (
    <div className={styles.navBar}>
      <h1 className={styles.header}>TechStore</h1>
      <div>
        <input type="text" className={styles.searchBar}></input>
        <button className="searchButton">Search</button>
      </div>
      <button>Shop All</button>
      <button>About</button>
    </div>
  );
}

export default Navigation;
