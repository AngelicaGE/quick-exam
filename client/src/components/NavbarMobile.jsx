import React from "react";
import Logo from "../rsc/images/logo-nav.PNG";

export const NavbarMobile = ({ tabs, user, signOut }) => {
  return (
    <div className="NavbarMobile">
      <div>
        <img className="logo" src={Logo} alt="" />
      </div>
      <div className="sandwhich-menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
