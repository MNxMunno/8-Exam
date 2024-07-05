import React, { useState } from "react";
import { IoSearch, IoHome } from "react-icons/io5";
import { FaRegUser, FaRegHeart, FaFire, FaChevronDown } from "react-icons/fa";
import { TbAntennaBars5, TbCategory2 } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { LuGitCompare } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { RiAdminLine, RiMenu2Line } from "react-icons/ri";
import logo from "../../assets/images/logo.svg";
import Navbartop from "../navbarTop/Navbartop";
function Header() {
  const [toggel, setToggel] = useState(false);
  return (
    <>
      <Navbartop />
      <header>
        <div className="container">
          <nav>
            <NavLink to={"/"} className="navbar__logo">
              <img src={logo} alt="" />
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
