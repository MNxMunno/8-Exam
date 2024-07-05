import React from "react";
import { NavLink } from "react-router-dom";

const Title = ({ text }) => {
  return (
    <div className="title">
      <NavLink to={"/"}>Главная</NavLink>
      <span>></span>
      <b>{text}</b>
    </div>
  );
};

export default Title;
