import React, { useEffect } from "react";
import Title from "../../static/title/Title";
import { useGetProductByIdQuery } from "../../context/api/productApi";
import { useParams } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import img1 from "../../assets/images/ok.svg";
import img2 from "../../assets/images/wk.svg";
import img3 from "../../assets/images/tg.svg";
import img4 from "../../assets/images/wh.svg";
import img5 from "../../assets/images/vb.svg";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeart } from "../../context/slice/wishlist";
import {
  addToCart,
  decrementCart,
  incrementCart,
} from "../../context/slice/cartSlice";

const Detail = () => {
  const wishlist = useSelector((s) => s.wishlist.value);
  const card = useSelector((s) => s.cart.value);
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data, isLoading } = useGetProductByIdQuery(id);
  // console.log(data);
  const [quant] = card?.filter((i) => i.id === data?.id);
  console.log(quant);
  return (
    <section className="detail">
      <div className="container">
        <Title />
        {isLoading ? (
          <Loading />
        ) : (
          <div className="detail__content">
            <div className="card">
              <div className="img">
                <img src={data?.url[0]} alt="" />
              </div>
            </div>
            <div className="card">
              <h1>{data?.title}</h1>
              <div className="card__content">
                <div className="text">
                  <p>Scott</p>
                  <p>Артикул : 7655-188</p>
                  <h3>В наличии</h3>
                </div>
                <div className="sites_btn">
                  <img src={img1} alt="img" />
                  <img src={img2} alt="img" />
                  <img src={img3} alt="img" />
                  <img src={img4} alt="img" />
                  <img src={img5} alt="img" />
                </div>
              </div>
              <div className="prices">
                <h2>{data?.price} ₽</h2>
                <del>{data?.price} ₽</del>
              </div>
              <p className="desc">{data?.description}</p>
              <div className="btns">
                <div className="btn">
                  <button
                    onClick={() => dispatch(decrementCart(quant))}
                    disabled={quant?.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{quant?.quantity}</span>
                  <button onClick={() => dispatch(incrementCart(quant))}>
                    +
                  </button>
                </div>
                <button
                  className="add"
                  onClick={() => dispatch(addToCart(data))}
                >
                  В корзину
                </button>

                <button
                  onClick={() => dispatch(toggleHeart(data))}
                  className="heart"
                >
                  {wishlist?.some((item) => item.id === data?.id) ? (
                    <IoHeartSharp />
                  ) : (
                    <IoHeartOutline style={{ color: "black" }} />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="text__content">
          <h1>Характеристика</h1>
          <div className="text__cards">
            <div className="card">
              <b>Цвет</b>
              <p>Жёлтый</p>
            </div>
            <div className="card">
              <b>Год</b>
              <p>2016</p>
            </div>
            <div className="card">
              <b>Диаметр колеса</b>
              <p>27.5</p>
            </div>
            <div className="card">
              <b>Материал рамы</b>
              <p>Карбон</p>
            </div>
            <div className="card">
              <b>Размер</b>
              <p>L</p>
            </div>
            <div className="card">
              <b>Страна</b>
              <p>Швейцария</p>
            </div>
            <div className="card">
              <b>Производитель</b>
              <p>Scott</p>
            </div>
            <div className="card">
              <b>Покрышки</b>
              <p>
                Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy /
                PaceStar compound
              </p>
            </div>
            <div className="card">
              <b>Рама</b>
              <p>
                Scale Carbon / HMX-технология / технология IMP / Коническая
                рулевая труба / BB92 / Технология SDS / Дропауты IDS SL
              </p>
            </div>
            <div className="card">
              <b>Подседельный Штырь</b>
              <p>
                Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm
                900 Series: Carbon 2B SDS / 34.9mm
              </p>
            </div>
            <div className="card">
              <b>Седло</b>
              <p>Ritchey WCS Streem V3 Titanium rails</p>
            </div>
            <div className="card">
              <b>Вилка</b>
              <p>
                Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle /
                коническая рулевая труба / Удалённая блокировка, регулировка
                отскока / ход 100mm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
