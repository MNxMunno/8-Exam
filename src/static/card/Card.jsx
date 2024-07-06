import React from "react";
import img from "../../assets/images/home1.png";
import { BsCart, BsCartCheck } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeart } from "../../context/slice/wishlist";
import { FaRegHeart } from "react-icons/fa6";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { addToCart } from "../../context/slice/cartSlice";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  let cart = useSelector((state) => state.cart.value);
  let wishlist = useSelector((state) => state.wishlist.value);
  const dispatch = useDispatch();
  const card = data?.map((product) => (
    <div className="map__card" key={product.id}>
      <div className="img">
        <img src={product.url[0]} alt="Product" />
      </div>
      <Link to={`/product/${product.id}`}>
        <h3>{product.title}</h3>
      </Link>
      <div className="card_content">
        <div className="price">
          <del>{product.price * 1.2} ₽</del>
          <p>{product.price} ₽</p>
        </div>
        <button onClick={() => dispatch(addToCart(product))}>
          {cart?.some((item) => item.id === product.id) ? (
            <BsCartCheck />
          ) : (
            <BsCart />
          )}
        </button>
      </div>
      <button onClick={() => dispatch(toggleHeart(product))} className="heart">
        {wishlist?.some((item) => item.id === product.id) ? (
          <IoHeartSharp />
        ) : (
          <IoHeartOutline style={{ color: "black" }} />
        )}
      </button>
    </div>
  ));
  return <div className="cards">{card}</div>;
};

export default Card;
