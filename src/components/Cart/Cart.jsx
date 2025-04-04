import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../CounterSlice";
import "./Cart.css";

const Cart = () => {
  const cartItem = useSelector((item) => item.counter.items);

  const dispatch = useDispatch();

  return (
    <div className="cart p-5">
      <div className="d-flex flex-column gap-5">
        {cartItem &&
          cartItem.map((item) => {
            return (
              <div
                style={{ height: "300px" }}
                className="d-flex  w-50 m-auto gap-5 text-white"
              >
                <img className="h-100 w-25" src={item.image} alt="" />
                <div>
                  <h1>{item.name}</h1>
                  <p>{item.time}</p>
                  <span>$ {item.price}</span>
                  <div className="d-flex gap-2 mt-3">
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="inde-btn"
                    >
                      -
                    </button>
                    <div className="count">{item.quantity}</div>
                    <button
                      onClick={() => dispatch(addToCart(item))}
                      className="inde-btn"
                    >
                      +
                    </button>
                  </div>
                  <h2 className="mt-3">
                    Total : <span>{item.quantity * item.price}</span>
                  </h2>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cart;
