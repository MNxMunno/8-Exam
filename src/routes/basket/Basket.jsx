import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllCart } from "../../context/slice/cartSlice";
import { MdOutlineClose, MdOutlinePayment } from "react-icons/md";
import { FaPaypal } from "react-icons/fa";
import { CiBank } from "react-icons/ci";
import ClickPaymentProduct from "../../components/clickPaymentProduct/ClickPaymentProduct";
import EmptyCart from "../../components/emptyCart/EmptyCart";
const BOT_TOKEN = "7170154053:AAH2GUqkkxH_hbnj5L0juncFcn-qeiJDozk";
const CHAT_ID = "-1002016436113";
const USER_ID = "6339437164";
import gif from "../../assets/videos/empty-cart.gif";
import { useGetInputValue } from "../../hooks/useGetInputValue";

let initialState = {
  fname: "",
  address: "",
  mail: "",
  desc: "",
  tel: "",
};

const Basket = () => {
  const carts = useSelector((s) => s.cart.value);
  console.log(carts);
  const dispatch = useDispatch();
  let [data, setData] = useState(initialState);
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);
  // const l = (setData = formData);

  const price = carts?.map((el) => <b key={el.id}>{el.price * el.quantity}</b>);

  const handleSubmit = (e) => {
    e.preventDefault();

    let text = "Buyurtma %0A%0A";
    text += `Ismi:  ${formData.fname} %0A%0A`;
    text += `Address:  ${formData.address} %0A%0A`;
    text += `Email:  ${formData.mail} %0A%0A`;
    text += `Izoh:  ${formData.desc} %0A%0A`;
    text += `Tel:  ${formData.tel} %0A%0A`;

    carts?.forEach((product) => {
      text += `Nomi:  ${product.title} %0A`;
      text += `Miqdori:  ${product.quantity} %0A`;
      text += `Narxi:  ${product.price} %0A%0A`;
    });
    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    setData(initialState);

    dispatch(deleteAllCart());
    dispatch(close());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="inputs">
      <div className="container">
        {carts.length ? (
          <div className="cards">
            <div className="content">
              <ClickPaymentProduct className="click" />
              <form onSubmit={handleSubmit} action="">
                <h1>Оформление</h1>
                <div className="three_input">
                  <input
                    required
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                    type="text"
                    placeholder="ФИО"
                  />
                  <input
                    required
                    name="tel"
                    value={formData.tel}
                    onChange={handleChange}
                    type="number"
                    placeholder="телефон"
                  />
                  <input
                    required
                    name="mail"
                    value={formData.mail}
                    onChange={handleChange}
                    type="email"
                    placeholder=" Электронная почта"
                  />
                </div>
                <h1>Доставка</h1>
                <div className="bottom_input">
                  <input
                    required
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    type="text"
                    placeholder="Адрес доставки"
                  />

                  <textarea
                    required
                    value={formData.desc}
                    onChange={handleChange}
                    name="desc"
                    id="text"
                    rows="4"
                    // cols="40"
                    placeholder="Комментарий"
                  ></textarea>
                </div>

                <button>Go to Payment</button>
              </form>
              <form onSubmit={handleSubmit}>
                <h1>Оплата</h1>
                <div className="form__cards">
                  <div className="end_form">
                    <h3>Товары.......................</h3>
                    <div className="line"></div>
                    <b>{price} ₽</b>
                  </div>
                  <div className="end_form">
                    <h3>Доставка..............................</h3>
                    <div className="line"></div>
                    <b>580 ₽</b>
                  </div>
                </div>
                <h2>{price} ₽</h2>
                <button>Купить</button>
              </form>
            </div>
          </div>
        ) : (
          <EmptyCart gif={gif} />
        )}
      </div>
    </section>
  );
};

export default Basket;
