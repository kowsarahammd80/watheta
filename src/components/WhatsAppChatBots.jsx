"use client";

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const WhatsAppChatBots = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="whatsAppChatBotsBg py-12 lg:py-20 xl:py-20 md:py-16">
      {/*  */}
      <section
        className={`flex flex-col-reverse lg:flex-row xl:flex-row md:flex-col-reverse items-start lg:items-center xl:items-center mx-5 lg:mx-40 xl:mx-40 gap-10 lg:gap-20 xl:gap-20`}
      >
        {/* ing contents */}
        <div className="justify-center items-center whatsAppChatbotsImgDiv">
          <img
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            id="animate-section"
            className={`whatsAppChatbotsImg`}
            src="https://watheta.com/wp-content/uploads/2023/09/63febbc449df0b1092ec79e9_Discovery-p-800.png"
            alt=""
          />
        </div>
        {/* text contents */}
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="justify-start lg:justify-end xl:justify-end ms-0 lg:ms-16 xl:ms-16 md:ms-8 w-full"
        >
          <button className="whatsAppChatBotsText px-6 py-1 rounded-full border flex items-center cardHover">
            {" "}
            {/* <span className="wahtsChatbotswhatsLogoDiv me-2">
              <img
                className="wahtsChatbotswhatsLogo"
                src="/images/wahts.png"
                alt=""
              />
            </span>{" "} */}
            Interactive Chatbot
          </button>
          <p className="KeepYourBusinessText pt-4 ">
            Keep your business open 24x7 without human
          </p>
          <p className="whatsAppChatBotsTextPera pt-4">
          Easily set up WhatsApp bots that reply instantly, ask the right questions, guide your customers step-by-step, and handle routine tasks
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <p className="persentTextNumber">100%</p>
              <p className="persentText">Boost in First Response Time</p>
            </div>
            <div>
              <p className="persentTextNumber">30%</p>
              <p className="pt-2 persentText">
                Improvement in Customer Satisfaction
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <p className="persentTextNumber">25%</p>
              <p className="pt-2 persentText">
                Rise in Sales Through Instant Engagement
              </p>
            </div>
            <div>
              <p className="persentTextNumber">34%</p>
              <p className="pt-2 persentText">
                Save in Operational Costs Y-O-Y
              </p>
            </div>
          </div>
          <div className="pt-5 flex items-center">
            <button className="font-normal flex items-center justify-between bg-white px-5 lg:px-8 xl:px-8 lg:py-2 xl:py-2 py-1 rounded-full border cardHover">
              Try Now{" "}
              <span className="ms-3">
                <img src="/images/Group 1000002679.png" alt="" />
              </span>
            </button>
            <button className="ms-8 border-b-2 border-gray-800">
              Read more
            </button>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="py-8">
            <p className="repleacesText">Replaces</p>
            <div className="pt-5 flex items-center gap-1">
              <p className="bg-white px-2 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/image 251.png"
                    alt=""
                  />
                </span>
                ManyChats
              </p>
              <p className="bg-white px-2 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/image 252.png"
                    alt=""
                  />
                </span>
                Fuelchats
              </p>
              <p className="bg-white px-2 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/image 253.png"
                    alt=""
                  />
                </span>
                Wati
              </p>
              <p className="bg-white px-2 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/image 254.png"
                    alt=""
                  />
                </span>
                Interkat
              </p>
            </div>
            <div className="flex items-center gap-1 pt-2">
              <p className="bg-white px-2 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/image 255.png"
                    alt=""
                  />
                </span>
                Landbot
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatsAppChatBots;
