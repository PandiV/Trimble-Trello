import React from "react";
import Logo from "assets/trimble-logo.png";

const Header = ({ currentUser, resetUsers }) => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Trimble" />
        {/* <BrandName /> */}
      </div>
      <i className="fa fa-bars hamburger"></i>
      <nav id="menu">
        <p>
          Welcome, <b>{currentUser}</b>
        </p>
        <p className="_h-pointer" onClick={() => resetUsers()}>
          Logout
        </p>
      </nav>
    </header>
  );
};

export default Header;
