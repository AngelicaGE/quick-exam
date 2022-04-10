import React from "react";
import "../styles/LandingMain.scss";
import PlayIcon from "../rsc/icons/play.PNG";
import RateElement from "../rsc/images/rate.PNG";
import PhoneImg from "../rsc/images/phone.jpg";

const LandingMain = () => {
  return (
    <div className="LandingMain">
      <div className="left-upper">
        <h1 className="title"><b>Zero Hassle Push to Talk conversations</b></h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          sollicitudin, nulla et ullamcorper sagittis, lacus ante mollis est,
          vitae mollis nulla augue vitae turpis.{" "}
        </p>
        <div className="second-content">
          <div className="demo-btns">
            <button className="demo-btn btn flex-row center-center">
              <img src={PlayIcon} alt="Demo icon" />
              &nbsp;Demo
            </button>
            <button className="blue-btn">Get started</button>
          </div>
          <div className="review-container">
            <img src={RateElement} alt="rate element" />
          </div>
        </div>
      </div>
      <div className="right-lower">
          <div className="gray-bg">
              <div>
              <img src={PhoneImg} alt="" />
              </div>
          </div>
      </div>
    </div>
  );
};

export default LandingMain;
