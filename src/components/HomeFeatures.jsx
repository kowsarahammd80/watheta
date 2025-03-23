"use client"

import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const HomeFeatures = () => {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, []) 
  return (
    <div className="homeFeaturesbg py-5">
      {/* heasdline */}
      <div className="">
        <h1 className="text-center pt-10 HomeFeturesHeadline">Our Features</h1>
        <div className="flex justify-center w-full">
          <p className="text-center pt-2 mx-5 lg:mx-0 xl:mx-0 md:mx-0 w-full lg:w-1/4 xl:w-1/4 md:w-8/12 homeFeaturHedlindPera">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration
          </p>
        </div>
      </div>
      {/* card */}
      <section className="py-10 mx-5 lg:mx-48 xl:mx-48">
        <div
         data-aos="zoom-in"
         className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3 lg:gap-8 xl:gap-8">
          <div className="pt-5 pb-5 px-2 lg:px-3 xl:px-3 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl">
            <div className="">
              <div className="flex justify-center">
                <div className="homeFeaturesLogoDiv">
                  <img
                    className="homeFeaturesLogo"
                    src="/images/Group 1000002814.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center">
                <h1 className="cardFeaturesHeadline text-center">Chatbots</h1>
                <p className="text-center pt-3 cardFeaturesPera">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </div>
          </div>
          {/* 2nd */}
          <div className="pt-5 pb-5 px-2 lg:px-3 xl:px-3 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl">
            <div className="">
              <div className="flex justify-center">
                <div className="homeFeaturesLogoDiv">
                  <img
                    className="homeFeaturesLogo"
                    src="/images/Group 1000002815.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center feature">
                <h1 className="cardFeaturesHeadline text-center">
                  Modular CRM
                </h1>
                <p className="text-center pt-3 cardFeaturesPera">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </div>
          </div>
          {/* 3rd */}
          <div className="pt-5 pb-5 px-2 lg:px-3 xl:px-3 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl">
            <div className="">
              <div className="flex justify-center">
                <div className="homeFeaturesLogoDiv">
                  <img
                    className="homeFeaturesLogo"
                    src="/images/Group 1000002816.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center">
                <h1 className="cardFeaturesHeadline text-center">
                  Modular CRM
                </h1>
                <p className="text-center pt-3 cardFeaturesPera">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </div>
          </div>
          {/* 4th */}
          <div className="pt-5 pb-5 px-2 lg:px-3 xl:px-3 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl">
            <div className="">
              <div className="flex justify-center">
                <div className="homeFeaturesLogoDiv">
                  <img
                    className="homeFeaturesLogo"
                    src="/images/Group 1000002817.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center">
                <h1 className="cardFeaturesHeadline text-center">
                  Broadcaster
                </h1>
                <p className="text-center pt-3 cardFeaturesPera">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </div>
          </div>
          {/* 5th */}
          <div className="pt-5 pb-5 px-2 lg:px-3 xl:px-3 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl hidden lg:block xl:block md:block">
            <div className="">
              <div className="flex justify-center">
                <div className="homeFeaturesLogoDiv">
                  <img
                    className="homeFeaturesLogo"
                    src="/images/Group 1000002813.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center">
                <h1 className="cardFeaturesHeadline text-center">
                  WhatsApp Commerce
                </h1>
                <p className="text-center pt-3 cardFeaturesPera">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </div>
          </div>
          {/* 6th */}
          <div className="pt-5 pb-5 px-2 lg:px-3 xl:px-3 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl hidden lg:block xl:block md:block">
            <div className="">
              <div className="flex justify-center">
                <div className="homeFeaturesLogoDiv">
                  <img
                    className="homeFeaturesLogo"
                    src="/images/Group 1000002812.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center">
                <h1 className="cardFeaturesHeadline text-center">
                  Drip Campaigns
                </h1>
                <p className="text-center pt-3 cardFeaturesPera">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </div>
          </div>
          {/* 7th */}
          <div className="pt-5 pb-5 px-2 lg:px-3 xl:px-3 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl hidden lg:block xl:block md:block">
            <div className="">
              <div className="flex justify-center">
                <div className="homeFeaturesLogoDiv">
                  <img
                    className="homeFeaturesLogo"
                    src="/images/Group 1000002811.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center">
                <h1 className="cardFeaturesHeadline text-center">Connectors</h1>
                <p className="text-center pt-3 cardFeaturesPera">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </div>
          </div>
          {/* 8th */}
          <div className="pt-5 pb-5 px-2 lg:px-3 xl:px-3 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl hidden lg:block xl:block md:block">
            <div className="">
              <div className="flex justify-center">
                <div className="homeFeaturesLogoDiv">
                  <img
                    className="homeFeaturesLogo"
                    src="/images/Group 1000002810.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center">
                <h1 className="cardFeaturesHeadline text-center">Generative AI</h1>
                <p className="text-center pt-3 cardFeaturesPera">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* button featuers */}
      <div className="flex justify-center py-5 lg:py-10 xl:py-10 md:py-8">
        <button className="bg-white px-5 lg:px-6 xl:px-6 py-2 rounded-full flex items-center border HomeFeturescardShadow">View all Features <img src="/images/Group 1000002679.png" alt="" className="ms-3" /></button> 
      </div>
    </div>
  );
};

export default HomeFeatures;
