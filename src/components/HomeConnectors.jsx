"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeConnectors = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div className="connectorsbg py-12 lg:py-20 xl:py-20 md:py-16">
      {/*  */}
      <section className="flex flex-col-reverse lg:flex-row xl:flex-row mx-5 lg:mx-40 xl:mx-40 gap-10 lg:gap-20 xl:gap-20">
        {/*  */}
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="flex justify-center items-center whatsAppChatbotsImgDiv"
        >
          <img
            className="whatsAppChatbotsImg"
            src="https://watheta.com/wp-content/uploads/2023/09/63a1a55a1daf147a16150c06_Shipping-Notifications-p-800-1.webp"
            alt=""
          />
        </div>
        {/* text div */}
        <div data-aos="fade-up" data-aos-duration="3000" className="w-full">
          <div className="ms-0 lg:ms-16 xl:ms-16 md:ms-8">
            <button className="whatsAppChatBotsText px-6 py-1 rounded-full border flex items-center cardHover">
              {" "}
              {/* <span className="wahtsChatbotswhatsLogoDiv me-2">
                <img
                  className="wahtsChatbotswhatsLogo"
                  src="/images/wahts.png"
                  alt=""
                />
              </span>{" "} */}
              Connectors
            </button>
            <p className="KeepYourBusinessText pt-4">
            Create custom workflows with 1000 plus integrations 
            </p>
            <p className="whatsAppChatBotsTextPera pt-4">
            Unlock seamless communication with WhatsApp powerful API connectors and webhook integrations, enabling real-time notifications, automation, and efficient customer engagement.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="persentTextNumber">70%</p>
                <p className="w-1/2 pt-2 persentText">Faster Integration</p>
              </div>
              <div>
                <p className="persentTextNumber">100%</p>
                <p className="w-1/2 pt-2 persentText">
                  Saves on Developer Charges
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="persentTextNumber">100%</p>
                <p className="w-6/12 pt-2 persentText">No-Code Platform</p>
              </div>
              {/* <div>
                <p className="text-2xl font-semibold">40%</p>
                <p className="w-5/12 pt-2 persentText">
                  Reduction in Operational Costs Y-O-Y
                </p>
              </div> */}
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
            <div data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500" className="py-8">
              <p className="repleacesText">Replaces</p>
              <div className="pt-5 flex items-center gap-1">
                <p className="bg-white px-2 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img
                      className="repleacesItemsLogo"
                      src="/images/image 290.png"
                      alt=""
                    />
                  </span>
                  Zepier
                </p>
                <p className="bg-white px-2 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img
                      className="repleacesItemsLogo"
                      src="/images/image 289.png"
                      alt=""
                    />
                  </span>
                  Make
                </p>
                <p className="bg-white px-2 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img
                      className="repleacesItemsLogo"
                      src="/images/image 288.png"
                      alt=""
                    />
                  </span>
                  Pipedream
                </p>
                <p className="bg-white px-2 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img
                      className="repleacesItemsLogo"
                      src="/images/image 287.png"
                      alt=""
                    />
                  </span>
                  Pabbbly Connect
                </p>
              </div>
              <div className="flex items-center gap-1 pt-2">
                <p className="bg-white px-2 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img
                      className="repleacesItemsLogo"
                      src="/images/image 286.png"
                      alt=""
                    />
                  </span>
                  IFFT
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeConnectors;
