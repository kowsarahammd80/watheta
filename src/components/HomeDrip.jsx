import React from "react";

const HomeDrip = () => {
  return (
    <div className="py-20">
      {/*  */}
      <section className="grid grid-cols-2 gap-10 mx-48">
        {/* text div */}
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
              Drip Campaigns
            </button>
            <p className="KeepYourBusinessText pt-4">
              Accelerate the Lead Conversion Process by 50%
            </p>
            <p className="whatsAppChatBotsTextPera pt-4">
              Drip Campaigns tool allows you to effectively guide your prospects
              along the buyer's journey, converting leads into customers more
              efficiently and swiftly than ever before.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="persentTextNumber">60%</p>
                <p className="w-1/2 pt-2 persentText">
                  Acceleration in Sales Closure
                </p>
              </div>
              <div>
                <p className="persentTextNumber">23%</p>
                <p className="w-1/2 pt-2 persentText">
                  Uplift in Sales Conversion
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="persentTextNumber">70%</p>
                <p className="w-5/12 pt-2 persentText">Click-Through Rate</p>
              </div>
              <div>
                <p className="persentTextNumber">70%</p>
                <p className="w-6/12 pt-2 persentText">Manpower Savings</p>
              </div>
            </div>
            <div className="pt-5 flex items-center">
              <button className="font-normal flex items-center justify-between bg-white px-8 py-2 rounded-full border">
                Try for free{" "}
                <span className="ms-3">
                  <img src="/images/Group 1000002679.png" alt="" />
                </span>
              </button>
              <button className="ms-8 border-b border-gray-700">
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
                      src="/images/image 251.png"
                      alt=""
                    />
                  </span>
                  ManyChats
                </p>
                <p className="bg-white px-5 py-1 rounded-full repleacesItems flex items-center border">
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img
                      className="repleacesItemsLogo"
                      src="/images/image 252.png"
                      alt=""
                    />
                  </span>
                  Fuelchats
                </p>
                <p className="bg-white px-5 py-1 rounded-full repleacesItems flex items-center border">
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img
                      className="repleacesItemsLogo"
                      src="/images/image 284.png"
                      alt=""
                    />
                  </span>
                  Drips
                </p>
                {/* <p className="bg-white px-5 py-1 rounded-full repleacesItems flex items-center border">
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img
                      className="repleacesItemsLogo"
                      src="/images/image 281.png"
                      alt=""
                    />
                  </span>
                  Haptik
                </p> */}
              </div>
              {/* <div className="flex items-center gap-1 pt-2">
                <p className="bg-white px-5 py-1 rounded-full repleacesItems flex items-center border">
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img
                      className="repleacesItemsLogo"
                      src="/images/image 282.png"
                      alt=""
                    />
                  </span>
                  Superlemon
                </p>
              </div> */}
            </div>
          </div>
        </div>
        {/*  */}
        <div>{/* ok */}</div>
      </section>
    </div>
  );
};

export default HomeDrip;
