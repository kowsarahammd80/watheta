"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Teambox = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div className="homeTemboxBg py-12 lg:py-20 xl:py-20 md:py-16">
      {/*  */}
      {/* <section className="grid grid-cols-2 gap-10 mx-48">
      <div className="flex justify-center items-center whatsAppChatbotsImgDiv">
           <img className="whatsAppChatbotsImg" src="https://watheta.com/wp-content/uploads/2023/09/wc1.png" alt="" />
        </div>
        
        <div className="ms-16">
          <div>
            <button className="whatsAppChatBotsText px-6 py-1 rounded-full border flex items-center">
              {" "}
              <span className="wahtsChatbotswhatsLogoDiv me-2">
                <img
                  className="wahtsChatbotswhatsLogo"
                  src="/images/wahts.png"
                  alt=""
                />
              </span>{" "}
              Shared Inbox Teambox
            </button>
            <p className="KeepYourBusinessText pt-4">
              Bridge Gap between Customers & Employees
            </p>
            <p className="whatsAppChatBotsTextPera pt-4">
              Join the Teambox revolution, seamlessly connecting your team with
              your customers and transforming the way you do business.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="persentTextNumber">70%</p>
                <p className="w-1/2 pt-2 persentText">Customers Prefer Human Assistance</p>
              </div>
              <div>
                <p className="persentTextNumber">30%</p>
                <p className="w-1/2 pt-2 persentText">Rise in Customer Satisfaction</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="persentTextNumber">80%</p>
                <p className="w-1/3 pt-2 persentText">Reduction in Support Calls</p>
              </div>
              <div>
                <p className="persentTextNumber">40%</p>
                <p className="w-6/12 pt-2 persentText">
                  Reduction in Operational Costs Y-O-Y
                </p>
              </div>
            </div>
            <div className="pt-5 flex items-center">
              <button className="font-normal flex items-center justify-between bg-white px-8 py-2 rounded-full border">
                Try for free{" "}
                <span className="ms-3">
                  <img src="/images/Group 1000002679.png" alt="" />
                </span>
              </button>
              <button className="ms-8 border-b border-gray-800">
                Read more
              </button>
            </div>
            <div className="py-8">
              <p className="repleacesText">Replaces</p>
              <div className="pt-5 flex items-center gap-1">
                <p className="bg-white px-5 py-1 rounded-full repleacesItems flex items-center border">
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img
                      className="repleacesItemsLogo"
                      src="/images/image 277.png"
                      alt=""
                    />
                  </span>
                  Livechat
                </p>
                <p className="bg-white px-5 py-1 rounded-full repleacesItems flex items-center border">
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img
                      className="repleacesItemsLogo"
                      src="/images/image 278.png"
                      alt=""
                    />
                  </span>
                  Fuelchats
                </p>
                <p className="bg-white px-5 py-1 rounded-full repleacesItems flex items-center border">
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img
                      className="repleacesItemsLogo"
                      src="/images/image 279.png"
                      alt=""
                    />
                  </span>
                  Wait
                </p>
                <p className="bg-white px-5 py-1 rounded-full repleacesItems flex items-center border">
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
                <p className="bg-white px-5 py-1 rounded-full repleacesItems flex items-center border">
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img
                      className="repleacesItemsLogo"
                      src="/images/image 253.png"
                      alt=""
                    />
                  </span>
                  Wati
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* new */}

      <section className="flex flex-col-reverse lg:flex-row xl:flex-row md:flex-col-reverse items-start lg:items-center xl:items-center mx-5 lg:mx-40 xl:mx-40 gap-10 lg:gap-20 xl:gap-20">
        {/* ing contents */}
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="justify-center items-center whatsAppChatbotsImgDiv"
        >
          <img
            className="whatsAppChatbotsImg"
            src="https://watheta.com/wp-content/uploads/2023/09/wc1.png"
            alt=""
          />
        </div>
        {/* text contents */}
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="justify-start lg:justify-end xl:justify-end ms-0 lg:ms-16 xl:ms-16 md:ms-8 w-full"
        >
          <button className="whatsAppChatBotsText px-6 py-1 rounded-full border flex items-center cardHover">
            {" "}
            <span className="wahtsChatbotswhatsLogoDiv me-2">
              <img
                className="wahtsChatbotswhatsLogo"
                src="/images/wahts.png"
                alt=""
              />
            </span>{" "}
            Shared Inbox Teambox
          </button>
          <p className="KeepYourBusinessText pt-4">
            Bridge Gap between Customers & Employees
          </p>
          <p className="whatsAppChatBotsTextPera pt-4">
            Join the Teambox revolution, seamlessly connecting your team with
            your customers and transforming the way you do business.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <p className="persentTextNumber">70%</p>
              <p className="w-1/2 pt-2 persentText">
                Customers Prefer Human Assistance
              </p>
            </div>
            <div>
              <p className="persentTextNumber">30%</p>
              <p className="w-1/2 pt-2 persentText">
                Rise in Customer Satisfaction
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <p className="persentTextNumber">80%</p>
              <p className="w-1/3 pt-2 persentText">
                Reduction in Support Calls
              </p>
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
            <button className="ms-8 border-b border-gray-800">Read more</button>
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
                    src="/images/image 277.png"
                    alt=""
                  />
                </span>
                Livechat
              </p>
              <p className="bg-white px-2 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/image 278.png"
                    alt=""
                  />
                </span>
                Sales IQ
              </p>
              <p className="bg-white px-2 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/image 279.png"
                    alt=""
                  />
                </span>
                Freshchat
              </p>
              <p className="bg-white px-2 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/image 280.png"
                    alt=""
                  />
                </span>
                Intercom
              </p>
            </div>
            <div className="flex items-center gap-1 pt-2">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teambox;
