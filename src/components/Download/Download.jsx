import React from "react";
import "./Download.css";
import logo from "../../Assets/logo.png";
import android from "../../Assets/App Store.png";
import apple from "../../Assets/Google Play.png";
import a_scanner from "../../Assets/Android QR.png";
import ap_scanner from "../../Assets/appleQR.png";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Download = ({ setShow }) => {
  return (
    <div className="do" style={{ height: "100vh", width: "100vw" }}>
      <div
        className="download flex-column d-flex justify-content-center m-auto gap-3"
        style={{ height: "94vh", width: "500px", cursor: "pointer" }}
      >
        <div className="ms-auto">
          <IoMdCloseCircleOutline
            onClick={() => setShow(false)}
            style={{ color: "white", fontSize: "40px" }}
          />
        </div>
        <div className="download-box d-flex flex-column align-items-center text-center text-white gap-3">
          <img className="w-50" src={logo} alt="" />
          <p style={{ fontSize: "14px" }}>
            Data privacy and security practices may vary based <br />
            on your use, region, and age.
          </p>
          <div className="d-flex gap-5">
            <div className="d-flex flex-column gap-4 align-items-center">
              <img style={{ width: "180px" }} src={a_scanner} alt="" />
              <img style={{ width: "140px" }} src={android} alt="" />
            </div>
            <div className="d-flex flex-column gap-4 align-items-center">
              <img style={{ width: "180px" }} src={ap_scanner} alt="" />
              <img style={{ width: "140px" }} src={apple} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
