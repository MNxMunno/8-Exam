import React from "react";
import img from "../../assets/images/logog.png";
import img2 from "../../assets/images/card.png";
import img3 from "../../assets/images/vk.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="cards">
          <div className="card">
            <img src={img} alt="" />
            <p className="tel">8 (800) 890-46-56</p>
            <img className="cardd" src={img2} alt="" />
            <p className="text">Политика конфидециальности</p>
            <p className="text">Пользовательское соглашение</p>
            <div className="imgs">
              <img src={img3} alt="" />
              <img src={img3} alt="" />
              <img src={img3} alt="" />
            </div>
          </div>
          <div className="card">
            <h3>Покупателям</h3>
            <p className="text">О компании</p>
            <p className="text">Доставка и оплата</p>
            <p className="text">Возврат</p>
            <p className="text">Гарантии</p>
            <p className="text">Контакты</p>
            <p className="text">Блог</p>
          </div>
          <div className="card">
            <h3>Товары</h3>
            <p className="text">Люстры</p>
            <p className="text">Светильники</p>
            <p className="text">ВозвратБра</p>
            <p className="text">Торшеры</p>
            <p className="text">Комплектуюшие</p>
            <p className="text">Настольные лампы</p>
          </div>
          <div className="card">
            <p className="text">Споты</p>
            <p className="text">Трековые светильники</p>
            <p className="text">Уличные светильники</p>
            <p className="text">Технические светильники</p>
            <p className="text">Светодиодные ленты</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
