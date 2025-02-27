"use client";

import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { regular, envelope } from "@fortawesome/free-solid-svg-icons";
// import metaLogo from '../../public/assets/metaLogo.png';

const Footer = () => {
  return (
    <div className="footerbg p-24">
      <section className="mx-16">
        {/* footer logo and border section */}
        <div className="border-b flex justify-between items-center">
          {/* logo */}
          <div className="flex items-center gap-10 pb-10">
            <div className="footerLogoDiv">
              <img
                className="footerLogo"
                src="https://watheta.com/wp-content/uploads/2023/08/Web-format-1024x204.png"
                alt=""
              />
            </div>
            <div className="footerMetaLogoDiv">
              <img
                className="footerMetaLogo"
                src="/images/metaLogo.png"
                alt=""
              />
            </div>
          </div>

          <div className="pb-10">
            <select className="w-full max-w-md px-6 py-4 footerbg border border-gray-400 rounded-full">
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
            </select>
          </div>
        </div>
        {/* info  */}
        <div className="grid grid-cols-5 gap-8 pt-5 border-b">
          {/* Contact support */}
          <div>
            <h1 className="footerInfoHeadline">Contact support</h1>
            <div className="my-4">
              <p className="footerInfoHeadlineSub">United Kingdom:</p>
              <p className="footerPera pt-1">
                71-75 Shelton Street, Covent Garden London, WC2H 9JQ, UK
              </p>
            </div>
            {/* <div className="my-4">
              <p className="footerInfoHeadlineSub">Register Address (BD):</p>
              <p className="footerPera pt-1">
                11/A, Main Road-3, Plot-10 Pallabi, Mirpur <br /> Dhaka -1216
              </p>
            </div> */}
            <div className="my-4">
              <p className="footerInfoHeadlineSub">Support Office:</p>
              <p className="footerPera pt-1">
                House- 13, 2nd Floor, Road- 01 Sector- 01, <br /> Block- k,
                Aftabnagar, Dhaka- 1214
              </p>
            </div>
            <div className="my-4 pb-4">
              {/* <p className="footerInfoHeadlineSub">Support Office:</p> */}
              <p className="footerPera pt-1 flex items-center">
                {" "}
                <span className="text-sm me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="footerMailIcon"
                  >
                    {" "}
                    <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
                  </svg>
                </span>{" "}
                info@watheta.com
              </p>
              <p className="footerPera pt-1 flex items-center">
                {" "}
                <span className="text-sm me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="footerMailIcon"
                  >
                    <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />
                  </svg>
                </span>{" "}
                +88013 1823 1252
              </p>
            </div>
          </div>
          {/* Company */}
          <div className="ms-10">
            <h1 className="footerInfoHeadline">Company</h1>
            <div className="my-4">
              <p className="footerPera pt-1">About</p>
            </div>
            <div className="my-4">
              <p className="footerPera pt-1">Careers</p>
            </div>
            <div className="my-4">
              <p className="footerPera pt-1">Contact Us</p>
            </div>
            <div className="my-4">
              <p className="footerPera pt-1">Terms & Condition</p>
            </div>
            <div className="my-4">
              <p className="footerPera pt-1">Privacy Policy</p>
            </div>
            <div className="my-4">
              <p className="footerPera pt-1">Cancellation Policy</p>
            </div>
          </div>
          {/* Insider */}
          <div>
            <h1 className="footerInfoHeadline">Insider</h1>
            <div className="my-4">
              <p className="footerPera pt-1">Pricing</p>
            </div>
            <div className="my-4">
              <p className="footerPera pt-1">Help</p>
            </div>
            <div className="my-4">
              <p className="footerPera pt-1">Documentation</p>
            </div>
            <div className="my-4">
              <p className="footerPera pt-1">API Documentation</p>
            </div>
            <div className="my-4">
              <p className="footerPera pt-1">Andorid App</p>
            </div>
            <div className="my-4">
              <p className="footerPera pt-1">iOS App</p>
            </div>
          </div>
          {/* eCommerce */}
          <div>
            <h1 className="footerInfoHeadline">eCommerce</h1>
            <div className="my-4">
              <p className="footerPera pt-1">Pricing</p>
            </div>
            <div className="my-4">
              <p className="footerPera pt-1">Help</p>
            </div>
          </div>
          {/* Social Channels */}
          <div>
            <h1 className="footerInfoHeadline">Social Channels</h1>
            <div className="my-4 flex items-center">
              <div className="foterSocialIconDiv">
                <img
                  className="foterSocialIcon"
                  src="/images/wahts.png"
                  alt=""
                />
              </div>
              <p className="footerPera pt-1 ms-2"> Whatsapp</p>
            </div>
            <div className="my-4 flex items-center">
              <div className="foterSocialIconDiv">
                <img
                  className="foterSocialIcon"
                  src="/images/insta.png"
                  alt=""
                />
              </div>
              <p className="footerPera pt-1 ms-2"> Instragram</p>
            </div>
            <div className="my-4 flex items-center">
              <div className="foterSocialIconDiv">
                <img
                  className="foterSocialIcon"
                  src="/images/face.png"
                  alt=""
                />
              </div>
              <p className="footerPera pt-1 ms-2"> Facebook</p>
            </div>
            {/* <div className="my-4 flex items-center">
              <div className="foterSocialIconDiv">
                <img
                  className="foterSocialIcon"
                  src="/images/teli.png"
                  alt=""
                />
              </div>
              <p className="footerPera pt-1 ms-2"> Telegram</p>
            </div> */}
            {/* <div className="my-4 flex items-center">
              <div className="foterSocialIconDiv">
                <img
                  className="foterSocialIcon"
                  src="/images/line.png"
                  alt=""
                />
              </div>
              <p className="footerPera pt-1 ms-2"> Line</p>
            </div> */}
            {/* <div className="my-4 flex items-center">
              <div className="foterSocialIconDiv">
                <img
                  className="foterSocialIcon"
                  src="/images/vaider.png"
                  alt=""
                />
              </div>
              <p className="footerPera pt-1 ms-2"> Viber</p>
            </div> */}
          </div>
        </div>
        {/* Copyright */}
        <div className="flex justify-center items-center h-24">
          <p className="text-center text-sm">
            Copyright © 2024 | All right Reserved by WaTheta Limited | A
            Signature Product of AdTheta
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
