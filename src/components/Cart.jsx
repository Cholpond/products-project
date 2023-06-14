import React, { useContext } from 'react';
import { MyContext } from "../context/MyContext";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const Cart = () => {
  const { cart, removeFromCart, toggleModal } = useContext(MyContext);
  console.log(cart, "cart");
  return (
    <>
      {cart.map((item) => {
        return (
          <div key={item?.id}>
            <div className="cart-product">
              <img src={item?.fields?.image[0].url}/>
              <span>{item?.fields?.name}</span>
              <span>{item?.fields?.company}</span>
              <span>${item?.fields?.price}</span>
            </div>
            <button
              onClick={() => {
                removeFromCart(item?.id);
              }}
            >
              Remove from Cart
            </button>
            <Link to={"/checkout"}>
              <button
                onClick={() => {
                  toggleModal();
                }}
              >
                Proceed to Checkout
              </button>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Cart;
