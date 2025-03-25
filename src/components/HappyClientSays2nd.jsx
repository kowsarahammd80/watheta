"use client";

import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

const clientsReviews = [
  {
    name: "Cameron Williamson",
    role: "Marketing Coordinator",
    img: "/images/Ellipse 494.png",
  },
  {
    name: "Sarah Johnson ",
    role: "Marketing Coordinator",
    img: "/images/Ellipse 494 (1).png",
  },
  {
    name: "Michael Smith",
    role: "Marketing Coordinator",
    img: "/images/Ellipse 494 (2).png",
  },
  {
    name: "Michael Smith",
    role: "Marketing Coordinator",
    img: "/images/Ellipse 494.png",
  },
  {
    name: "Sarah Johnson ",
    role: "Marketing Coordinator",
    img: "/images/Ellipse 494 (1).png",
  },
  {
    name: "Michael Smith",
    role: "Marketing Coordinator",
    img: "/images/Ellipse 494 (2).png",
  },
  {
    name: "Michael Smith",
    role: "Marketing Coordinator",
    img: "/images/Ellipse 494.png",
  },
  {
    name: "Sarah Johnson ",
    role: "Marketing Coordinator",
    img: "/images/Ellipse 494 (1).png",
  },
  {
    name: "Michael Smith",
    role: "Marketing Coordinator",
    img: "/images/Ellipse 494 (2).png",
  },
  {
    name: "Michael Smith",
    role: "Marketing Coordinator",
    img: "/images/Ellipse 494.png",
  },
];

const HappyClientSays2nd = () => {
  return (
    <Swiper
      spaceBetween={20}
      centeredSlides={false}
      freeMode={true}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        reverseDirection: true, // ✅ Make autoplay go right
      }}
      speed={4000}
      //   direction="rtl" // ✅ Ensure layout is RTL
      modules={[FreeMode, Autoplay]}
      className="mySwiper"
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3.2 },
      }}
    >
      {clientsReviews.map((client, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-white text-black p-5 rounded-2xl happyClientsCardDiv">
                      <div className="flex items-center">
                        <div className="happyClientsSaysImgDiv">
                          <img
                            className="happyClientsSaysImg"
                            src={client.img}
                            alt=""
                          />
                        </div>
                        {/* name */}
                        <div className="ms-4">
                          <h3 className="text-lg font-semibold">{client.name}</h3>
                          <p className="text-sm">{client.role}</p>
                        </div>
                      </div>
                      {/* pera */}
                      <div className="py-4 px-3">
                        <p className="clientSaySliderPera">
                          “There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in some
                          form, by injected humour”
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
    </Swiper>
  );
};

export default HappyClientSays2nd;
