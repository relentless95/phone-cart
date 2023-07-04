import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useGlobalContext } from "../context/Context";

const CartItem = () => {
  return (
    <article className="cart-item">
      <img src={"#"} alt={"#"} />
      <div>
        <h5>title</h5>
        <span className="item-price">price</span>
        <button className="remove-btn">remove</button>
      </div>
      <div>
        <button className="amount-btn">
          <FaChevronUp className="amount-icon" />
        </button>
        <span className="amount">amount</span>
        <button className="amount-btn">
          <FaChevronDown className="" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
