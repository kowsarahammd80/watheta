"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ResonToSwitch = () => {
  return (
    <div className="py-16">
      {/* headline */}
      <div className="resonToSwitchHeadline">
        <h1 className="mx-48 py-5">
          04 Reasons To Switch To Add Whatsapp Business API
        </h1>
      </div>
      {/* slider */}
      <div className="py-16 ms-48">
        <Swiper
          slidesPerView={3.3}
          spaceBetween={30}
          centeredSlides={false}
          modules={[]}
          className="mySwiper"
        >
          <SwiperSlide className="pb-4">
            <div className="card bg-base-100 shadow-lg border">
              <div className="card-body">
                {/* icon */}
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

                <p className="resonCardPera py-4">
                  WhatsApp CTA on social Ads, broadcast, customer profiling.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-base-100 shadow-lg border">
              <div className="card-body">
                {/* icon */}
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
                <p className="resonCardPera py-4">
                  WhatsApp automation, order management, sales reporting.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-base-100 shadow-lg border">
              <div className="card-body">
                {/* icon */}
                <div className="resonIconDiv">
                  <img
                    className="resonIcon"
                    src="/images/Group 1000002647.png"
                    alt=""
                  />
                </div>
                <p className="resonCardHeadline pt-3 w-8/12">
                  Advanced Automation
                </p>
                <p className="resonCardPera py-4">
                  Make your Business automation convert in to WhatsApp, Drip
                  campaign, AI based chatbot & automatic trigger.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-base-100 shadow-lg border">
              <div className="card-body">
                {/* icon */}
                <div className="resonIconDiv">
                  <img
                    className="resonIcon"
                    src="/images/Group 1000002649.png"
                    alt=""
                  />
                </div>
                <p className="resonCardHeadline pt-3 w-8/12">
                  Shared inbox, chatbot, customer satisfaction report with
                  others.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ResonToSwitch;
