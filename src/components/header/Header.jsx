import React, { useState } from "react";
import { IoSearch, IoHome } from "react-icons/io5";
import { FaRegUser, FaRegHeart, FaFire, FaChevronDown } from "react-icons/fa";
import { TbAntennaBars5, TbCategory2 } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { LuGitCompare } from "react-icons/lu";
import { BiMenuAltRight, BiSupport } from "react-icons/bi";
import { RiAdminLine, RiMenu2Line } from "react-icons/ri";
import logo from "../../assets/images/logo.svg";
import Navbartop from "../navbarTop/Navbartop";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { useSelector } from "react-redux";
import SearchInput from "../searchInput/SearchInput";
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
            <div className="navbar__logo">
              <button
                onClick={() => setToggel(!toggel)}
                className="menu__burger"
              >
                <BiMenuAltRight />
              </button>
              <NavLink to={"/"}>
                <img src={logo} alt="" />
              </NavLink>
            </div>
            <button
              onClick={() => navigate("/catalog")}
              className="btn__catalog"
            >
              <RiMenu2Line /> Каталог
            </button>
            <div className="search__input">
              <SearchInput className="line_inp" />
              {/* <input type="text" className="search" /> */}
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
          <div className={`nav_collac ${toggel ? "show" : ""}`}>
            <NavLink className="link" to={"/about"}>
              О компании
            </NavLink>
            <NavLink className="link" to={"/shipping"}>
              Доставка и оплата
            </NavLink>
            <NavLink className="link" to={"/return"}>
              Возврат
            </NavLink>
            <NavLink className="link" to={"/garant"}>
              Гарантии
            </NavLink>
            <NavLink className="link" to={"/contact"}>
              Контакты
            </NavLink>
            <NavLink className="link" to={"/blog"}>
              Блог
            </NavLink>
            <button
              onClick={() => navigate("/catalog")}
              className="btn__catalogg"
            >
              <RiMenu2Line /> Каталог
            </button>
            <div className="top_item">
              <a href="tel:+8 (800) 890-46-56">8 (800) 890-46-56</a>
              <button>Заказать звонок</button>
            </div>
          </div>
          <div className="bottom_inp">
            <SearchInput />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
