import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../../static/card/Card";
import EmptyCart from "../../components/emptyCart/EmptyCart";
import gif from "../../assets/videos/empty-wishlist.png";

const Wishlist = () => {
  const data = useSelector((s) => s.wishlist.value);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="wishlist_page">
      <div className="container">
        {data.length ? (
          <div className="content">
            <h1>Избранные товары</h1>
            <Card data={data} />
          </div>
        ) : (
          <EmptyCart gif={gif} />
        )}
      </div>
    </section>
  );
};

export default Wishlist;
