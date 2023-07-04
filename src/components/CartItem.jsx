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
      </div>
    </article>
  );
};

export default CartItem;
