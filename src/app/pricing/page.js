"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const PricingPage = () => {
  // const plans = [
  //   {
  //     name: "Silver Plan",
  //     price: "$149.00",
  //     duration: "Per quarter",
  //     features: [
  //       "1 WhatsApp API Channel",
  //       "1 Million Contacts",
  //       "5 Team Members",
  //       "No markup on WhatsApp conversations",
  //       "1 WhatsApp Commerce Store",
  //       "5000 Products",
  //       "5000 Orders",
  //       "5000 Abandoned Carts",
  //       "Do It Yourself Bot Building",
  //       "1 Million Bot Triggers",
  //       "5000 External Actions",
  //       "Support in 12 Working Hours",
  //       "20 Messages / Second Limit",
  //       "No Conv Monthly FUP Limit",
  //     ],
  //   },
  //   {
  //     name: "Gold Plan",
  //     price: "$349.00",
  //     duration: "Per quarter",
  //     recommended: true,
  //     features: [
  //       "1 WhatsApp API Channel",
  //       "1 Million Contacts",
  //       "10 Team Members",
  //       "No markup on WhatsApp conversations",
  //       "1 WhatsApp Commerce Store",
  //       "10,000 Products",
  //       "10,000 Orders",
  //       "10,000 Abandoned Carts",
  //       "Up to 30 Blocks Bot Building",
  //       "2 Million Bot Triggers",
  //       "10,000 External Actions",
  //       "Support in 6 Working Hours",
  //       "40 Messages / Second Limit",
  //       "No Conv Monthly FUP Limit",
  //     ],
  //   },
  //   {
  //     name: "Platinum V1",
  //     price: "$2500.00",
  //     duration: "Annually",
  //     features: [
  //       "3 WhatsApp API Channels",
  //       "5 Million Contacts",
  //       "25 Team Members",
  //       "No markup on WhatsApp conversations",
  //       "3 WhatsApp Commerce Stores",
  //       "20,000 Products",
  //       "20,000 Orders",
  //       "20,000 Abandoned Carts",
  //       "Up to 150 Blocks Bot Building",
  //       "10 Million Bot Triggers",
  //       "50,000 External Actions",
  //       "Support in 2 Working Hours",
  //       "100 Messages / Second Limit",
  //       "No Conv Monthly FUP Limit",
  //     ],
  //   },
  // ];
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
          <div className="pricingButtonTaggoleDiv px-3 py-2 space-x-5 rounded-full">
            <button className="text-center px-2">Month</button>
            <button className="pricingToggoleButton px-5 py-1 rounded-full">
              Yearly
            </button>
            <p className="buttonSaveText">save 15%</p>
          </div>
        </div>
        {/* pricing card section */}
        <section className="pt-5 pb-10 hidden lg:block xl:block">
          <div className="grid grid-cols-4 items-center gap-5">
            <div>
              <h1 className="pricingFreaturesText">Features</h1>
            </div>
            <div className="silverPlanDiv flex items-center justify-center text-center">
              <div>
                <h1 className="packagePlaneNameText">Silver Plan</h1>
                <p className="pricingTKText">$149.00</p>
                <p className="text-xs opacity-60">Per quarter</p>
              </div>
            </div>
            <div class="pricing-card -mt-3">
              <div class="pricing-header">Recommended</div>
              <div class="pricing-body">
                <h1 className="packagePlaneNameText pt-5">Gold Plan</h1>
                <p className="pricingTKText">$149.00</p>
                <p className="text-xs opacity-60">Per quarter</p>
              </div>
            </div>
            <div className="platinumPlanDiv flex items-center justify-center text-center">
              <div>
                <h1 className="packagePlaneNameText">Plainum Plan V1</h1>
                <p className="pricingTKText">$149.00</p>
                <p className="text-xs opacity-60">Per quarter</p>
              </div>
            </div>
          </div>
        </section>
        {/* discriction */}
        <section className="pb-20 hidden lg:block xl:block">
          <div className="grid grid-cols-4">
            <div className="">
              <div className="border-b-2 flex items-end">
                <h1 className="mb-2 text-lg feturesHead pt-4">CRM Features</h1>
              </div>
              <div className="feturesTexts">
                <p className="border-b featuresTextPadding flex items-center">
                  WhatsApp API Channel ⓘ
                </p>
                <p className="featuresTextPadding border-b flex items-center">
                  Contacts in CRM ⓘ
                </p>
                <p className="featuresTextPadding border-b flex items-center">
                  Team Members ⓘ
                </p>
                <p className="featuresTextPadding border-b flex items-center">
                  WhatsApp Conversations Markup ⓘ
                </p>
              </div>
              <div className="feturesTexts">
                <p className="spasingHeght flex items-center"></p>
                <p className="border-b featuresTextPadding flex items-center">
                  <span className="tex-2xl feturesHead pt-4">
                    Ecommerce Features
                  </span>
                </p>
                <p className="featuresTextPadding border-b flex items-center">
                  WhatsApp Commerce Store ⓘ
                </p>
                <p className="featuresTextPadding border-b flex items-center">
                  Products Limit ⓘ
                </p>
                <p className="featuresTextPadding border-b flex items-center">
                  Orders Limit ⓘ
                </p>
                <p className="featuresTextPadding border-b flex items-center">
                  Abandoned Carts ⓘ
                </p>
              </div>
              <div className="feturesTexts">
                <p className="spasingHeght flex items-center"></p>
                <p className="border-b featuresTextPadding flex items-center">
                  <span className="tex-lg feturesHead pt-4">
                    Bots & Automation
                  </span>
                </p>
                <p className="featuresTextPadding border-b flex items-center">
                  Bot Building Blocks ⓘ
                </p>
                <p className="featuresTextPadding border-b flex items-center">
                  Bot/Automation Triggers ⓘ
                </p>
                <p className="featuresTextPadding border-b flex items-center">
                  External Actions ⓘ
                </p>
              </div>
              <div className="feturesTexts">
                <p className="spasingHeght flex items-center"></p>
                <p className="border-b featuresTextPadding flex items-center">
                  <span className="tex-lg feturesHead pt-4">Support</span>
                </p>
                <p className="featuresTextPadding border-b flex items-center">
                  WABA & CRM SLA ⓘ
                </p>
                <p className="featuresTextPadding border-b flex items-center">
                  Bot/Automation Support ⓘ
                </p>
              </div>
              <div className="feturesTexts">
                <p className="spasingHeght flex items-center"></p>
                <p className="border-b featuresTextPadding flex items-center">
                  <span className="tex-lg feturesHead pt-4">
                    Technical Limits
                  </span>
                </p>
                <p className="featuresTextPadding border-b flex items-center">
                  Messages/Second ⓘ
                </p>
                <p className="featuresTextPadding border-b flex items-center">
                  Monthly FUP Limit ⓘ
                </p>
              </div>
            </div>
            {/* silver */}
            <div className="">
              <div className="text-white border-b-2">
                <h1 className="mb-2 text-lg feturesHead"></h1>
              </div>
              <div className="featuresDiscription">
                <p className=" flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  1 WhatsApp API Channel
                </p>
                <p className=" flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  1 Million Contacts
                </p>
                <p className=" flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  5 Team Members
                </p>
                <p className=" flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  No markup on WhatsApp conversations
                </p>
              </div>
              <div className="feturesTexts">
                <p className="spasingHeght flex items-center"></p>
                <p className="border-b featuresTextPadding flex items-center">
                  <span className="tex-lg text-white">Ecommerce Features</span>
                </p>
                <p className="featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  1 WhatsApp Commerce Store
                </p>
                <p className="featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  5000 Products
                </p>
                <p className="featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  5000 Orders
                </p>
                <p className="featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  5000 Abandoned Carts
                </p>
              </div>
              <div className="feturesTexts">
                <p className="spasingHeght flex items-center"></p>
                <p className="border-b featuresTextPadding flex items-center">
                  <span className="tex-lg text-white">Ecommerce Features</span>
                </p>
                <p className="featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  Do It Yourself
                </p>
                <p className="featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  1 Million Bot Triggers
                </p>
                <p className="featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  5000 External Actions
                </p>
              </div>
              <div className="feturesTexts">
                <p className="spasingHeght flex items-center"></p>
                <p className="border-b featuresTextPadding flex items-center">
                  <span className="tex-lg text-white"></span>
                </p>
                <p className="featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  Support in 12 Working Hours
                </p>
                <p className="featuresDiscription flex items-center border-b featuresTextPadding text-red-500">
                  <span className="me-2">
                    <img src="/images/SVG.png" alt="" />
                  </span>
                  No Bot / Automation Support
                </p>
              </div>
              <div className="feturesTexts">
                <p className="spasingHeght flex items-center"></p>
                <p className="border-b featuresTextPadding flex items-center">
                  <span className="tex-lg text-white">Ecommerce Features</span>
                </p>
                <p className="featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  20 Messages / Second Limit
                </p>
                <p className="featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  No Conv Monthly FUP Limit
                </p>
              </div>
            </div>
            {/* gold */}
            <div className="border border-green-500 rounded-xl">
              <div className="text-white border-b-2 ">
                <h1 className="mb-2 text-lg feturesHead"></h1>
              </div>
              <div className="featuresDiscription">
                <p className="ps-3 flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  1 WhatsApp API Channel
                </p>
                <p className="ps-3 flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  1 Million Contacts
                </p>
                <p className="ps-3 flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  10 Team Members
                </p>
                <p className="ps-3 flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  No markup on WhatsApp conversations
                </p>
              </div>
              <div className="feturesTexts">
                <p className="spasingHeght flex items-center"></p>
                <p className="ps-3 border-b featuresTextPadding flex items-center">
                  <span className="tex-lg text-white"></span>
                </p>
                <p className="ps-3 featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  1 WhatsApp Commerce Store
                </p>
                <p className="ps-3 featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  10000 Products
                </p>
                <p className="ps-3 featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  10000 Orders
                </p>
                <p className="ps-3 featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  10000 Abandoned Carts
                </p>
              </div>
              <div className="feturesTexts">
                <p className=" spasingHeght flex items-center"></p>
                <p className="ps-3 border-b featuresTextPadding flex items-center">
                  <span className="tex-lg text-white"></span>
                </p>
                <p className="ps-3 featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  Upto 30 Blocks Bot Building
                </p>
                <p className="ps-3 featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  2 Million Bots / Automations Triggers
                </p>
                <p className="ps-3 featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  10000 External Actions in Bots
                </p>
              </div>
              <div className="feturesTexts">
                <p className="spasingHeght flex items-center"></p>
                <p className="ps-3 border-b featuresTextPadding flex items-center">
                  <span className="tex-lg text-white"></span>
                </p>
                <p className="ps-3 featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  Support In 6 Working Hours
                </p>
                <p className="ps-3 featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  3 Bots / Automations Debugging
                </p>
              </div>
              <div className="feturesTexts">
                <p className="ps-3 spasingHeght flex items-center"></p>
                <p className="border-b featuresTextPadding flex items-center">
                  <span className="tex-lg text-white"></span>
                </p>
                <p className="ps-3 featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  40 Messages / Second Limit
                </p>
                <p className="ps-3 featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  No Conv Monthly FUP Limit
                </p>
                <p className="featuresDiscription flex items-center featuresTextPadding"></p>
              </div>
            </div>
            {/* platimun */}
            <div className="">
              <div className="text-white border-b-2">
                <h1 className="mb-2 text-lg feturesHead"></h1>
              </div>
              <div className="featuresDiscription">
                <p className="ps-2 flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  1 WhatsApp API Channel
                </p>
                <p className="ps-2 flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  1 Million Contacts
                </p>
                <p className="ps-2 flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  10 Team Members
                </p>
                <p className="ps-2 flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  No markup on WhatsApp conversations
                </p>
              </div>
              <div className="feturesTexts">
                <p className="spasingHeght flex items-center"></p>
                <p className="border-b featuresTextPadding flex items-center">
                  <span className="tex-lg text-white">Ecommerce Features</span>
                </p>
                <p className="ps-2 featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  3 WhatsApp Commerce Store
                </p>
                <p className="ps-2 featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  20000 Products
                </p>
                <p className="ps-2 featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  20000 Orders
                </p>
                <p className="ps-2 featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  20000 Abandoned Carts
                </p>
              </div>
              <div className="feturesTexts">
                <p className="spasingHeght flex items-center"></p>
                <p className="ps-2 border-b featuresTextPadding flex items-center">
                  <span className="tex-lg text-white">Ecommerce Features</span>
                </p>
                <p className="ps-2 featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  Upto 150 Blocks Bot Building
                </p>
                <p className="ps-2 featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  10 Million Bots / Automations Triggers
                </p>
                <p className="ps-2 featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  50000 External Actions in Bots
                </p>
              </div>
              <div className="feturesTexts">
                <p className="ps-2 spasingHeght flex items-center"></p>
                <p className="ps-2 border-b featuresTextPadding flex items-center">
                  <span className="tex-lg text-white"></span>
                </p>
                <p className="ps-2 featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  Support In 2 Working Hours
                </p>
                <p className="ps-2 featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  10 Bots / Automations Debugging
                </p>
              </div>
              <div className="feturesTexts">
                <p className="spasingHeght flex items-center"></p>
                <p className="ps-2 border-b featuresTextPadding flex items-center">
                  <span className="tex-lg text-white"></span>
                </p>
                <p className="ps-2 featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  100 Messages / Second Limit
                </p>
                <p className="ps-2 featuresDiscription flex items-center border-b featuresTextPadding">
                  <span className="me-2">
                    <img src="/images/greenTik.png" alt="" />
                  </span>
                  No Conv Monthly FUP Limit
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* pricing for phone */}
      <section className="mx-5 md:mx-16 block lg:hidden xl:hidden">
        <div className="pb-10 grid grid-cols-1">
          {/* price dive */}
          {/* silver */}
          <div>
            <div className="silverPlanDiv flex items-center justify-center text-center">
              <div>
                <h1 className="packagePlaneNameText">Silver Plan</h1>
                <p className="pricingTKText">$149.00</p>
                <p className="text-xs opacity-60">Per quarter</p>
              </div>
            </div>
            {/* details */}
            <div className="pt-4">
              <div className="feturesTexts">
                <div className="border-b-2 flex items-end">
                  <h1 className="mb-2 text-lg feturesHead pt-4">
                    CRM Features
                  </h1>
                </div>
                <div className="grid grid-cols-2 w-full border-b">
                  <p className=" featuresTextPadding flex items-center">
                    WhatsApp API Channel ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    1 WhatsApp API Channel
                  </p>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <p className=" featuresTextPadding flex items-center">
                    Contacts in CRM ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    1 Million Contacts
                  </p>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <p className=" featuresTextPadding flex items-center">
                    Team Members ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    5 Team Members
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <p className=" featuresTextPadding flex items-center">
                    WhatsApp Conversations Markup ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    No markup on WhatsApp conversations
                  </p>
                </div>
              </div>
            </div>
            {/* details */}
            <div className="pt-3">
              <div className="feturesTexts">
                <div className="border-b-2 flex items-end">
                  <h1 className="mb-2 text-lg feturesHead pt-4">
                    Ecommerce Features
                  </h1>
                </div>
                <div className="grid grid-cols-2 w-full border-b">
                  <p className=" featuresTextPadding flex items-center">
                    WhatsApp Commerce Store ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    1 WhatsApp Commerce Store
                  </p>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <p className=" featuresTextPadding flex items-center">
                    Products Limit ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    5000 Products
                  </p>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <p className=" featuresTextPadding flex items-center">
                    Orders Limit ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    5000 Orders
                  </p>
                </div>
                <div className="grid grid-cols-2 ">
                  <p className=" featuresTextPadding flex items-center">
                    Abandoned Carts ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    5000 Abandoned Carts
                  </p>
                </div>
              </div>
            </div>
            {/* details */}
            <div className="pt-3">
              <div className="feturesTexts">
                <div className="border-b-2 flex items-end">
                  <h1 className="mb-2 text-lg feturesHead pt-4">
                    Bots & Automation
                  </h1>
                </div>
                <div className="grid grid-cols-2 w-full border-b">
                  <p className=" featuresTextPadding flex items-center">
                    Bot Building Blocks ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    Do It Yourself
                  </p>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <p className=" featuresTextPadding flex items-center">
                    Bot/Automation Triggers ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    1 Million Bot Triggers
                  </p>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <p className=" featuresTextPadding flex items-center">
                    External Actions ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    5000 External Actions
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <p className=" featuresTextPadding flex items-center">
                    Abandoned Carts ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    5000 Abandoned Carts
                  </p>
                </div>
              </div>
            </div>
            {/* details */}
            <div className="pt-3">
              <div className="feturesTexts">
                <div className="border-b-2 flex items-end">
                  <h1 className="mb-2 text-lg feturesHead pt-4">Support</h1>
                </div>
                <div className="grid grid-cols-2 w-full border-b">
                  <p className=" featuresTextPadding flex items-center">
                    WABA & CRM SLA ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    Support in 12 Working Hours
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <p className=" featuresTextPadding flex items-center">
                    Bot/Automation Support ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding text-red-500">
                    <span className="me-2">
                      <img src="/images/svg.png" alt="" />
                    </span>
                    No Bot / Automation Support
                  </p>
                </div>
              </div>
            </div>
            {/* details */}
            <div className="pt-3">
              <div className="feturesTexts">
                <div className="border-b-2 flex items-end">
                  <h1 className="mb-2 text-lg feturesHead pt-4">
                    Technical Limits
                  </h1>
                </div>
                <div className="grid grid-cols-2 w-full border-b">
                  <p className=" featuresTextPadding flex items-center">
                    Messages/Second ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    20 Messages / Second Limit
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <p className=" featuresTextPadding flex items-center">
                    Monthly FUP Limit ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding ">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    No Conv Monthly FUP Limit
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* gold */}
          <div className="pt-10">
            <div class="pricing-card">
              <div class="pricing-header">Recommended</div>
              <div class="pricing-body">
                <h1 className="packagePlaneNameText pt-5">Gold Plan</h1>
                <p className="pricingTKText">$149.00</p>
                <p className="text-xs opacity-60">Per quarter</p>
              </div>
            </div>
          </div>
          <div className=" border border-green-500 rounded-lg mt-10 p-2">
            {/* details */}
            <div className="pt-4">
              <div className="feturesTexts">
                <div className="border-b-2 flex items-end">
                  <h1 className="mb-2 text-lg feturesHead pt-4">
                    CRM Features
                  </h1>
                </div>
                <div className="grid grid-cols-2 w-full border-b">
                  <p className=" featuresTextPadding flex items-center">
                    WhatsApp API Channel ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    1 WhatsApp API Channel
                  </p>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <p className=" featuresTextPadding flex items-center">
                    Contacts in CRM ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    1 Million Contacts
                  </p>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <p className=" featuresTextPadding flex items-center">
                    Team Members ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    10 Team Members
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <p className=" featuresTextPadding flex items-center">
                    WhatsApp Conversations Markup ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    No markup on WhatsApp conversations
                  </p>
                </div>
              </div>
            </div>
            {/* details */}
            <div className="pt-3">
              <div className="feturesTexts">
                <div className="border-b-2 flex items-end">
                  <h1 className="mb-2 text-lg feturesHead pt-4">
                    Ecommerce Features
                  </h1>
                </div>
                <div className="grid grid-cols-2 w-full border-b">
                  <p className=" featuresTextPadding flex items-center">
                    WhatsApp Commerce Store ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    1 WhatsApp Commerce Store
                  </p>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <p className=" featuresTextPadding flex items-center">
                    Products Limit ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    10000 Products
                  </p>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <p className=" featuresTextPadding flex items-center">
                    Orders Limit ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    10000 Orders
                  </p>
                </div>
                <div className="grid grid-cols-2 ">
                  <p className=" featuresTextPadding flex items-center">
                    Abandoned Carts ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    10000 Abandoned Carts
                  </p>
                </div>
              </div>
            </div>
            {/* details */}
            <div className="pt-3">
              <div className="feturesTexts">
                <div className="border-b-2 flex items-end">
                  <h1 className="mb-2 text-lg feturesHead pt-4">
                    Bots & Automation
                  </h1>
                </div>
                <div className="grid grid-cols-2 w-full border-b">
                  <p className=" featuresTextPadding flex items-center">
                    Bot Building Blocks ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    Upto 30 Blocks Bot Building
                  </p>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <p className=" featuresTextPadding flex items-center">
                    Bot/Automation Triggers ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    2 Million Bots / Automations Triggers
                  </p>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <p className=" featuresTextPadding flex items-center">
                    External Actions ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    10000 External Actions in Bots
                  </p>
                </div>
              </div>
            </div>
            {/* details */}
            <div className="pt-3">
              <div className="feturesTexts">
                <div className="border-b-2 flex items-end">
                  <h1 className="mb-2 text-lg feturesHead pt-4">Support</h1>
                </div>
                <div className="grid grid-cols-2 w-full border-b">
                  <p className=" featuresTextPadding flex items-center">
                    WABA & CRM SLA ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    Support in 12 Working Hours
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <p className=" featuresTextPadding flex items-center">
                    Bot/Automation Support ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    3 Bots / Automations Debugging
                  </p>
                </div>
              </div>
            </div>
            {/* details */}
            <div className="pt-3">
              <div className="feturesTexts">
                <div className="border-b-2 flex items-end">
                  <h1 className="mb-2 text-lg feturesHead pt-4">
                    Technical Limits
                  </h1>
                </div>
                <div className="grid grid-cols-2 w-full border-b">
                  <p className=" featuresTextPadding flex items-center">
                    Messages/Second ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    20 Messages / Second Limit
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <p className=" featuresTextPadding flex items-center">
                    Monthly FUP Limit ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding ">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    No Conv Monthly FUP Limit
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-3">
              <div className="feturesTexts">
                <div className="border-b-2 flex items-end">
                  <h1 className="mb-2 text-lg feturesHead pt-4">
                    Technical Limits
                  </h1>
                </div>
                <div className="grid grid-cols-2 w-full border-b">
                  <p className=" featuresTextPadding flex items-center">
                    Messages/Second ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    40 Messages / Second Limit
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <p className=" featuresTextPadding flex items-center">
                    Monthly FUP Limit ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding ">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    No Conv Monthly FUP Limit
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* platinum */}
          <div className="pt-10">
            <div className="platinumPlanDiv flex items-center justify-center text-center">
              <div>
                <h1 className="packagePlaneNameText">Platinum V1</h1>
                <p className="pricingTKText">$2500.00</p>
                <p className="text-xs opacity-60">Annually</p>
              </div>
            </div>
            {/* details */}
            <div className="pt-4">
              <div className="feturesTexts">
                <div className="border-b-2 flex items-end">
                  <h1 className="mb-2 text-lg feturesHead pt-4">
                    CRM Features
                  </h1>
                </div>
                <div className="grid grid-cols-2 w-full border-b">
                  <p className=" featuresTextPadding flex items-center">
                    WhatsApp API Channel ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    3 WhatsApp API Channel
                  </p>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <p className=" featuresTextPadding flex items-center">
                    Contacts in CRM ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    5 Million Contacts
                  </p>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <p className=" featuresTextPadding flex items-center">
                    Team Members ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    25 Team Members
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <p className=" featuresTextPadding flex items-center">
                    WhatsApp Conversations <br /> Markup ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    No markup on WhatsApp conversations
                  </p>
                </div>
              </div>
            </div>
            {/* details */}
            <div className="pt-3">
              <div className="feturesTexts">
                <div className="border-b-2 flex items-end">
                  <h1 className="mb-2 text-lg feturesHead pt-4">
                    Ecommerce Features
                  </h1>
                </div>
                <div className="grid grid-cols-2 w-full border-b">
                  <p className=" featuresTextPadding flex items-center">
                    WhatsApp Commerce Store ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    3 WhatsApp Commerce Store
                  </p>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <p className=" featuresTextPadding flex items-center">
                    Products Limit ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    20000 Products
                  </p>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <p className=" featuresTextPadding flex items-center">
                    Orders Limit ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    20000 Orders
                  </p>
                </div>
                <div className="grid grid-cols-2 ">
                  <p className=" featuresTextPadding flex items-center">
                    Abandoned Carts ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    20000 Abandoned Carts
                  </p>
                </div>
              </div>
            </div>
            {/* details */}
            <div className="pt-3">
              <div className="feturesTexts">
                <div className="border-b-2 flex items-end">
                  <h1 className="mb-2 text-lg feturesHead pt-4">
                    Bots & Automation
                  </h1>
                </div>
                <div className="grid grid-cols-2 w-full border-b">
                  <p className=" featuresTextPadding flex items-center">
                    Bot Building Blocks ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    Upto 150 Blocks Bot Building
                  </p>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <p className=" featuresTextPadding flex items-center">
                    Bot/Automation Triggers ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    10 Million Bots / Automations Triggers
                  </p>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <p className=" featuresTextPadding flex items-center">
                    External Actions ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    50000 External Actions in Bots
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <p className=" featuresTextPadding flex items-center">
                    Abandoned Carts ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    5000 Abandoned Carts
                  </p>
                </div>
              </div>
            </div>
            {/* details */}
            <div className="pt-3">
              <div className="feturesTexts">
                <div className="border-b-2 flex items-end">
                  <h1 className="mb-2 text-lg feturesHead pt-4">Support</h1>
                </div>
                <div className="grid grid-cols-2 w-full border-b">
                  <p className=" featuresTextPadding flex items-center">
                    WABA & CRM SLA ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    Support in 12 Working Hours
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <p className=" featuresTextPadding flex items-center">
                    Bot/Automation Support ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    10 Bots / Automations Debugging
                  </p>
                </div>
              </div>
            </div>
            {/* details */}
            <div className="pt-3">
              <div className="feturesTexts">
                <div className="border-b-2 flex items-end">
                  <h1 className="mb-2 text-lg feturesHead pt-4">
                    Technical Limits
                  </h1>
                </div>
                <div className="grid grid-cols-2 w-full border-b">
                  <p className=" featuresTextPadding flex items-center">
                    Messages/Second ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    100 Messages / Second Limit
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <p className=" featuresTextPadding flex items-center">
                    Monthly FUP Limit ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding ">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    No Conv Monthly FUP Limit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aditional */}
      <section className="additionalbg py-16">
        <div className="mx-5 lg:mx-48 xl:mx-48 md:mx-16">
          {/* headline */}
          <div className="text-center">
            <h1 className="additonalText text-center">Additional Services</h1>
            <p className="additonalPera pt-1">Customize your plan with these add-ons</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
