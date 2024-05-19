import styles from "./navigation.module.css";
import Navigation from "../Navigation/Navigation";
import Shipping from "../Navigation/Shipping";
import Footer from "../Navigation/Footer";
import { useEffect, useState } from "react";

function Cart({
  products,
  setProducts,
  handleSearch,
  search,
  cart,
  handleSetCart,
  addAmount,
  removeAmount,
  removeItem,
}) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, item) => (acc += item.item.price * item.amount), 0));
  }, [cart]);

  const listCart = cart.map((item) => (
    <div className={styles.cartItem} key={item.item.id}>
      <img src={item.item.image}></img>
      <div>
        <div className={styles.cartUpper}>
          <h2>{item.item.title}</h2>
          <button
            id={item.item.id}
            onClick={removeItem}
            className={styles.trash}
          ></button>
        </div>
        <div className={styles.cartPrice}>
          <div className={styles.quantity}>
            <button
              id={item.item.id}
              onClick={removeAmount}
              className={styles.minus}
            ></button>
            <h2>{item.amount}</h2>
            <button
              id={item.item.id}
              onClick={addAmount}
              className={styles.plus}
            ></button>
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
            <div className={styles.checkout}>
              <h2>Total</h2>
              <h2>{"$"+ total + ".00"}</h2>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
