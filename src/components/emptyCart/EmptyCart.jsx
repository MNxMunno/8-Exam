import React from "react";
import { useNavigate } from "react-router-dom";

const EmptyCart = ({ gif }) => {
  const navigate = useNavigate();
  return (
    <section className="empty">
      <div className="container">
        <div className="content">
          <div className="img">
            <img src={gif} alt="gif" />
          </div>
          <button onClick={() => navigate("/")}>На главную</button>
        </div>
      </div>
    </section>
  );
};

export default EmptyCart;
