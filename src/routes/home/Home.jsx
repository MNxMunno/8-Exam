import React from "react";
import Banner from "../../static/banner/Banner";
import Catalog from "../../components/catalog/Catalog";
import Nornlight from "../../components/nornlight/Nornlight";
import Brend from "../../components/brend/Brend";
import Blog from "../../components/blog/Blog";
import Descriptiopn from "../../components/description/Descriptiopn";
import Btn from "../../static/btn/Btn";
import Card from "../../static/card/Card";
import MapProducts from "../../components/mapProducts/MapProducts";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <main>
      {/* <Banner /> */}
      {/* <Catalog /> */}
      {/* <Nornlight /> */}
      {/* <Brend /> */}
      <MapProducts />
      <div className="container">
        <div className="titles">
          <h1>Блог</h1>
          <button onClick={() => navigate("/blog")}>
            <Btn text={"Перейти в блог"} />
          </button>
        </div>
      </div>
      <Blog />
      <Descriptiopn />
    </main>
  );
};

export default Home;
