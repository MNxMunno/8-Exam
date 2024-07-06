import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementCart,
  removeFromCart,
} from "../../context/slice/cartSlice";
import { TiDeleteOutline } from "react-icons/ti";

const ClickPaymentProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [model, setModel] = useState(false);
  const data = useSelector((s) => s.cart.value);
  const dispatch = useDispatch();

  const openPayment = () => {
    setModel(true);
  };

  let totalPrice = data
    ?.reduce((acc, el) => acc + el.price * el.quantity, 0)
    .toFixed(2);

  const card = data?.map((el) => (
    <div className="card cardd" key={el.id}>
      <button onClick={() => dispatch(removeFromCart(el.id))}>
        <TiDeleteOutline style={{ color: "red", fontSize: "32px" }} />
      </button>

      <img src={el.url[0]} alt={el.title} width={100} height={100} />
      <div className="content">
        <h3>{el.title}</h3>
        <b>${el.price}</b>

        <div className="btns">
          <button
            disabled={el.quantity <= 1}
            onClick={() => dispatch(decrementCart(el))}
          >
            -
          </button>
          <span>{el.quantity}</span>
          <button onClick={() => dispatch(addToCart(el))}>+</button>
        </div>
        <b className="quant">${totalPrice}</b>
      </div>
    </div>
  ));
  const closePayment = () => {
    setModel(false);
  };
  return <>{card}</>;
};

export default ClickPaymentProduct;
