"use client";

import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhtasAppCommerce = () => {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, []) 
  return (
    <div className="py-12 lg:py-20 xl:py-20 md:py-16">
      {/*  */}
      <section className="flex flex-col lg:flex-row xl:flex-row mx-5 lg:mx-40 xl:mx-40 gap-10 lg:gap-20 xl:gap-20">
        {/* text div */}
        <div
         data-aos="fade-up"
         data-aos-offset="300"
         data-aos-easing="ease-in-sine"
         className="w-full">
          <div className="ms-0 lg:ms-0 xl:ms-0 md:ms-8">
            <button className="whatsAppChatBotsText px-6 py-1 rounded-full border flex items-center cardHover">
              {" "}
              <span className="wahtsChatbotswhatsLogoDiv me-2">
                <img
                  className="wahtsChatbotswhatsLogo"
                  src="/images/wahts.png"
                  alt=""
                />
              </span>{" "}
              WhatsApp Commerce
            </button>
            <p className="KeepYourBusinessText pt-4">
              Supercharge sales via WhatsApp Commerce
            </p>
            <p className="whatsAppChatBotsTextPera pt-4">
              Harness the power of WhatsApp Commerce and transform your sales
              process, delivering exceptional service right at your customers'
              fingertips.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="persentTextNumber">26%</p>
                <p className="w-1/2 pt-2 persentText">Uplift in Sales</p>
              </div>
              <div>
                <p className="persentTextNumber">30%</p>
                <p className="w-1/2 pt-2 persentText">Decrease in Abandoned Carts</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="persentTextNumber">80%</p>
                <p className="w-5/12 pt-2 persentText">Increase in Recurring Sales</p>
              </div>
              <div>
                <p className="persentTextNumber">40%</p>
                <p className="w-6/12 pt-2 persentText">
                  Reduction in Operational Costs Y-O-Y
                </p>
              </div>
            </div>
            <div className="pt-5 flex items-center">
              <button className="font-normal flex items-center justify-between bg-white px-8 py-2 rounded-full border cardHover">
                Try Now{" "}
                <span className="ms-3">
                  <img src="/images/Group 1000002679.png" alt="" />
                </span>
              </button>
              <button className="ms-8 border-b border-gray-700">
                Read more
              </button>
            </div>
            <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className="py-8">
              <p className="repleacesText">Replaces</p>
              <div className="pt-5 flex items-center gap-1">
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
                      src="/images/image 283.png"
                      alt=""
                    />
                  </span>
                  GallaBox
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
              <div className="flex items-center gap-1 pt-2">
                <p className="bg-white px-2 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img
                      className="repleacesItemsLogo"
                      src="/images/image 282.png"
                      alt=""
                    />
                  </span>
                  Superlemon
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div
         data-aos="fade-down"
         data-aos-offset="300"
         data-aos-easing="ease-in-sine"
         className="flex justify-center items-center whatsAppChatbotsImgDiv">
           <img className="whatsAppChatbotsImg" src="https://watheta.com/wp-content/uploads/2023/09/63a19169d6b22941f451ecd7_Customer-Subscribed-to-WhatsApp-p-800-1.webp" alt="" />
        </div>
      </section>
    </div>
  );
};

export default WhtasAppCommerce;
