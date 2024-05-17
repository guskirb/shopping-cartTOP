import styles from "./home.module.css";

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
        <div className={styles.navBox}>
          <h2>Shop Laptops</h2>
        </div>
        <div className={styles.navBox}>
          <h2>Shop Headphones</h2>
        </div>
        <div className={styles.navBox}>
          <h2>Shop Phones</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
