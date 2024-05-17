import styles from "./home.module.css";

function Home() {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.bannerText}>
          <h1 className={styles.bannerHeader}>The iPhone</h1>
          <p>New Camera. New Design.</p>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
