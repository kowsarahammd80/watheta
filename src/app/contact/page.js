"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div className="pt-20">
      <div className="pricingBg">
        <div className="flex justify-center items-center pricingHeroContentDiv py-0 lg:py-10 xl:py-10">
          <div className="w-full">
            <div data-aos="zoom-in-down" className="flex justify-center pb-5">
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
              <h1 className="contactHeadline">
                Let's create something amazing together!
              </h1>
            </div>
            <div className="">
              <p className="text-center pricingPera py-2 mx-5 lg:mx-0 xl:mx-0 md:mx-16">
                Choose the perfect plan for your business. Scale as you grow.
              </p>
            </div>
            {/* <div className="flex justify-center py-2 mx-5 lg:mx-5 xl:mx-5 md:mx-16">
              <button className="flex items-center pricingWhatsAppText px-10 py-2 rounded-full">
                {" "}
                <span className="me-2">
                  <img src="/images/tike.png" alt="" />
                </span>{" "}
                WhatsApp messaging at actual Meta rates, no markup
              </button>
            </div> */}
            <div className="flex justify-center py-2 mx-5 lg:mx-5 xl:mx-5 md:mx-16">
              <button className="text-sm bg-white py-3 px-6 rounded-full cardHover text-green-600 font-semibold">
                Schedule A Call
              </button>
            </div>
            {/* slider */}

            <div data-aos="fade-up" className="mx-5 lg:mx-60 xl:mx-60 pt-6">
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                <div className="bg-white p-4 rounded-lg shadow-lg pricingHerogridCardDiv">
                  <div className="pricingHeorIconDiv">
                    <img
                      className="pricingHeorIcon"
                      src="/images/pricing1000003911.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-lg lg:text-2xl xl:text-2xl font-semibold pt-3">
                      Official Partner
                    </p>
                    <p className="text-sm opacity-50 pt-2">
                      Meta Business Partner
                    </p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg pricingHerogridCardDiv">
                  <div className="pricingHeorIconDiv">
                    <img
                      className="pricingHeorIcon"
                      src="/images/pricing 1000003900.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-lg lg:text-2xl xl:text-2xl font-semibold pt-3">
                      12+ Years
                    </p>
                    <p className="text-sm opacity-50 pt-2">
                      Industry Experience
                    </p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg pricingHerogridCardDiv">
                  <div className="pricingHeorIconDiv">
                    <img
                      className="pricingHeorIcon"
                      src="/images/pricing 1000003900 (2).png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-lg lg:text-2xl xl:text-2xl font-semibold pt-3">
                      50+ Countries
                    </p>
                    <p className="text-sm opacity-50 pt-2">
                      Industry Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
