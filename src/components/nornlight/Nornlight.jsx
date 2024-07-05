import React, { useEffect } from "react";
import Btn from "../../static/btn/Btn";
import { FaMedal } from "react-icons/fa6";
import { MdPriceChange } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { GrCatalog } from "react-icons/gr";

const Nornlight = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="nornlight">
      <div className="container">
        <div className="content">
          <div className="titles">
            <h1>Почему NORNLIGHT?</h1>
            <Btn text={"О компании"} />
          </div>
          <div className="cards">
            <div className="card">
              <div className="img">
                <FaMedal />
              </div>{" "}
              <h3>Только проверенные бренды</h3>
              <p>Бренды, проверенные временем и качествомx</p>
            </div>
            <div className="card">
              <div className="img">
                <MdPriceChange />
              </div>{" "}
              <h3>Самые низкие цены</h3>
              <p>Ниже не будет нигде</p>
            </div>
            <div className="card">
              <div className="img">
                <TbTruckDelivery />
              </div>{" "}
              <h3>Быстрая доствка</h3>
              <p>Доставляем по всей РФза 1-10 дней</p>
            </div>
            <div className="card">
              <div className="img">
                <GrCatalog />
              </div>{" "}
              <h3>Большой ассортимент</h3>
              <p>Более 1000 товаров</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nornlight;
