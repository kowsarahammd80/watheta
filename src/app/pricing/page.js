"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const PricingPage = () => {
  const plans = [
    {
      name: "Silver Plan",
      price: "$149.00",
      duration: "Per quarter",
      features: [
        "1 WhatsApp API Channel",
        "1 Million Contacts",
        "5 Team Members",
        "No markup on WhatsApp conversations",
        "1 WhatsApp Commerce Store",
        "5000 Products",
        "5000 Orders",
        "5000 Abandoned Carts",
        "Do It Yourself Bot Building",
        "1 Million Bot Triggers",
        "5000 External Actions",
        "Support in 12 Working Hours",
        "20 Messages / Second Limit",
        "No Conv Monthly FUP Limit",
      ],
    },
    {
      name: "Gold Plan",
      price: "$349.00",
      duration: "Per quarter",
      recommended: true,
      features: [
        "1 WhatsApp API Channel",
        "1 Million Contacts",
        "10 Team Members",
        "No markup on WhatsApp conversations",
        "1 WhatsApp Commerce Store",
        "10,000 Products",
        "10,000 Orders",
        "10,000 Abandoned Carts",
        "Up to 30 Blocks Bot Building",
        "2 Million Bot Triggers",
        "10,000 External Actions",
        "Support in 6 Working Hours",
        "40 Messages / Second Limit",
        "No Conv Monthly FUP Limit",
      ],
    },
    {
      name: "Platinum V1",
      price: "$2500.00",
      duration: "Annually",
      features: [
        "3 WhatsApp API Channels",
        "5 Million Contacts",
        "25 Team Members",
        "No markup on WhatsApp conversations",
        "3 WhatsApp Commerce Stores",
        "20,000 Products",
        "20,000 Orders",
        "20,000 Abandoned Carts",
        "Up to 150 Blocks Bot Building",
        "10 Million Bot Triggers",
        "50,000 External Actions",
        "Support in 2 Working Hours",
        "100 Messages / Second Limit",
        "No Conv Monthly FUP Limit",
      ],
    },
  ];
  return (
    <div className="pt-20">
      {/* hero */}
      <div className="pricingBg">
        {/* meta logo */}
        <div className="flex justify-center items-center pricingHeroContentDiv py-5 lg:py-10 xl:py-10">
          <div className="w-full">
            <div className="flex justify-center pb-5">
              <div className="flex items-center justify-center pricingMetaLogoDivMain">
                <div className="pricingMetaLogoDiv">
                  <img src="/images/metaLogo.png" alt="" />
                </div>
                <div className="ms-3">
                  <p className="pricingOfficialText">Official Partner</p>
                  <p className="metaBusinessText">Meta Business Solution</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <h1 className="pricingHeadline">
                Simple, Transparent Pricing Plans
              </h1>
            </div>
            <div className="">
              <p className="text-center pricingPera py-2 mx-5 lg:mx-0 xl:mx-0 md:mx-16">
                Choose the perfect plan for your business. Scale as you grow.
              </p>
            </div>
            <div className="flex justify-center py-2 mx-5 lg:mx-5 xl:mx-5 md:mx-16">
              <button className="flex items-center pricingWhatsAppText px-10 py-2 rounded-full">
                {" "}
                <span className="me-2">
                  <img src="/images/tike.png" alt="" />
                </span>{" "}
                WhatsApp messaging at actual Meta rates, no markup
              </button>
            </div>
            {/* slider */}
            {/* <div className="block mx-44 pt-5">
              <Swiper
                spaceBetween={10}
                navigation={{
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                }}
                modules={[Navigation]} 
                className="mySwiper"
                breakpoints={{
                  
                  320: {
                    slidesPerView: 3.4,
                    spaceBetween: 10,
                  },
                  
                  768: {
                    slidesPerView: 3.4,
                    spaceBetween: 10,
                  },
                  
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
            </div> */}
            <div className="mx-5 lg:mx-60 xl:mx-96 pt-6">
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                <div className="pricingHerogridCardDiv flex justify-center items-center px-2 py-2 rounded-xl">
                  <div className="pricingHeorIconDiv">
                    <img src="/images/pricing 1000003900.png" alt="" />
                  </div>
                  <p className="pricingHerogridCardPera ms-2">
                    Dedicated Account Manager
                  </p>
                </div>

                <div className="pricingHerogridCardDiv flex justify-center items-center px-2 py-2 rounded-xl">
                  <div className="pricingHeorIconDiv">
                    <img src="/images/pricing1000003911.png" alt="" />
                  </div>
                  <p className="pricingHerogridCardPera ms-2">
                    Enterprise-Grade Platform
                  </p>
                </div>

                <div className="pricingHerogridCardDiv flex justify-center items-center px-2 py-2 rounded-xl">
                  <div className="pricingHeorIconDiv">
                    <img src="/images/pricing 1000003900 (1).png" alt="" />
                  </div>
                  <p className="pricingHerogridCardPera ms-2">
                    24/7 WhatsApp Support
                  </p>
                </div>

                <div className="pricingHerogridCardDiv flex justify-center items-center px-2 py-2 rounded-xl">
                  <div className="pricingHeorIconDiv">
                    <img src="/images/pricing 1000003900 (2).png" alt="" />
                  </div>
                  <p className="pricingHerogridCardPera ms-2">
                    Global Business Solution
                  </p>
                </div>

                <div className="pricingHerogridCardDiv flex justify-center items-center px-2 py-2 rounded-xl">
                  <div className="pricingHeorIconDiv">
                    <img src="/images/pricing1000003900 (3).png" alt="" />
                  </div>
                  <p className="pricingHerogridCardPera ms-2">
                    End-to-End Encrypted
                  </p>
                </div>

                <div className="pricingHerogridCardDiv flex justify-center items-center px-2 py-2 rounded-xl">
                  <div className="pricingHeorIconDiv">
                    <img src="/images/pricing 1000003900 (4).png" alt="" />
                  </div>
                  <p className="pricingHerogridCardPera ms-2">
                    Real-time Message Delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* pricing */}
      <section className="mx-5 lg:mx-48 xl:mx-48 md:mx-16">
        {/* toggole button */}
        <div className="flex justify-center py-10">
          <div className="pricingButtonTaggole px-6 py-2 space-x-5 rounded-full">
            <button className="text-center">Month</button>
            <button className="bg-green-300 px-2 py-1 rounded-full">
              Yearly
            </button>
          </div>
        </div>

        <div></div>
      </section>
    </div>
  );
};

export default PricingPage;
