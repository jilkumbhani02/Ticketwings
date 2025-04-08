import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Data from "../Data";
import "./Product.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaShare } from "react-icons/fa";
import profile1 from "../../Assets/profile1.png";
import profile2 from "../../Assets/profile2.png";
import { addToCart, removeFromCart } from "../CounterSlice";
import { useDispatch, useSelector } from "react-redux";

const Product = () => {
  const { id } = useParams();

  const cartItem = useSelector((item) => item.counter.items);

  const count = cartItem.find((item) => item.id.toString() === id);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const product = Data.filter((item) => item.id == id);

  const Change = (id) => {
    navigate("/product/" + id);
    window.scroll(0, 0);
  };

  const Book = () => {
    navigate("/Cart");
  };

  return (
    <div style={{ cursor: "pointer" }}>
      <div className="product container-md ">
        {product.map((item) => {
          return (
            <div className="d-flex flex-column pt-5">
              <div className="prod d-flex">
                <div
                  className="pro-left w-50 m-5 d-flex flex-column gap-3"
                  style={{ color: "whitesmoke" }}
                >
                  <img src={item.image} alt="" />
                  <div className="pro-left-divs">
                    <h4>About the event</h4>
                    <p>
                      Hidden Elements hits the #SeasonFinale with an
                      electrifying night paralleled with mad visuals and
                      non-stop grooves!
                    </p>
                    <p>
                      Time to cause wreckage with NASH headling with his
                      genre-defying sounds straight from his Boiler Room sets in
                      Delhi and Chandigarh. Known for his exhilarating mix of
                      Afro, House, Disco and UK Funky you all are in for a mad
                      rager scene.
                    </p>
                    <span>More</span>
                  </div>
                  <div className="pro-left-divs">
                    <h4>Offline Tickets</h4>
                    <div className="d-flex justify-content-between">
                      <div>9999999999</div>
                      <span>Call</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>9999999999</div>
                      <span>Call</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>9999999999</div>
                      <span>Call</span>
                    </div>
                  </div>
                  <div className="pro-left-divs">
                    <h4>Terms & Conditions</h4>
                    <ul>
                      <li>
                        Rights of admission are reserved, even to valid
                        Reservation holders.
                      </li>
                      <li>
                        Reservations once booked cannot be exchanged, cancelled,
                        or refunded
                      </li>
                    </ul>
                    <span>More</span>
                  </div>
                </div>
                <div
                  className="pro-right w-50 m-5  d-flex flex-column gap-2"
                  style={{ color: "whitesmoke" }}
                >
                  <button className="pro-right-btn">Others</button>
                  <h3>{item.name}</h3>
                  <div>
                    <FaLocationDot
                      className="me-2"
                      style={{ color: "#BC1EB5" }}
                    />
                    Lendra Park, New Ramdaspeth
                  </div>
                  <div className="show-time">{item.time}</div>
                  <div className="d-flex gap-3">
                    <div className="show-time">1 hr 30 mins</div>
                    <div className="show-time">21+ Years</div>
                    <div className="show-time">Punjabi</div>
                    <div className="show-time-share">
                      <FaShare />
                    </div>
                  </div>
                  <h3 style={{ color: "#71677A", fontWeight: "800" }}>
                    Artists
                  </h3>
                  <div className="d-flex gap-4">
                    <div>
                      <img className="artist-img" src={profile1} alt="" />
                      <p className="text-center" style={{ fontSize: "18px" }}>
                        Artist <br /> Name
                      </p>
                    </div>
                    <div>
                      <img className="artist-img" src={profile2} alt="" />
                      <p className="text-center" style={{ fontSize: "18px" }}>
                        Artist <br /> Name
                      </p>
                    </div>
                  </div>
                  <hr />
                  <h3 style={{ color: "#71677A", fontWeight: "800" }}>
                    Select Your Tickets
                  </h3>
                  <div className="d-flex justify-content-between">
                    <h4 style={{ fontWeight: "700" }}>Early Birds GA Female</h4>
                    <button className="coming">Coming Soon</button>
                  </div>
                  <div style={{ fontWeight: "600", fontSize: "18px" }}>
                    <del style={{ marginRight: "10px" }}>$ 900.00</del>
                    <span>$ {item.price}</span>
                  </div>
                  <span>Cover $ 100</span>
                  <ul>
                    <li> Entry for 1 person in Tuborg Lounge</li>
                    <li>Unlimited beer</li>
                    <li>Please review the layout before purchasing</li>
                    <li>Dedicated Entry, Exit and Restrooms</li>
                    <li>Elevated Viewing Platform</li>
                  </ul>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <h4 style={{ fontWeight: "700" }}>Early Birds GA Female</h4>
                    <div className="d-flex gap-2">
                      <button
                        disabled={count?.quantity ? false : true}
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="inde-btn"
                      >
                        -
                      </button>
                      <div className="count">
                        {count?.quantity ? count.quantity : 0}
                      </div>
                      <button
                        onClick={() => dispatch(addToCart(item))}
                        className="inde-btn"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <span>$ {item.price}</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure voluptate dolore non accusamus reiciendis aperiam rerum
                    itaque, aspernatur rem repellendus inventore ab ducimus
                    repellat omnis soluta neque error unde aut?
                  </p>
                  <ul>
                    <li> Entry for 1 person in Tuborg Lounge</li>
                    <li>Unlimited beer</li>
                    <li>Please review the layout before purchasing</li>
                    <li>Dedicated Entry, Exit and Restrooms</li>
                    <li>Elevated Viewing Platform</li>
                  </ul>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <h4 style={{ fontWeight: "700" }}>Early Birds GA Female</h4>
                    <button className="sold">Sold Out</button>
                  </div>
                  <span>$ {item.price}</span>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Officia alias soluta enim nisi assumenda blanditiis, quis
                    pariatur recusandae maiores error, sit aliquam laboriosam
                    necessitatibus iusto quia! Quae fugiat aliquam vel.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "40px 0px",
        }}
      >
        <div className="container d-flex flex-column gap-3">
          <div>
            <h4>Presented By</h4>
            <img className="artist-img" src={profile1} alt="" />
            <p>Artist Name</p>
          </div>
          <div>
            <h3 style={{ fontWeight: "700" }}>More Events</h3>
            <div className="d-flex gap-5 justify-content-center">
              {Data.map((item, index) =>
                index < 5 ? (
                  <div className="sug-box">
                    <img
                      className="sug-image"
                      src={item.image}
                      alt=""
                      onClick={() => Change(item.id)}
                    />
                    <h4 className="mt-2">{item.name}</h4>
                    <p style={{ color: "yellow" }}>$ {item.price} Onwards</p>
                    <div className="time">{item.time}</div>
                  </div>
                ) : (
                  <></>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          {count?.quantity ? (
            <button onClick={() => Book()} className="book">
              Book Ticket
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
