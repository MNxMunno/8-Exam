import React from "react";
import { NavLink } from "react-router-dom";

const Navbartop = () => {
  return (
    <div className="container">
      <div className="top_items">
        <div className="top_item">
          <NavLink to={"/about"}>О компании</NavLink>
          <NavLink to={"/shipping"}>Доставка и оплата</NavLink>
          <NavLink to={"/return"}>Возврат</NavLink>
          <NavLink to={"/garant"}>Гарантии</NavLink>
          <NavLink to={"/contact"}>Контакты</NavLink>
          <NavLink to={"/blog"}>Блог</NavLink>
        </div>
        <div className="top_item">
          <a href="tel:+8 (800) 890-46-56">8 (800) 890-46-56</a>
          <button>Заказать звонок</button>
        </div>
      </div>
    </div>
  );
};

export default Navbartop;
