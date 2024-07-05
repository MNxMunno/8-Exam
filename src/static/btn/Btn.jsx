import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Btn = ({ text }) => {
  return (
    <a className="btn" href="#">
      {text} <FaArrowRightLong />
    </a>
  );
};

export default Btn;
