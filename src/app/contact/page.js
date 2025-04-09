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
  const phoneNumber = "+880 1855-108700"; // Replace with your number
  const email = "info@watheta.com"; // Replace with your email

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
  };
  return (
    <div className="pt-20">
      <div className="contactBg">
        <div className="flex justify-center items-center contactHeroContentDiv py-0 lg:py-10 xl:py-10">
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
              <a href="https://wa.me/8801318231252?text=Shedule for wahteta">
                <button className="text-sm bg-white py-3 px-6 rounded-full cardHover text-green-600 font-semibold">
                  Schedule A Call
                </button>
              </a>
            </div>

            <div data-aos="fade-up" className="mx-5 lg:mx-60 xl:mx-60 pt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 gap-5 lg:gap-5 xl:gap-5">
                <div className="bg-white p-4 rounded-lg shadow-lg pricingHerogridCardDiv">
                  <div className="pricingHeorIconDiv">
                    <img
                      className="pricingHeorIcon"
                      src="/images/pricing1000003911.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-md lg:text-2xl xl:text-2xl font-semibold pt-3">
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
                    <p className="text-md lg:text-2xl xl:text-2xl font-semibold pt-3">
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
                    <p className="text-md lg:text-2xl xl:text-2xl font-semibold pt-3">
                      50+ Countries
                    </p>
                    <p className="text-sm opacity-50 pt-2">
                      Industry Experience
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="flex justify-center pt-3">
                <div className="bg-white p-4 rounded-lg shadow-lg pricingHerogridCardDiv block lg:hidden xl:hidden">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* section */}
      <section className="mx-5 lg:mx-40 xl:mx-40 md:mx-16 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 gap-x-5 lg:gap-x-8 xl:gap-x-8 gap-y-5 lg:gap-y-8 xl:gap-y-8 py-20">
        <div
          onClick={handleCall}
          className="bg-white shadow-lg rounded-lg p-6 border cursor-pointer pricingHerogridCardDiv"
        >
          {/* iconDiv */}
          <div className="contactHeorIconDiv">
            <img
              className="pricingHeorIcon"
              src="/images/call-back_5605560.png"
              alt=""
            />
          </div>
          <div className="ms-2 py-4">
            <h1 className="text-xl font-semibold pb-3">Call Us</h1>
            <p className="text-lg opacity-50">+880 1855-108700</p>
          </div>
        </div>
        <a href="https://wa.me/message/R7KY7C262ZF6A1" target="_blank">
          <div className="bg-white shadow-lg rounded-lg p-6 border cursor-pointer pricingHerogridCardDiv">
            {/* iconDiv */}
            <div className="contactHeorIconDiv">
              <img
                className="pricingHeorIcon"
                src="/images/whatsapp_2504957.png"
                alt=""
              />
            </div>
            <div className="ms-2 py-4">
              <h1 className="text-xl font-semibold pb-3">WhtasApp</h1>
              <p className="text-lg opacity-50">+880 1855-108700</p>
            </div>
          </div>
        </a>

        <div
          key={email}
          onClick={handleEmail}
          className="bg-white shadow-lg rounded-lg p-6 border cursor-pointer pricingHerogridCardDiv"
        >
          {/* iconDiv */}
          <div className="contactHeorIconDiv">
            <img
              className="pricingHeorIcon"
              src="/images/message_7884167.png"
              alt=""
            />
          </div>
          <div className="ms-2 py-4">
            <h1 className="text-xl font-semibold pb-3">Email</h1>
            <p className="text-lg opacity-50">info@watheta.com</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 border cursor-pointer pricingHerogridCardDiv">
          {/* iconDiv */}
          <div className="contactHeorIconDiv">
            <img
              className="pricingHeorIcon"
              src="/images/building_18276050.png"
              alt=""
            />
          </div>
          <div className="ms-2 py-4">
            <h1 className="text-xl font-semibold pb-3">Office</h1>
            <p className="text-lg opacity-50">
              House- 13, 2nd Floor, Road- 01 Sector- 01, Block- k, Aftabnagar,
              Dhaka- 1214
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 border cursor-pointer pricingHerogridCardDiv">
          {/* iconDiv */}
          <div className="contactHeorIconDiv">
            <img
              className="pricingHeorIcon"
              src="/images/clock_18398626.png"
              alt=""
            />
          </div>
          <div className="ms-2 py-4">
            <h1 className="text-xl font-semibold pb-3">Business Hours</h1>
            <p className="text-lg opacity-50">
              Saturday -Thursday: 10:00 AM - 6:00 PM
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 border cursor-pointer pricingHerogridCardDiv">
          {/* iconDiv */}
          <div className="contactHeorIconDiv">
            <img
              className="pricingHeorIcon"
              src="/images/mosque_6684648.png"
              alt=""
            />
          </div>
          <div className="ms-2 py-4">
            <h1 className="text-xl font-semibold pb-3">Service Area</h1>
            <p className="text-lg opacity-50">
              Global coverage with virtual support teams
            </p>
          </div>
        </div>
      </section>

      {/* contact from */}
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

            <form className="bg-white p-5 lg:p-10 xl:p-10 rounded-lg">
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

      {/* ready to  */}
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

export default ContactPage;
