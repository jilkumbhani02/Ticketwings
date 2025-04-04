import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Data from "../Data";
import "./Collection2.css";

const Collection2 = () => {
  const [menu, setMenu] = useState("all");
  const navigate = useNavigate();

  const Change = (id) => {
    navigate("/product/" + id);
  };

  return (
    <div
      className="collection2 text-white pt-5"
      style={{ margin: "0px 100px" }}
    >
      <div className="d-flex flex-column gap-4">
        <div className="d-flex gap-5">
          <div className="newly">In Your City</div>
          <div className="act">View All</div>
        </div>
        <div className="d-flex gap-3">
          <div
            onClick={() => setMenu("all")}
            className={menu === "all" ? "acti" : "extra"}
          >
            All
          </div>
          <div
            onClick={() => setMenu("club")}
            className={menu === "club" ? "acti" : "extra"}
          >
            Club
          </div>
          <div
            onClick={() => setMenu("concert")}
            className={menu === "concert" ? "acti" : "extra"}
          >
            Concert
          </div>
          <div
            onClick={() => setMenu("others")}
            className={menu === "others" ? "acti" : "extra"}
          >
            Others
          </div>
        </div>
      </div>
      <div className="collect d-flex gap-5 justify-content-center flex-wrap mt-5">
        {Data.map((item, index) =>
          index < 15 ? (
            <div className="full d-flex flex-column gap-1" key={index}>
              <img onClick={() => Change(item.id)} src={item.image} alt="" />
              <h4>{item.name}</h4>
              <p style={{ color: "yellow" }}>$ {item.price} Onwards</p>
              <div className="time">{item.time}</div>
            </div>
          ) : (
            <></>
          )
        )}
      </div>
    </div>
  );
};

export default Collection2;
