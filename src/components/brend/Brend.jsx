import React from "react";
import img1 from "../../assets/images/homiy1.png";
import img2 from "../../assets/images/homiy2.png";
import img3 from "../../assets/images/homy3.png";
import Btn from "../../static/btn/Btn";

const Brend = () => {
  return (
    <section className="brends">
      <div className="container">
        <div className="content">
          <h1>Только проверенные бренды</h1>

          <div className="cards">
            <div className="card">
              <img src={img1} alt="" />
            </div>
            <div className="card">
              <img src={img2} alt="" />
            </div>
            <div className="card">
              <img src={img3} alt="" />
            </div>
            <div className="card">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brend;
