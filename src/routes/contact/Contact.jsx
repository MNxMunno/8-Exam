import React, { useEffect } from "react";
import Title from "../../static/title/Title";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="contact">
      <div className="container  ">
        <div className="contact_content">
          <Title text={"Контакты"} />
          <div className="contact_content__cards">
            <div className="card">
              <h1>Контакты</h1>
            </div>
            <div className="card">
              <a href="tel:+8 (800) 890-46-56">8 (800) 890-46-56</a>
              <p>Пн-Пт: 10:00 до 19:00Cб-Bc: заказ через корзину Телефоны:</p>
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
            <div className="position_content">
              <div className="card">
                <h3>Адрес магазина</h3>
                <p>г. Москва, Дмитровское шоссе д.100с2</p>
              </div>
              <div className="card">
                <h3>Почта</h3>
                <a href="#">NORNLIGHT@mail.ru</a>
              </div>
              <div className="card">
                <h3>Телефон</h3>
                <a href="tel:+8 (800) 890-46-56">8 (800) 890-46-56</a>
              </div>
              <div className="card">
                <button>Оставить заявку</button>
              </div>
            </div>
            <div className="position_contentt">
              <div className="card">
                <h3>Адрес магазина</h3>
                <p>г. Москва, Дмитровское шоссе д.100с2</p>
              </div>
              <div className="card">
                <h3>Почта</h3>
                <a href="#">NORNLIGHT@mail.ru</a>
              </div>
              <div className="card">
                <h3>Телефон</h3>
                <a href="tel:+8 (800) 890-46-56">8 (800) 890-46-56</a>
              </div>
              <div className="card">
                <button>Оставить заявку</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
