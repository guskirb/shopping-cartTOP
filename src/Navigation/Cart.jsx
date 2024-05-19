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
  addAmount,
  removeAmount,
}) {
  const listCart = cart.map((item) => (
    <div className={styles.cartItem} key={item.item.id}>
      <img src={item.item.image}></img>
      <div>
        <h2>{item.item.title}</h2>
        <div className={styles.cartPrice}>
          <div className={styles.quantity}>
            <button id={item.item.id} onClick={removeAmount}>
              -
            </button>
            <h2>{item.amount}</h2>
            <button id={item.item.id} onClick={addAmount}>
              +
            </button>
          </div>
          <h2>{"$" + item.item.price * item.amount + ".00"}</h2>
        </div>
      </div>
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
        {cart.length === 0 ? (
          <p className={styles.emptyMessage}>Your cart is empty.</p>
        ) : (
          <>
            <div className={styles.cartContainer}>{listCart}</div>
            <div className={styles.checkout} />
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
