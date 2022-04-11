import React from "react";
import "../styles/Footer.scss";
import LogoDarkImage from "../rsc/images/logo-dark.PNG";
import AppStoreImage from "../rsc/images/app-store.PNG";
import GooglePlayImage from "../rsc/images/google-play.PNG";
import SocialNetsImage from "../rsc/images/socials.PNG";
import { Link, NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-cont">
        <div className="upper">
          <div className="upper-left">
            <img src={LogoDarkImage} alt="Our business logo" />
            <p className="message">
              This is a text very nice and random, just to show some text on the
              footer jejeje xd.{" "}
            </p>
            <div className="footer-links flex-row">
              <div className="links-group grp-1">
                <NavLink to={`/Overview`}>Overview</NavLink>
                <NavLink to={`/Features`}>Features</NavLink>
                <NavLink to={`/Pricing`}>Pricing</NavLink>
              </div>
              <div className="links-group grp-2">
                <NavLink to={`/Careers`}>Careers</NavLink>
                <NavLink to={`/Help`}>Help</NavLink>
                <NavLink to={`/Privacy`}>Privacy</NavLink>
              </div>
            </div>
          </div>
          <div className="upper-right">
            <p>Get the app</p><br />
            <div className="stores-group">
              <img src={AppStoreImage} alt="Link to app store" />
              <img src={GooglePlayImage} alt="Link to google play" />
            </div>
          </div>
        </div>
        <div className="hr-cont">
          <hr />
        </div>
        <div className="lower">
          <div className="left-bottom">
              <p>@ 2022 FlexBip. All rights reserved.</p>
          </div>
          <div className="right-top">
              <img src={SocialNetsImage} alt="our social networks" />
          </div>
        </div>
      </div>
    </div>
  );
};
