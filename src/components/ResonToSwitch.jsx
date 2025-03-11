"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ResonToSwitch = () => {
  const [activeButton, setActiveButton] = useState("next");

  return (
    <div className="py-16 relative">
      {/* Headline */}
      <div className="resonToSwitchHeadline">
        <h1 className="mx-48 py-5">
          04 Reasons To Switch To <br /> Add Whatsapp Business API
        </h1>
      </div>

      {/* Slider with Right-Side Navigation */}
      <div className="pt-5 ms-48 relative">
        <Swiper
          slidesPerView={3.3}
          spaceBetween={35}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Navigation]} // Include Navigation module
          className="mySwiper"
        >
          <SwiperSlide className="pb-4 ">
            <div className="card bg-base-100 HomeFeturescardShadow border">
              <div className="card-body">
                <div className="resonIconDiv">
                  <img
                    className="resonIcon"
                    src="/images/Group 1000002646.png"
                    alt=""
                  />
                </div>
                <p className="resonCardHeadline pt-3 w-8/12">
                  Conversational Marketing
                </p>
                <p className="resonCardPera">
                  WhatsApp CTA on social Ads, broadcast, customer profiling.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card bg-base-100 border HomeFeturescardShadow">
              <div className="card-body">
                <div className="resonIconDiv">
                  <img
                    className="resonIcon"
                    src="/images/Group 1000002648.png"
                    alt=""
                  />
                </div>
                <p className="resonCardHeadline pt-3 w-8/12">
                  Conversational Commerce
                </p>
                <p className="resonCardPera ">
                  WhatsApp automation, order management, sales reporting.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card bg-base-100 border HomeFeturescardShadow">
              <div className="card-body">
                <div className="resonIconDiv">
                  <img
                    className="resonIcon"
                    src="/images/Group 1000002647.png"
                    alt=""
                  />
                </div>
                <p className="resonCardHeadline pt-3 w-10/12">
                  Advanced Automation
                </p>
                <p className="resonCardPera pb-2">
                  Make your Business automation convert in to WhatsApp, Drip
                  campaign, AI based chatbot & automatic trigger.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card bg-base-100 border HomeFeturescardShadow">
              <div className="card-body">
                <div className="resonIconDiv">
                  <img
                    className="resonIcon"
                    src="/images/Group 1000002649.png"
                    alt=""
                  />
                </div>
                <p className="resonCardHeadline pt-3 w-7/12">
                  Conversational Support
                </p>
                <p className="resonCardPera">
                  Shared inbox, chatbot, customer satisfaction report with
                  others.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="absolute -top-20 right-44 flex space-x-5">
          {/* Left Button */}
          <button
            className={`custom-prev bg-white p-3 rounded-full  border transition-all ${
              activeButton === "prev" ? "border-gray-500 shadow-md" : "border-gray-300"
            }`}
            onClick={() => setActiveButton("prev")}
          >
            <img src="/images/Group 1000002656 (1).png" alt="" />
          </button>

          {/* Right Button */}
          <button
            className={`custom-next bg-white p-3 rounded-full  border transition-all ${
              activeButton === "next" ? "border-gray-500 shadow-md" : "border-gray-300"
            }`}
            onClick={() => setActiveButton("next")}
          >
            <img src="/images/Group 1000002656.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResonToSwitch;
