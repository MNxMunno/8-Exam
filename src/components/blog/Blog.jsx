import React, { useEffect } from "react";
import Btn from "../../static/btn/Btn";
import img1 from "../../assets/images/home1.png";
import img2 from "../../assets/images/home2.png";
import img3 from "../../assets/images/home3.png";
import { GoArrowUpRight } from "react-icons/go";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="blog">
      <div className="container">
        <div className="content">
          <div className="cards">
            <div className="card">
              <img src={img1} alt="" />
              <div className="title">
                <h3>Как правильно освещать дом снаружи?</h3>
                <GoArrowUpRight />
              </div>
              <p>01.01.2024</p>
            </div>
            <div className="card">
              <img src={img2} alt="" />
              <div className="title">
                <h3>Как правильно освещать дом снаружи?</h3>
                <GoArrowUpRight />
              </div>
              <p>01.01.2024</p>
            </div>
            <div className="card">
              <img src={img3} alt="" />
              <div className="title">
                <h3>Как правильно освещать дом снаружи?</h3>
                <GoArrowUpRight />
              </div>
              <p>01.01.2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
