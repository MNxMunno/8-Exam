import React from "react";
import { NavLink } from "react-router-dom";
import Title from "../../static/title/Title";

const Shipping = () => {
  return (
    <section className="shipping">
      <div className="container">
        <div className="shipping__content">
          <Title text={"Доставка и оплата"} />
          <div className="shipping_content__cards">
            <div className="card">
              <h1>Доставка и оплата</h1>
            </div>
            <div className="card">
              <h3>Доставка</h3>
              <p>
                Мы осуществляем доставку со склада по Москве и Московской
                области собственной курьерской службой. Транспортными компаниями
                нашу продукцию мы доставляем по всей территории РФ, а так же по
                всем странам СНГ. <span>Сроки доставки: 4—6 недель</span>
              </p>
              <h3>Курьерская доставка</h3>
              <p>
                БЕСПЛАТНО доставим в приделах МКАД любой заказ{" "}
                <span>от 5 000 ₽</span> .Заказы свыше <span>30 000 ₽</span>{" "}
                имеют бесплатную доставку, включительно 15 км от МКАД
              </p>
              <h3>Самовывоз</h3>
              <p>
                Любой заказ можно забрать самостоятельно по адресу: г. Москва,
                Дмитровское шоссе д.100с2
              </p>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184191.29995268292!2d37.570770385857124!3d55.72626519783832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2s!4v1720170398624!5m2!1sru!2s"
            width="100%"
            height="450"
            style={{ border: "0" }}
            // allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Shipping;
