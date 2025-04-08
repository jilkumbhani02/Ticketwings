import React from "react";
import { useRef } from "react";
import { useState } from "react";
import Data from "../Data";
import "./Collection.css";
import { TfiControlForward } from "react-icons/tfi";
import { TfiControlBackward } from "react-icons/tfi";
import image1 from "../../Assets/1.jpg";
import image2 from "../../Assets/2.jpg";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

const Collection = () => {
  const [menu, setMenu] = useState("Any");

  const navigate = useNavigate();

  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -100) {
      tx -= 100;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 100) {
      tx += 100;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const Change = (id) => {
    navigate("/product/" + id);
  };

  return (
    <div className="collection d-flex flex-column gap-5 mb-5">
      <div className="abc d-flex justify-content-between menu align-items-center">
        <div className="d-flex gap-5">
          <div className="newly">Newly Added</div>
          <div className="act">View All</div>
        </div>
        <div className="d-flex gap-5 align-items-center">
          <div
            onClick={() => setMenu("Any")}
            className={menu === "Any" ? "act" : ""}
          >
            Any
          </div>
          <div
            onClick={() => setMenu("Today")}
            className={menu === "Today" ? "act" : ""}
          >
            Today
          </div>
          <div
            onClick={() => setMenu("Week")}
            className={menu === "Week" ? "act" : ""}
          >
            This Week
          </div>
          <div
            onClick={() => setMenu("Month")}
            className={menu === "Month" ? "act" : ""}
          >
            This Month
          </div>
        </div>
      </div>
      <div className="slider">
        <div className="coll d-flex gap-5 justify-content-center" ref={slider}>
          {Data.map((item, index) =>
            index < 15 ? (
              <div className="box" key={index}>
                <img
                  className="box-image"
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
      <div className="navigation navi-right" onClick={slideForward}>
        <TfiControlForward />
      </div>
      <div className="navigation navi-left" onClick={slideBackward}>
        <TfiControlBackward />
      </div>
      <div className="d-flex gap-5 justify-content-center mt-5 cenimg">
        <div className="bod">
          <img className="bodimage" src={image1} alt="" />
        </div>
        <div className="bod">
          <img className="bodimage" src={image2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Collection;
