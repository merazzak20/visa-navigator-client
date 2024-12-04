import React from "react";
// Import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";

import slide1 from "../assets/Slide1.jpg";
import slide2 from "../assets/Slide2.jpg";
import slide3 from "../assets/Slide3.jpg";
import slide4 from "../assets/Slide4.jpg";

const CaruselSlider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        className="w-full min-h-[500px] rounded-lg mt-7"
      >
        <SwiperSlide>
          <div
            className="w-full"
            style={{
              backgroundImage: `linear-gradient(245deg, rgba(0,0,0,0) 0%, rgba(99,99,99,0) 22%, rgba(64,64,64,0.7512254901960784) 56%, rgba(0,0,0,0.9024859943977591) 100%), url(${slide1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "500px",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide
          className="w-full"
          style={{
            backgroundImage: `linear-gradient(245deg, rgba(0,0,0,0) 0%, rgba(99,99,99,0) 22%, rgba(64,64,64,0.7512254901960784) 56%, rgba(0,0,0,0.9024859943977591) 100%), url(${slide2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "500px",
          }}
        ></SwiperSlide>
        <SwiperSlide
          className="w-full"
          style={{
            backgroundImage: `linear-gradient(245deg, rgba(0,0,0,0) 0%, rgba(99,99,99,0) 22%, rgba(64,64,64,0.7512254901960784) 56%, rgba(0,0,0,0.9024859943977591) 100%), url(${slide3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "500px",
          }}
        ></SwiperSlide>
        <SwiperSlide
          className="w-full"
          style={{
            backgroundImage: `linear-gradient(245deg, rgba(0,0,0,0) 0%, rgba(99,99,99,0) 22%, rgba(64,64,64,0.7512254901960784) 56%, rgba(0,0,0,0.9024859943977591) 100%), url(${slide4})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "500px",
          }}
        ></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CaruselSlider;
