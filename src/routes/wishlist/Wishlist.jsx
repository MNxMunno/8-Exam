import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../../static/card/Card";

const Wishlist = () => {
  const data = useSelector((s) => s.wishlist.value);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="wishlist_page">
      <div className="container">
        {data.length ? <Card data={data} /> : <h1>Hech narsa yuq :(</h1>}
      </div>
      {/* <Empty /> */}
    </section>
  );
};

export default Wishlist;
