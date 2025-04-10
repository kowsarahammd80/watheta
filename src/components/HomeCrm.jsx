"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeCrm = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div className="py-12 lg:py-20 xl:py-20 md:py-16">
      {/*  */}
      <section className="flex flex-col lg:flex-row xl:flex-row gap-10 mx-5 lg:mx-40 xl:mx-40 md:mx-16">
        {/* text div */}

        <div
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="w-full"
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
            Modular CRM
          </button>
          <p className="KeepYourBusinessText pt-4">
            A Conversational CRM to manage, segment, and convert leads faster
          </p>
          <p className="whatsAppChatBotsTextPera pt-4">
            A WhatsApp-integrated CRM system with Boards, Cards, Leads Funnel,
            Sheets and performance tracking .
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <p className="persentTextNumber">60%</p>
              <p className="w-1/3 pt-2 persentText">Increase in Sales</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">5%</p>
              <p className="w-1/2 pt-2 persentText">
                Faster Leads or Opportunities
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <p className="persentTextNumber">40%</p>
              <p className="w-1/2 pt-2 persentText">
                Effective team coordination
              </p>
            </div>
            <div>
              <p className="persentTextNumber">75%</p>
              <p className="w-1/2 pt-2 persentText">
                Save on Operational Costs Y-O-Y
              </p>
            </div>
            {/* <div>
              <p className="persentTextNumber">75%</p>
              <p className="w-5/12 pt-2 persentText">
                Reduced Data Entry Efforts
              </p>
            </div> */}
          </div>
          <div className="pt-6 flex items-center">
            <button className="font-normal flex items-center justify-between bg-white px-8 py-2 rounded-full border cardHover">
              Try Now
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
                    src="/images/image 275.png"
                    alt=""
                  />
                </span>
                Excel
              </p>
              <p className="bg-white px-1 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/image 276.png"
                    alt=""
                  />
                </span>
                Google Sheets
              </p>
              <p className="bg-white px-2 lg:px-5 xl:px-5 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/image 273.png"
                    alt=""
                  />
                </span>
                Trello
              </p>
              <p className="bg-white px-2 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/image 254.png"
                    alt=""
                  />
                </span>
                Zoho Bigin
              </p>
            </div>
            <div className="flex items-center gap-1 pt-2">
              <p className="bg-white px-2 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/image 271.png"
                    alt=""
                  />
                </span>
                Zoho CRM
              </p>
              <p className="bg-white px-2 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/image 270.png"
                    alt=""
                  />
                </span>
                Hubspot
              </p>
              <p className="bg-white px-2 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/image 269.png"
                    alt=""
                  />
                </span>
                Salesforce
              </p>
              <p className="bg-white px-2 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/image 268.png"
                    alt=""
                  />
                </span>
                Fresh Sales
              </p>
            </div>
            <div className="flex items-center gap-1 pt-2">
              <p className="bg-white px-2 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/image 267.png"
                    alt=""
                  />
                </span>
                Pipedrive
              </p>
              <p className="bg-white px-2 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/image 266.png"
                    alt=""
                  />
                </span>
                Go High Level
              </p>
              <p className="bg-white px-2 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/image 265.png"
                    alt=""
                  />
                </span>
                Leadsquared
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex justify-center items-center w-full">
          <div className="whatsAppChatbotsImgDiv">
            <img
              data-aos="fade-down"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="whatsAppChatbotsImg"
              src="/images/crm.gif"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCrm;
