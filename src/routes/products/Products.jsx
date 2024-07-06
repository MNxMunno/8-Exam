import React from "react";
import MapProducts from "../../components/mapProducts/MapProducts";
import Title from "../../static/title/Title";

const Products = () => {
  return (
    <section className="products_page">
      <div className="container">
        <div className="content">
          <Title />
          <h1>Популярные товары</h1>
          <MapProducts />
        </div>
      </div>
    </section>
  );
};

export default Products;
