"use client";

import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

const clientsReviews = [
  {
    name: "Cameron Williamson",
    role: "Marketing Coordinator",
    img: "/images/Ellipse 494.png",
    text: "“There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humour”",
  },
  {
    name: "Sarah Johnson ",
    role: "Marketing Coordinator",
    img: "/images/Ellipse 494 (1).png",
    text: "“There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humour”",
  },
  {
    name: "Michael Smith",
    role: "Marketing Coordinator",
    img: "/images/Ellipse 494 (2).png",
    text: "“There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humour”",
  },
  {
    name: "Michael Smith",
    role: "Marketing Coordinator",
    img: "/images/Ellipse 494.png",
    text: "“There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humour”",
  },
  {
    name: "Michael Smith",
    role: "Marketing Coordinator",
    img: "/images/Ellipse 494 (2).png",
    text: "“There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humour”",
  },
  {
    name: "Michael Smith",
    role: "Marketing Coordinator",
    img: "/images/Ellipse 494 (1).png",
    text: "“There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humour”",
  },
  {
    name: "Michael Smith",
    role: "Marketing Coordinator",
    img: "/images/Ellipse 494.png",
    text: "“There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humour”",
  },
];

const HappyClientSays = () => {
  return (
    <div className="HappyClientSaysBg">
      <div className="text-center pt-5 lg:pt-20 xl:pt-20 md:pt-10">
        <h2 className="happyClientsSaysText text-white">Happy Client Says</h2>
      </div>
      {/* 1st slide */}
      <div className="pt-10 mx-5 lg:mx-0 xl:mx-0 md:mx-8">
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 1900,
            disableOnInteraction: false,
          }}
          speed={800}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
          breakpoints={{
            // Mobile: 1 slide
            320: {
              slidesPerView: 1,
            },
            // Tablets: 2 slides
            768: {
              slidesPerView: 2,
            },
            // Laptops and larger screens: 3.2 slides
            1024: {
              slidesPerView: 3.2,
            },
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
      </div>
      {/* 2nd slide*/}
      <div className="pt-10 hidden lg:block xl:block">
        <Swiper
          slidesPerView={3.5}
          spaceBetween={20}
          centeredSlides={true}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
          }}
          speed={800}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
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
                  
                  <div className="ms-4">
                    <h3 className="text-lg font-semibold">{client.name}</h3>
                    <p className="text-sm">{client.role}</p>
                  </div>
                </div>
               
                <div className="py-4 px-1">
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
      </div>
    </div>
  );
};

export default HappyClientSays;
