import Navigation from "./Navigation/Navigation";
import Footer from "./Navigation/Footer";
import Shipping from "./Navigation/Shipping";
import styles from "./Home/home.module.css";
import { Link } from "react-router-dom";

function ErrorPage({ handleSearch, search, cart, handleSetCart }) {
  return (
    <>
      <Navigation
        handleSearch={handleSearch}
        search={search}
        cart={cart}
        handleSetCart={handleSetCart}
      />
      <Shipping />
      <div className={styles.errorPage}>
        <h1>Oops!</h1>
        <h2>Nothing to see here!</h2>
        <p>
          That page is temporarily unavailable, but you can find more amazing
          tech on our homepage.
        </p>
        <Link to="/">
          <button>Go to homepage</button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default ErrorPage;
