import React from "react";
import Blog from "../../components/blog/Blog";
import Descriptiopn from "../../components/description/Descriptiopn";
import Brend from "../../components/brend/Brend";
import Btn from "../../static/btn/Btn";
import Catalog from "../../components/catalog/Catalog";

const CatalogPage = () => {
  return (
    <section className="catalog_page">
      <div className="container">
        <h1>Каталог</h1>
        <Catalog />
        <Brend />
        <div className="titles">
          <h1>Блог</h1>
          <button onClick={() => navigate("/blog")}>
            <Btn text={"Перейти в блог"} />
          </button>
        </div>
        <Blog />
        <Descriptiopn />
      </div>
    </section>
  );
};

export default CatalogPage;
