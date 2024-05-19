import styles from "./navigation.module.css";
import Navigation from "../Navigation/Navigation";
import Shipping from "../Navigation/Shipping";
import Footer from "../Navigation/Footer";

function Cart({
  products,
  setProducts,
  handleSearch,
  search,
  cart,
  handleSetCart,
}) {
  const listCart = cart.map((item) => (
    <div className={styles.cartItem} key={item.item.id}>
      <img src={item.item.image}></img>
      <h2>{item.item.title}</h2>
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
      <div className={styles.checkoutContainer}>
        <div className={styles.cartContainer}>
          {cart.length === 0 ? <p>Cart Empty</p> : <>{listCart}</>}
        </div>
        <div className={styles.checkout}>
            
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
