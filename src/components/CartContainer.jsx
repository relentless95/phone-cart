import React from "react";

const CartContainer = () => {
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div></div>
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total<span></span>
          </h5>
        </div>
        <button className="btn btn-hipster">clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
