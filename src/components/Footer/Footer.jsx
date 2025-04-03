import React from "react";
import "./Footer.css";
import logo from "../../Assets/logo.png";

const Footer = () => {
  return (
    <div className="footer text-white">
      <div className="upper_footer d-flex justify-content-between align-items-center">
        <div className="footer_image">
          <img src={logo} alt="" />
        </div>
        <div className="d-flex gap-5">
          <div className="footer_menu">Partners</div>
          <div className="footer_menu">Contact Us</div>
          <div className="footer_menu">Media Kit</div>
        </div>
      </div>
      <hr />
      <div className="lower_footer d-flex justify-content-between align-items-center">
        <div>@ 2024 TicketWings</div>
        <div className="d-flex gap-5">
          <div>Privacy Policy</div>
          <div>Turms & Condition</div>
          <div>Refund & Cancellation</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
