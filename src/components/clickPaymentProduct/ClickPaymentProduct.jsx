import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementCart,
  incrementCart,
  removeFromCart,
} from "../../context/slice/cartSlice";
import { TiDeleteOutline } from "react-icons/ti";
import { FaRegTrashAlt } from "react-icons/fa";

const ClickPaymentProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = useSelector((s) => s.cart.value);
  const dispatch = useDispatch();

  let totalPrice = data
    ?.reduce((acc, el) => acc + el.price * el.quantity, 0)
    .toFixed(2);

  const card = data?.map((el) => (
    <tr className="pay__card" key={el.id}>
      <th>
        <img src={el.url[0]} alt={el.title} width={50} height={50} />
      </th>
      <td>
        <h3>{el.title}</h3>
      </td>
      <td>
        <b>${el.price}</b>
      </td>
      <td className="content">
        <button
          disabled={el.quantity <= 1}
          onClick={() => dispatch(decrementCart(el))}
        >
          -
        </button>
        <span>{el.quantity}</span>
        <button onClick={() => dispatch(incrementCart(el))}>+</button>

        <b className="quant">${totalPrice}</b>
      </td>
      <td>
        <button onClick={() => dispatch(removeFromCart(el.id))}>
          <FaRegTrashAlt style={{ color: "#454545", fontSize: "28px" }} />
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="table">
      <table className="pay__cards">
        <thead>
          <tr>
            <th>Фото</th>
            <th>Товары</th>
            <th>Описание</th>
            <th>Артикул</th>
            <th>Количество</th>
          </tr>
        </thead>
        <tbody>{card}</tbody>
      </table>
    </div>
  );
};

export default ClickPaymentProduct;
