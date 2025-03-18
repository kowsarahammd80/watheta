"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const PricingPage = () => {
  return (
    <div className="pt-20">
      {/* hero */}
      <div className="pricingBg">
        {/* meta logo */}
        <div className="flex justify-center items-center pricingHeroContentDiv py-10">
          <div className="w-full">
            <div className="flex items-center justify-center">
              <div className="pricingMetaLogoDiv">
                <img src="/images/metaLogo.png" alt="" />
              </div>
              <div className="text-white">
                <p className="pricingOfficialText">Official Partner</p>
                <p className="metaBusinessText">Meta Business Solution</p>
              </div>
            </div>
            <div className="flex justify-center">
              <h1 className="pricingHeadline">
                Simple, Transparent Pricing Plans
              </h1>
            </div>
            <div className="">
              <p className="text-center pricingPera py-2">
                Choose the perfect plan for your business. Scale as you grow.
              </p>
            </div>
            <div className="flex justify-center py-2">
              <button className="flex items-center pricingWhatsAppText px-10 py-2 rounded-full">
                {" "}
                <span className="me-2">
                  <img src="/images/tike.png" alt="" />
                </span>{" "}
                WhatsApp messaging at actual Meta rates, no markup
              </button>
            </div>

        <div className="block mx-44 pt-5">
          <Swiper
            spaceBetween={10}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Navigation]} // Include Navigation module
            className="mySwiper"
            breakpoints={{
              // Mobile (up to 480px)
              320: {
                slidesPerView: 3.4,
                spaceBetween: 10,
              },
              // Tablet (481px - 1024px)
              768: {
                slidesPerView: 3.4,
                spaceBetween: 10,
              },
              // Desktop (1025px+)
              1024: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
            }}
          >
            <SwiperSlide className="">
              <div className="py-4 px-2 bg-white cardHover cursor-pointer pricingCardDiv">
                <div className="">
                  <div className="flex justify-center">
                    <div className="featuresCardLogoDiv">
                      <img
                        className="featuresCardLogo"
                        src="/images/Group 1000002814.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <p className="text-center featuresCardHeadline pt-2">
                      {" "}
                      Chatbots{" "}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="">
              <div className="py-4 px-2 bg-base-100 cardHover cursor-pointer pricingCardDiv">
                <div className="">
                  <div className="flex justify-center">
                    <div className="featuresCardLogoDiv">
                      <img
                        className="featuresCardLogo"
                        src="/images/Group 1000002815.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <p className="text-center featuresCardHeadline pt-2">
                    {" "}
                    Modular <br /> CRM{" "}
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="">
              <div className="py-4 px-2 bg-base-100 cardHover cursor-pointer pricingCardDiv">
                <div className="">
                  <div className="flex justify-center">
                    <div className="featuresCardLogoDiv">
                      <img
                        className="featuresCardLogo"
                        src="/images/Group 1000002816.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="felx justify-center">
                    <p className="text-center featuresCardHeadline pt-2">
                      {" "}
                      Teambox{" "}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="">
              <div className="py-4 px-2 bg-base-100 cardHover cursor-pointer pricingCardDiv">
                <div className="">
                  <div className="flex justify-center">
                    <div className="featuresCardLogoDiv">
                      <img
                        className="featuresCardLogo"
                        src="/images/Group 1000002813.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-center">
                      <p className="text-center featuresCardHeadline pt-2">
                        {" "}
                        WhatsApp Commerce{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="py-4 px-2 bg-base-100 cardHover cursor-pointer pricingCardDiv">
                <div className="">
                  <div className="flex justify-center">
                    <div className="featuresCardLogoDiv">
                      <img
                        className="featuresCardLogo"
                        src="/images/Group 1000002812.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <p className="text-center featuresCardHeadline pt-2">
                      {" "}
                      Drip <br /> Campanigns{" "}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="py-4 px-2 bg-base-100 cardHover cursor-pointer pricingCardDiv">
                <div className="">
                  <div className="flex justify-center">
                    <div className="featuresCardLogoDiv">
                      <img
                        className="featuresCardLogo"
                        src="/images/Group 1000002811.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <p className="text-center featuresCardHeadline pt-2">
                      {" "}
                      Connectors{" "}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide> 
          </Swiper>
        </div>
          </div>
          
        </div>
        {/* slider */}
        
      </div>
    </div>
  );
};

export default PricingPage;
