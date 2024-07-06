import React, { useState } from "react";
import { IoSearch, IoHome } from "react-icons/io5";
import { FaRegUser, FaRegHeart, FaFire, FaChevronDown } from "react-icons/fa";
import { TbAntennaBars5, TbCategory2 } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { LuGitCompare } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { RiAdminLine, RiMenu2Line } from "react-icons/ri";
import logo from "../../assets/images/logo.svg";
import Navbartop from "../navbarTop/Navbartop";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { useSelector } from "react-redux";
function Header() {
  const [toggel, setToggel] = useState(false);
  const navigate = useNavigate();
  const cart = useSelector((s) => s.cart.value);
  const wisht = useSelector((s) => s.wishlist.value);

  return (
    <>
      <Navbartop />
      <header>
        <div className="container">
          <nav>
            <NavLink to={"/"} className="navbar__logo">
              <img src={logo} alt="" />
            </NavLink>
            <button>
              <RiMenu2Line /> Каталог
            </button>
            <div className="search__input">
              <input type="text" className="search" />
            </div>
            <div className="nav__items">
              <button onClick={() => navigate("/wishlist")}>
                <sup>{wisht.length}</sup>
                <IoIosHeartEmpty />
                Избранное
              </button>
              <button>
                <TbAntennaBars5 onClick={() => navigate("/antena")} />
                Сравнение
              </button>
              <button>
                <sup>{cart.length}</sup>
                <BsCart2 onClick={() => navigate("/basket")} />
                Корзина
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
