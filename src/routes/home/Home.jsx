import React from "react";
import Banner from "../../static/banner/Banner";
import Catalog from "../../components/catalog/Catalog";
import Nornlight from "../../components/nornlight/Nornlight";
import Brend from "../../components/brend/Brend";
import Blog from "../../components/blog/Blog";
import Descriptiopn from "../../components/description/Descriptiopn";
import Btn from "../../static/btn/Btn";

const Home = () => {
  return (
    <main>
      <Banner />
      <Catalog />
      <Nornlight />
      <Brend />
      <div className="container">
        <div className="titles">
          <h1>Блог</h1>
          <Btn text={"Перейти в блог"} />
        </div>
      </div>
      <Blog />
      <Descriptiopn />
    </main>
  );
};

export default Home;
