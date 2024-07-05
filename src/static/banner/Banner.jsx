import React from "react";
import img1 from "../../assets/images/img.png";
import img2 from "../../assets/images/img-1.png";
import img3 from "../../assets/images/img-2.png";
import img4 from "../../assets/images/img-3.png";
import img5 from "../../assets/images/img-4.png";
import img6 from "../../assets/images/img-5.png";
import img7 from "../../assets/images/img-6.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper/modules";

const Banner = () => {
  return (
    <section className="home_hero">
      <div className="container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="content">
              <h1>
                Скидка 15% на все подвесные светильники{" "}
                <span>до 5 февраля</span>
              </h1>
              <img src={img1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <h1>
                Скидка 15% на все подвесные светильники{" "}
                <span>до 5 февраля</span>
              </h1>
              <img src={img2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <h1>
                Скидка 15% на все подвесные светильники{" "}
                <span>до 5 февраля</span>
              </h1>
              <img src={img3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <h1>
                Скидка 15% на все подвесные светильники{" "}
                <span>до 5 февраля</span>
              </h1>
              <img src={img4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <h1>
                Скидка 15% на все подвесные светильники{" "}
                <span>до 5 февраля</span>
              </h1>
              <img src={img5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <h1>
                Скидка 15% на все подвесные светильники{" "}
                <span>до 5 февраля</span>
              </h1>
              <img src={img6} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <h1>
                Скидка 15% на все подвесные светильники{" "}
                <span>до 5 февраля</span>
              </h1>
              <img src={img7} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
