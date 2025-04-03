import React from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.png";
import logo1 from "../../Assets/Group 1.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar d-flex gap-5">
      <div className="company_logo">
        <img onClick={() => navigate("/")} src={logo} alt="" className="logo" />
        <img src={logo1} alt="" className="logo1" />
      </div>
      <div className="d-flex gap-2 align-items-center">
        <div>
          <FaLocationDot style={{ color: "#BC1EB5", fontSize: "24px" }} />
        </div>
        <div>Nagpur</div>
        <div>
          <MdEdit />
        </div>
        <div
          style={{ color: "#575173", fontSize: "30px" }}
          className="inputhide"
        >
          |
        </div>
        <div>
          <input
            type="text"
            placeholder="Search Artist Name , Event Or Location"
            style={{ backgroundColor: "#4E384D" }}
            className="navbar_input inputhide"
          />
        </div>
      </div>
      <div className="d-flex gap-5 align-items-center">
        <div className="hide">Download App</div>
        <div className="hide">About Us</div>
        <div className="hide">Partners</div>
        <div className="hide">Login/SignUp</div>
        <div>
          <CgProfile style={{ fontSize: "30px" }} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
