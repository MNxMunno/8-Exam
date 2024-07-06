import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SearchInput.scss";
import { Link } from "react-router-dom";

const SearchInput = () => {
  const [data, setData] = useState(null);
  const [searchValue, setSeachValue] = useState("");
  const [filteredData, setFiltredData] = useState(null);

  useEffect(() => {
    axios
      .get("https://66852088b3f57b06dd4b7d00.mockapi.io/products")
      .then((res) => {
        setData(res.data);
        setFiltredData(res.data);
      });
  }, []);

  useEffect(() => {
    if (data) {
      setFiltredData(
        data.filter((product) =>
          product.title.toLowerCase().includes(searchValue.trim().toLowerCase())
        )
      );
    }
  }, [searchValue]);
  return (
    <>
      <div className="nav_search">
        <input
          className="search"
          type="text"
          value={searchValue}
          placeholder="Поиск по товарам"
          onChange={(e) => setSeachValue(e.target.value)}
        />
        {searchValue.trim() ? (
          filteredData?.slice(0, 3)?.map((el) => (
            <div className="product_search sear" key={el.id}>
              <Link to={`/product/${el.id}`}>
                <div className="nav">
                  <img className="img" src={el.url[0]} width={50} alt="" />
                  <span className="span">{el.title}</span>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default SearchInput;
