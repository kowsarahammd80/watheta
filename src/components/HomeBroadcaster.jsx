"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeBroadcaster = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div className="broadcasterBg py-12 lg:py-20 xl:py-20 md:py-16">
      {/*  */}
      <section className="flex flex-col-reverse lg:flex-row xl:flex-row mx-5 lg:mx-40 xl:mx-40 gap-10 lg:gap-20 xl:gap-20 ">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex justify-center items-center whatsAppChatbotsImgDiv"
        >
          <img
            className="whatsAppChatbotsImg"
            src="https://watheta.com/wp-content/uploads/2023/09/63a19d17edec0d79fe28f5df_WhatsApp-Commerce-p-800-1.webp"
            alt=""
          />
        </div>
        {/* text div */}
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="w-full"
        >
          <div className="ms-0 lg:ms-16 xl:ms-16 md:ms-8">
            <button className="whatsAppChatBotsText px-6 py-1 rounded-full border flex items-center cardHover">
              {" "}
              <span className="wahtsChatbotswhatsLogoDiv me-2">
                <img
                  className="wahtsChatbotswhatsLogo"
                  src="/images/wahts.png"
                  alt=""
                />
              </span>{" "}
              Broadcast
            </button>
            <p className="KeepYourBusinessText pt-4">
              Instant bulk messaging for promotions, transactions, and
              announcements
            </p>
            <p className="whatsAppChatBotsTextPera pt-4">
              Broadcast product releases, newsletter, promotional offers without
              the risk of getting blocked
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="persentTextNumber">40%</p>
                <p className="w-1/2 pt-2 persentText">Uptick in Sales</p>
              </div>
              <div>
                <p className="persentTextNumber">98%</p>
                <p className="w-7/12 pt-2 persentText">open rate</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="persentTextNumber">3x</p>
                <p className="w-1/3 pt-2 persentText">
                  More engagement than SMS
                </p>
              </div>
              <div>
                <p className="persentTextNumber">10x</p>
                <p className="w-6/12 pt-2 persentText">ROI in festive campaigns</p>
              </div>
            </div>
            <div className="pt-5 flex items-center">
              <button className="font-normal flex items-center justify-between bg-white px-8 py-2 rounded-full border cardHover">
                Try Now{" "}
                <span className="ms-3">
                  <img src="/images/Group 1000002679.png" alt="" />
                </span>
              </button>
              <button className="ms-8 border-b border-gray-800">
                Read more
              </button>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="py-8"
            >
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
                      src="/images/image 279.png"
                      alt=""
                    />
                  </span>
                  Wait
                </p>
                <p className="bg-white px-2 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img
                      className="repleacesItemsLogo"
                      src="/images/image 280.png"
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
                      src="/images/image 281.png"
                      alt=""
                    />
                  </span>
                  Haptik
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBroadcaster;
