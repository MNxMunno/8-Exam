import React, { useState } from "react";
import Card from "../../static/card/Card";
import { useGetProductsQuery } from "../../context/api/productApi";

const MapProducts = () => {
  const [proSlice, setProSlice] = useState(8);
  const { data, isLoading } = useGetProductsQuery();
  const card = data?.slice(0, proSlice);
  console.log(card);
  return (
    <section className="map__products">
      <div className="container">
        {isLoading ? <h2>Loading...</h2> : <Card data={card} />}
        <button
          className="seeMore"
          onClick={() => setProSlice((p) => p + proSlice)}
        >
          See More
        </button>
      </div>
    </section>
  );
};

export default MapProducts;
