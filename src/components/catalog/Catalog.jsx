import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import Btn from "../../static/btn/Btn";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../static/banner/styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Catalog = () => {
  const data = [
    {
      id: 1,
      img: "https://i.postimg.cc/VLNsx545/lyustr-1.png",
      title: "Люстры",
    },
    {
      id: 2,
      img: "https://i.postimg.cc/q7FZvDH9/lyustr-2.png",
      title: "Светильники",
    },
    {
      id: 3,
      img: "https://i.postimg.cc/MHq061HC/lyustr-3.png",
      title: "Бра",
    },
    {
      id: 4,
      img: "https://i.postimg.cc/tRcCHpc5/lyustr-4.png",
      title: "Торшеры",
    },
    {
      id: 5,
      img: "https://i.postimg.cc/kXfrdcDd/lyustr-5.png",
      title: "Настольные лампы",
    },
    {
      id: 6,
      img: "https://i.postimg.cc/k5wRQLgp/lyustr-6.png",
      title: "Споты",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const card = data?.map((el) => (
    <SwiperSlide key={el.id} className="slide">
      <div className="card">
        <div className="texts">
          <h3>{el.title}</h3>
          <a href="#">
            От 540₽
            <FaArrowRightLong />
          </a>
        </div>
        <div className="img">
          <img src={el.img} alt={el.title} />
        </div>{" "}
      </div>
    </SwiperSlide>
  ));
  return (
    <section className="catalog">
      <div className="container">
        <div className="content">
          <div className="cards">{card}</div>
          <Swiper
            slidesPerView={2}
            loop={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {card}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
