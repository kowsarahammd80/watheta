"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PricingPage = () => {
  const [isToggle, setIsToggle] = useState("month");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="pt-20">
      {/* hero */}
      <div className="pricingBg">
        {/* meta logo */}
        <div className="flex justify-center items-center pricingHeroContentDiv py-5 lg:py-10 xl:py-10">
          <div className="w-full">
            <div data-aos="zoom-in-down" className="flex justify-center pb-5">
              <div className="flex items-center justify-center pricingMetaLogoDivMain">
                <div className="pricingMetaLogoDiv">
                  <img className="pricingMetaLogo" src="/images/metaLogo.png" alt="" />
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

            <div className="mx-5 lg:mx-60 xl:mx-96 pt-6">
              <div
                data-aos="fade-up"
                className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5"
              >
                <div className="pricingHerogridCardDiv flex justify-center items-center px-2 py-2 rounded-xl">
                  <div className="pricingHeorIconDiv">
                    <img
                      className="pricingHeorIcon"
                      src="/images/pricing 1000003900.png"
                      alt=""
                    />
                  </div>
                  <p className="pricingHerogridCardPera ms-2">
                    Dedicated Account Manager
                  </p>
                </div>

                <div className="pricingHerogridCardDiv flex justify-center items-center px-2 py-2 rounded-xl">
                  <div className="pricingHeorIconDiv">
                    <img
                      className="pricingHeorIcon"
                      src="/images/pricing1000003911.png"
                      alt=""
                    />
                  </div>
                  <p className="pricingHerogridCardPera ms-2">
                    Enterprise-Grade Platform
                  </p>
                </div>

                <div className="pricingHerogridCardDiv flex justify-center items-center px-2 py-2 rounded-xl">
                  <div className="pricingHeorIconDiv">
                    <img
                      className="pricingHeorIcon"
                      src="/images/pricing 1000003900 (1).png"
                      alt=""
                    />
                  </div>
                  <p className="pricingHerogridCardPera ms-2">
                    24/7 WhatsApp Support
                  </p>
                </div>

                <div className="pricingHerogridCardDiv flex justify-center items-center px-2 py-2 rounded-xl">
                  <div className="pricingHeorIconDiv">
                    <img
                      className="pricingHeorIcon"
                      src="/images/pricing 1000003900 (2).png"
                      alt=""
                    />
                  </div>
                  <p className="pricingHerogridCardPera ms-2">
                    Global Business Solution
                  </p>
                </div>

                <div className="pricingHerogridCardDiv flex justify-center items-center px-2 py-2 rounded-xl">
                  <div className="pricingHeorIconDiv">
                    <img
                      className="pricingHeorIcon"
                      src="/images/pricing1000003900 (3).png"
                      alt=""
                    />
                  </div>
                  <p className="pricingHerogridCardPera ms-2">
                    End-to-End Encrypted
                  </p>
                </div>

                <div className="pricingHerogridCardDiv flex justify-center items-center px-2 py-2 rounded-xl">
                  <div className="pricingHeorIconDiv">
                    <img
                      className="pricingHeorIcon"
                      src="/images/pricing 1000003900 (4).png"
                      alt=""
                    />
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
      <section className="mx-5 lg:mx-40 xl:mx-40 md:mx-16">
        {/* toggole button */}
        <div className="flex justify-center py-10">
          <div className="pricingButtonTaggoleDiv ps-3 pe-1 py-1 space-x-3 rounded-full">
            <button
              onClick={() => setIsToggle("month")}
              className={` px-5 py-1 rounded-full ${
                isToggle === "month" && "pricingToggoleButton"
              }`}
            >
              Month
            </button>
            <button
              onClick={() => setIsToggle("year")}
              className={`ps-5 pe-1 py-1 rounded-full ${
                isToggle === "year" && "pricingToggoleButton"
              }`}
            >
              Yearly
              <span className="saveText border rounded-full ms-1"> <span>save 15%</span> </span>
            </button>
             {/* <p className="buttonSaveText">save 15%</p> */}
            {/* <p className="buttonSaveText"> {
              isToggle === "year"&& "save 15%"
              }</p> */}
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

                <p className="pricingTKText">
                  {isToggle === "month" ? "৳ 149.00" : "৳ 299.00"}
                </p>
                <p className="text-xs opacity-60">
                  {isToggle === "month" ? "Per Month" : "Per Annual"}
                </p>
                {/* <p className="text-xs opacity-60">
                  {isToggle === "month" ? "With one time setup charge 1000 BDT" : ""}
                </p> */}
                <button className="text-sm text-white bg-green-500 px-4 py-1 rounded-full mt-2 border cardHover">
                  Sign Up Now
                </button>
              </div>
            </div>
            <div class="pricing-card -mt-3">
              <div class="pricing-header">Recommended</div>
              <div class="pricing-body">
                <h1 className="packagePlaneNameText pt-0">Gold Plan</h1>
                <p className="pricingTKText">
                  {" "}
                  {isToggle === "month" ? "৳ 1500" : "৳ 12000"}{" "}
                </p>
                <p className="text-xs opacity-60">
                  {isToggle === "month" ? "Per Month" : "Per Annual"}
                </p>
                {/* <p className="text-xs opacity-60">
                  {isToggle === "month" ? "With one time setup charge 1000 BDT" : ""}
                </p> */}
                <button className="text-sm text-white bg-green-500 px-4 py-1 rounded-full mt-2 border cardHover">
                  Sign Up Now
                </button>
              </div>
            </div>
            <div className="platinumPlanDiv flex items-center justify-center text-center">
              <div>
                <h1 className="packagePlaneNameText">Plainum Plan V1</h1>
                <p className="pricingTKText">
                  {" "}
                  {isToggle === "month" ? "৳ 2500" : "৳ 20000"}{" "}
                </p>
                <p className="text-xs opacity-60">
                  {isToggle === "month" ? "Per Month" : "Per Annual"}
                </p>
                {/* <p className="text-xs opacity-60">
                  {isToggle === "month" ? "With one time setup charge 1000 BDT" : ""}
                </p> */}
                <button className="text-sm text-white bg-green-500 px-4 py-1 rounded-full mt-2 border cardHover">
                  Sign Up Now
                </button>
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
                  <span className="tex-lg text-white"></span>
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
                  <span className="tex-lg text-white"></span>
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
                  <span className="tex-lg text-white"></span>
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
                <p className="pricingTKText">
                  {isToggle === "month" ? "৳ 149.00" : "৳ 99.00"}
                </p>
                <p className="text-xs opacity-60">
                  {isToggle === "month" ? "Per Month" : "Per Annual"}
                </p>
                {/* <p className="text-xs opacity-60">
                  {isToggle === "month" ? "With one time setup charge 1000 BDT" : ""}
                </p> */}
                <button className="text-sm text-white bg-green-500 px-4 py-1 rounded-full mt-2 border cardHover">
                  Sign Up Now
                </button>
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
                <h1 className="packagePlaneNameText pt-1">Gold Plan</h1>
                <p className="pricingTKText">
                  {isToggle === "month" ? "৳ 1500" : "৳ 12000"}
                </p>
                <p className="text-xs opacity-60">
                  {isToggle === "month" ? "Per Month" : "Per Annual"}
                </p>
                {/* <p className="text-xs opacity-60">
                  {isToggle === "month" ? "With one time setup charge 1000 BDT" : ""}
                </p> */}
                <button className="text-sm text-white bg-green-500 px-4 py-1 rounded-full mt-2 border cardHover">
                  Sign Up Now
                </button>
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
                <p className="pricingTKText">
                  {isToggle === "month" ? "৳ 2500" : "৳ 20000"}
                </p>
                <p className="text-xs opacity-60">
                  {isToggle === "month" ? "Per Month" : "Per Annual"}
                </p>
                {/* <p className="text-xs opacity-60">
                  {isToggle === "month" ? "With one time setup charge 1000 BDT" : ""}
                </p> */}
                <button className="text-sm text-white bg-green-500 px-4 py-1 rounded-full mt-2 border cardHover">
                  Sign Up Now
                </button>
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
            <p className="additonalPera pt-1">
              Customize your plan with these add-ons
            </p>
          </div>
          {/* card  */}
          <div
            data-aos="zoom-in"
            className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5 lg:gap-8 xl:gap-8 pt-10"
          >
            <div className="cardBgColor py-5 px-6 border rounded-lg">
              {/* icon */}
              <div className="additonalCardIconDiv pt-2">
                <img
                  className="additonalCardIcon"
                  src="/images/pricing 1000003900.png"
                  alt=""
                />
              </div>
              <div className="py-4">
                <h1 className="text-md lg:text-lg xl:text-lg md:text-md font-semibold">
                  Team Member
                </h1>
                <p className="aditionlCardPera pt-1">
                  Additional team member access
                </p>
                <p className="pt-2 aditionalPrice">
                  $10 <span className="aditonalpermaoth">/per month</span>
                </p>
              </div>
            </div>
            <div className="cardBgColor py-5 px-6 border rounded-lg">
              {/* icon */}
              <div className="additonalCardIconDiv pt-2">
                <img
                  className="additonalCardIcon"
                  src="/images/Group 1000003922.png"
                  alt=""
                />
              </div>
              <div className="py-4">
                <h1 className="text-md lg:text-lg xl:text-lg md:text-md font-semibold">
                  Social Channel
                </h1>
                <p className="aditionlCardPera pt-1">
                  Additional social media channel
                </p>
                <p className="pt-2 aditionalPrice">
                  $10 <span className="aditonalpermaoth">/per month</span>
                </p>
              </div>
            </div>
            <div className="cardBgColor py-5 px-6 border rounded-lg">
              {/* icon */}
              <div className="additonalCardIconDiv pt-2">
                <img
                  className="additonalCardIcon"
                  src="/images/Group 1010003922.png"
                  alt=""
                />
              </div>
              <div className="py-4">
                <h1 className="text-md lg:text-lg xl:text-lg md:text-md font-semibold">
                  External Actions
                </h1>
                <p className="aditionlCardPera pt-1">
                  Additional external actions
                </p>
                <p className="pt-2 aditionalPrice">
                  $10 <span className="aditonalpermaoth">/per month</span>
                </p>
              </div>
            </div>
            <div className="cardBgColor py-5 px-6 border rounded-lg">
              {/* icon */}
              <div className="additonalCardIconDiv pt-2">
                <img
                  className="additonalCardIcon"
                  src="/images/Group 1000003922 (1).png"
                  alt=""
                />
              </div>
              <div className="py-4">
                <h1 className="text-md lg:text-lg xl:text-lg md:text-md font-semibold">
                  Bot Triggers
                </h1>
                <p className="aditionlCardPera pt-1">
                  Additional external actions
                </p>
                <p className="pt-2 aditionalPrice">
                  $10{" "}
                  <span className="aditonalpermaoth">/per 25000 triggers</span>
                </p>
              </div>
            </div>
            <div className="cardBgColor py-5 px-6 border rounded-lg">
              {/* icon */}
              <div className="additonalCardIconDiv pt-2">
                <img
                  className="additonalCardIcon"
                  src="/images/Group 1000003922 (2).png"
                  alt=""
                />
              </div>
              <div className="py-4">
                <h1 className="text-md lg:text-lg xl:text-lg md:text-md font-semibold">
                  Ecom Store
                </h1>
                <p className="aditionlCardPera pt-1">
                  Additional external actions
                </p>
                <p className="pt-2 aditionalPrice">
                  $10{" "}
                  <span className="aditonalpermaoth">/per 25000 triggers</span>
                </p>
              </div>
            </div>
            <div className="cardBgColor py-5 px-6 border rounded-lg">
              {/* icon */}
              <div className="additonalCardIconDiv pt-2">
                <img
                  className="additonalCardIcon"
                  src="/images/Group 1000003922.png"
                  alt=""
                />
              </div>
              <div className="py-4">
                <h1 className="text-md lg:text-lg xl:text-lg md:text-md font-semibold">
                  Social Channel
                </h1>
                <p className="aditionlCardPera pt-1">
                  Additional social media channel
                </p>
                <p className="pt-2 aditionalPrice">
                  $10 <span className="aditonalpermaoth">/per month</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Dedicated Support Services */}
      <section className="mx-5 lg:mx-48 xl:mx-48 md:md-16 py-10">
        {/* headline */}
        <div>
          <h1 className="dedicatedText">Dedicated Support Services</h1>
          <p className="dedicatedPera pt-1">Get expert help when you need it</p>
        </div>
        {/* card */}
        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 pt-6 gap-2 lg:gap-6 xl:gap-6">
          <div
           
            className="bg-white p-3 lg:p-5 xl:p-5 border rounded-lg dedicatedCardDiv"
          >
            {/* icon div */}
            <div className="dedicatedIconDiv">
              <img
                className="dedicatedIcon"
                src="/images/Group 1030003922.png"
                alt=""
              />
            </div>
            {/* text */}
            <div>
              <h1 className="dedicatedcardHeadline py-4">
                WABA, CRM, Inbox Support
              </h1>
              <p className="aditionalPrice">
                $49 <span className="aditonalpermaoth">/per hour</span>
              </p>
            </div>
          </div>
          <div
          
            className="bg-white p-3 lg:p-5 xl:p-5 border rounded-lg dedicatedCardDiv"
          >
            {/* icon div */}
            <div className="dedicatedIconDiv">
              <img
                className="dedicatedIcon"
                src="/images/Group 1005003922.png"
                alt=""
              />
            </div>
            {/* text */}
            <div>
              <h1 className="dedicatedcardHeadline py-4">Ecommerce Support</h1>
              <p className="aditionalPrice">
                $99 <span className="aditonalpermaoth">/per hour</span>
              </p>
            </div>
          </div>
          <div
            
            className="bg-white p-3 lg:p-5 xl:p-5 border rounded-lg dedicatedCardDiv"
          >
            {/* icon div */}
            <div className="dedicatedIconDiv">
              <img
                className="dedicatedIcon"
                src="/images/Group 1004003922 (1).png"
                alt=""
              />
            </div>
            {/* text */}
            <div>
              <h1 className="dedicatedcardHeadline py-4">Bots Support</h1>
              <p className="aditionalPrice">
                $99 <span className="aditonalpermaoth">/per hour</span>
              </p>
            </div>
          </div>
          <div
            
            className="bg-white p-3 lg:p-5 xl:p-5 border rounded-lg dedicatedCardDiv"
          >
            {/* icon div */}
            <div className="dedicatedIconDiv">
              <img
                className="dedicatedIcon"
                src="/images/Group 1900003922.png"
                alt=""
              />
            </div>
            {/* text */}
            <div>
              <h1 className="dedicatedcardHeadline py-4">
                Automations Support
              </h1>
              <p className="aditionalPrice">
                $99 <span className="aditonalpermaoth">/per hour</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Ready to Transform Your Business Communication? */}
      <section className="py-10 lg:py-20 xl:py-20 communicationBg">
        <div className="mx-5 lg:mx-40 xl:mx-40 md:mx-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5 lg:gap-10 xl:gap-10">
            <div>
              <div>
                <h1 className="communicationText">
                  Ready to Transform Your Business Communication?
                </h1>
                <p className="communicationTextPera py-3">
                  Join thousands of businesses already growing with Watheta
                  intelligent automation platform.
                </p>
              </div>
              <div className="pt-2">
                <div className="py-4 flex items-center">
                  <div className="communicationIconDiv">
                    <img
                      className="communicationIcon"
                      src="/images/Group 100q03923.png"
                      alt=""
                    />
                  </div>
                  <div className="ms-4">
                    <p className="text-md lg:text-lg xl:text-lg font-semibold text-white">
                      Official Meta Partner
                    </p>
                    <p className="communicationIconPera pt-1">
                      Direct integration with WhatsApp Business API
                    </p>
                  </div>
                </div>
                <div className="py-4 flex items-center">
                  <div className="communicationIconDiv">
                    <img
                      className="communicationIcon"
                      src="/images/Group 100e003936.png"
                      alt=""
                    />
                  </div>
                  <div className="ms-4">
                    <p className="text-md lg:text-lg xl:text-lg font-semibold text-white">
                      Enterprise Security
                    </p>
                    <p className="communicationIconPera pt-1">
                      Your data is protected with industry-leading security.
                    </p>
                  </div>
                </div>
                <div className="py-4 flex items-center">
                  <div className="communicationIconDiv">
                    <img
                      className="communicationIcon"
                      src="/images/Group 100o003937.png"
                      alt=""
                    />
                  </div>
                  <div className="ms-4">
                    <p className="text-md lg:text-lg xl:text-lg font-semibold text-white">
                      Quick Setup & Integration
                    </p>
                    <p className="communicationIconPera pt-1">
                      Get started in minutes with our guided setup process
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form
              className="bg-white p-5 lg:p-10 xl:p-10 rounded-lg"
            >
              <div>
                <h1 className="schedulaDemoText">Schedule a Demo</h1>
                <p className="schedulaDemoPera py-3">
                  See how watheta can help your business grow with a
                  personalized demo.
                </p>
              </div>

              <div className="py-3 space-y-4">
                <input
                  className="bg-white scheduleInput border rounded-lg"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="bg-white scheduleInput border rounded-lg"
                  type="text"
                  placeholder="Business Email"
                />
                <input
                  className="bg-white scheduleInput border rounded-lg"
                  type="text"
                  placeholder="Phone Number"
                />
                <textarea
                  className="bg-white scheduleTextArea border rounded-lg"
                  type="text"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <div>
                <button className="flex items-center scheduleDemoButton">
                  Schedule Demo{" "}
                  <span className="ms-2">
                    <img src="/images/white1000002679.png" alt="" />
                  </span>{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Ready to Transform Your Business? */}
      <section className="mx-3 lg:mx-48 xl:mx-48 md:mx-16 pt-16 pb-16">
        <div className="joinOurNewsletterbgImgDiv">
          <img
            className="joinOurNewsletterbgImg hidden lg:block xl:block"
            src="/images/Group 1000002862.png"
            alt=""
          />
          <img
            className="joinOurNewsletterbgImg block lg:hidden xl:hidden"
            src="/images/PhoneBgnewsletter.png"
            alt=""
          />
          <div className="joinOurNewsletterContentDiv flex justify-center items-center">
            <div className="">
              <div className="flex justify-center">
                <h1 className="text-white transformYourBusinessText text-center">
                  Ready to Transform Your Business?
                </h1>
              </div>
              <p className="text-md lg:text-lg xl:text-lg text-white text-center pt-2 lg:pt-4 xl:pt-4 leading-relaxed mx-5 lg:mx-0 xl:mx-0">
                Join 23,000+ businesses already growing with our platform
              </p>

              {/* <div classNameName="pt-6 w-full joinournewsletterInputDiv">
                <input
                  className="joinournewsletterInput border-4 w-full"
                  type="text"
                  placeholder="Enter your email"
                />
                <button className="joinournewsletterSubscribeButton px-8 lg:px-10 xl:px-10 py-2 rounded-full">
                  Subscribe
                </button>
              </div> */}
              <div className="py-4">
                <button className="flex justify-center items-center readyToButton">
                  Get Started Now{" "}
                  <span className="ms-2 lg:ms-3 xl:ms-3">
                    <img src="/images/white1000002679.png" alt="" />
                  </span>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
