import React from "react";

const Loading = () => {
  return (
    <div className="product__loading ">
      <div className="load">
        <div className="loading__imgs">
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
        </div>
        <div className="loading__hero__img skeleton"></div>
      </div>
      <div className="loading__info">
        <h3 className="skeleton"></h3>
        <h4 className="skeleton"></h4>
        <h5 className="skeleton last"></h5>
        <h5 className="skeleton"></h5>
        <h5 className="skeleton"></h5>
        <div className="loading__btns">
          <div className="skeleton"></div>
          <div className="skeleton"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
