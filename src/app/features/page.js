"use client";

import GettingStarted from "@/components/GettingStarted";
import HighPerformer from "@/components/HighPerformer";
import HomeBroadcaster from "@/components/HomeBroadcaster";
import HomeConnectors from "@/components/HomeConnectors";
import HomeCrm from "@/components/HomeCrm";
import HomeDrip from "@/components/HomeDrip";
import HomeFAQ from "@/components/HomeFAQ";
import HomeGenerativeAI from "@/components/HomeGenerativeAI";
import WhatsAppChatBots from "@/components/WhatsAppChatBots";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const FeturesPage = () => {
  return (
    <div className="pt-16 lg:pt-20 xl:pt-20 md:pt-20">
      <div className="featuresHeroDiv">
        <img
          className="featuresHeroBg"
          src="/images/allison-saeng-kJA4mtHv0go-unsplash 1.png"
          alt=""
        />
        <div className="featuresHeadlineDiv  pt-14 lg:pt-24 xl:pt-24 md:pt-16">
          <div className="mx-5 lg:mx-40 xl:mx-40 md:mx-8">
            <h1 className="featuresHeadline">Features</h1>
            <p className="text-xl featuresPera pt-2 lg:pt-5">
              look like readable English. Many desktop publishing packages and
              web page editors now use Lorem Ipsum as their default model text
            </p>
          </div>
          {/* card pc*/}
          <div className="hidden lg:block xl:block mx-5 lg:mx-40 xl:mx-40 md:mx-8">
            <section className="pt-16 grid grid-cols-8 xl:grid-cols-8 gap-2">
              <div className="card bg-base-100 cardHover cursor-pointer">
                <div className="card-body">
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
              <div className="card bg-base-100 cardHover cursor-pointer">
                <div className="card-body">
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
              <div className="card bg-base-100 cardHover cursor-pointer">
                <div className="card-body">
                  <div className="flex justify-center">
                    <div className="featuresCardLogoDiv">
                      <img
                        className="featuresCardLogo"
                        src="/images/Group 1000002816.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <p className="text-center featuresCardHeadline pt-2">
                    {" "}
                    Teambox{" "}
                  </p>
                </div>
              </div>
              <div className="card bg-base-100 cardHover cursor-pointer">
                <div className="card-body">
                  <div className="flex justify-center">
                    <div className="featuresCardLogoDiv">
                      <img
                        className="featuresCardLogo"
                        src="/images/Group 1000002817.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <p className="text-center featuresCardHeadline pt-2">
                      {" "}
                      Broadcaster{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 cardHover cursor-pointer">
                <div className="card-body">
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
              <div className="card bg-base-100 cardHover cursor-pointer">
                <div className="card-body">
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
              <div className="card bg-base-100 cardHover cursor-pointer">
                <div className="card-body">
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
              <div className="card bg-base-100 cardHover cursor-pointer">
                <div className="card-body">
                  <div className="flex justify-center">
                    <div className="featuresCardLogoDiv">
                      <img
                        className="featuresCardLogo"
                        src="/images/Group 1000002810.png"
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
            </section>
          </div>
          {/* phone or tab */}
          <div className="ms-5 pt-10">
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
                  slidesPerView: 3.3,
                  spaceBetween: 10,
                },
              }}
            >
              <SwiperSlide className="">
                <div className="py-4 px-2 bg-base-100 cardHover cursor-pointer FeaturesCardDiv">
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
                <div className="py-4 px-2 bg-base-100 cardHover cursor-pointer FeaturesCardDiv">
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
                <div className="py-4 px-2 bg-base-100 cardHover cursor-pointer FeaturesCardDiv">
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
                <div className="py-4 px-2 bg-base-100 cardHover cursor-pointer FeaturesCardDiv">
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
                <div className="py-4 px-2 bg-base-100 cardHover cursor-pointer FeaturesCardDiv">
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
                <div className="py-4 px-2 bg-base-100 cardHover cursor-pointer FeaturesCardDiv">
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
              <SwiperSlide className="">
                <div className="py-4 px-2 bg-base-100 cardHover cursor-pointer FeaturesCardDiv">
                  <div className="">
                    <div className="flex justify-center">
                      <div className="featuresCardLogoDiv">
                        <img
                          className="featuresCardLogo"
                          src="/images/Group 1000002817.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <p className="text-center featuresCardHeadline pt-2">
                        {" "}
                        Broadcaster{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="py-4 px-2 bg-base-100 cardHover cursor-pointer FeaturesCardDiv">
                  <div className="">
                    <div className="flex justify-center">
                      <div className="featuresCardLogoDiv">
                        <img
                          className="featuresCardLogo"
                          src="/images/Group 1000002810.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <p className="text-center featuresCardHeadline pt-2">
                        {" "}
                        Generative AI{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <WhatsAppChatBots />
      <HomeCrm />
      <HomeBroadcaster />
      <HomeDrip />
      <HomeConnectors />
      <HomeGenerativeAI />
      <GettingStarted />
      <HighPerformer />
      <HomeFAQ />
    </div>
  );
};

export default FeturesPage;
