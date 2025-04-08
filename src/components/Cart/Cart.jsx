import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../CounterSlice";

const Cart = () => {
  const cartItem = useSelector((item) => item.counter.items);

  const dispatch = useDispatch();

  return (
    <div className="cart p-5" style={{ minHeight: "94vh" }}>
      <div className="d-flex flex-wrap justify-content-center gap-5">
        {cartItem.length === 0 ? (
          <h3 className="text-white text-center">
            No Tickets Found Please Add Some one
          </h3>
        ) : (
          cartItem.map((item) => {
            return (
              <div>
                <div
                  className="ticket"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    height: "fit-content",
                    width: "230px",
                    borderRadius: "16px",
                  }}
                >
                  <div
                    style={{
                      padding: "20px",
                    }}
                  >
                    <h4>{item.name}</h4>
                    <div>
                      <div>Show Time : </div>
                      {item.time}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    height: "fit-content",
                    width: "230px",
                    borderRadius: "16px",
                  }}
                >
                  <hr style={{ border: "1px dashed black",margin:"0px" }} />
                  <div style={{ padding: "20px" }}>
                    <h5>Price : $ {item.price}</h5>
                    <div>
                      Valid For
                      <div className="d-flex align-items-center">
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                          style={{ height: "fit-content" }}
                          className="btn btn-danger"
                        >
                          -
                        </button>
                        <h1
                          style={{
                            width: "fit-content",
                            margin: "auto",
                            padding: "4px 18px",
                          }}
                        >
                          {item.quantity}
                        </h1>
                        <button
                          onClick={() => dispatch(addToCart(item))}
                          style={{ height: "fit-content" }}
                          className="btn btn-success"
                        >
                          +
                        </button>
                      </div>
                      Person
                    </div>
                    <h4>Pay : $ {item.price * item.quantity}</h4>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Cart;
