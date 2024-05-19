import styles from "./navigation.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.footerLinks}>
        <ul>
          <h2>About us</h2>
          <li>Company</li>
          <li>Blog</li>
          <li>Contact us</li>
        </ul>
        <ul>
          <h2>Delivery</h2>
          <li>Collect & Replace</li>
          <li>Dispatch & Delivery</li>
          <li>Parcel Tracking</li>
          <li>Returns Policy</li>
        </ul>
        <ul>
          <h2>Help</h2>
          <li>Terms & conditions</li>
          <li>Privacy policy & cookies</li>
          <li>Contact us</li>
          <li>Newsletter</li>
        </ul>
        <ul>
          <h2>Contact</h2>
          <li>TechStore Ltd</li>
          <li>
            1234 Fake Street <br /> Faketon <br /> New York <br /> 56789
          </li>
        </ul>
      </div>
      <div className={styles.logos}>
        <div className={styles.facebook}></div>
        <div className={styles.twitter}></div>
        <a href="https://github.com/guskirb">
          <div className={styles.github}></div>
        </a>
        <div className={styles.youtube}></div>
      </div>
    </footer>
  );
}

export default Footer;
