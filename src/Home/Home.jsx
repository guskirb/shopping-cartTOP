import styles from "./home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.banner}>
        <div className={styles.bannerText}>
          <h1 className={styles.bannerHeader}>The iPhone</h1>
          <p>New Camera. New Design.</p>
          <button>Buy Now</button>
        </div>
      </div>
      <div className={styles.container}>
        <Link to="products/type=laptop">
          <div className={styles.laptop}>
            <h2>Shop Laptops</h2>
          </div>
        </Link>
        <Link to="products/type=mobile">
          <div className={styles.phone}>
            <h2>Shop Phones</h2>
          </div>
        </Link>
        <Link to="products/type=audio">
        <div className={styles.headphone}>
          <h2>Shop Audio</h2>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
