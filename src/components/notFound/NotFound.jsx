import React from "react";
import img from "../../assets/images/404.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="not_found">
      <div className="container">
        <div className="content">
          <img src={img} alt="" />
          <h1>Похоже, ничего не нашлось :(</h1>
          <button onClick={() => navigate("/")}>На главную</button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
