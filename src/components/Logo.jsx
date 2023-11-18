import React from "react";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to={"/"} className="navbar-brand logo-box">
      <img className="logo-img" src="/img/logo.png" alt="logo" />
      <span>Santa Maria</span>
    </Link>
  );
};
