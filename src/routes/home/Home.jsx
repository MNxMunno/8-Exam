import React from "react";
import Banner from "../../static/banner/Banner";
import Catalog from "../../components/catalog/Catalog";
import Nornlight from "../../components/nornlight/Nornlight";
import Brend from "../../components/brend/Brend";
import Blog from "../../components/blog/Blog";
import Descriptiopn from "../../components/description/Descriptiopn";

const Home = () => {
  return (
    <main>
      <Banner />
      <Catalog />
      <Nornlight />
      <Brend />
      <Blog />
      <Descriptiopn />
    </main>
  );
};

export default Home;
