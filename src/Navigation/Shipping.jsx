import styles from "./navigation.module.css";

function Shipping() {
  return (
    <div className={styles.saleBar}>
      <div>
        <div className={styles.deliveryIcon}></div>
        <div>
          <h2>Free Delivery</h2>
          <p>On orders over $50</p>
        </div>
      </div>
      <div>
        <div className={styles.collectIcon}></div>
        <div>
          <h2>Free Collection</h2>
          <p>Order online and collect once it's available</p>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
