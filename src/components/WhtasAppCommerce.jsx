import React from "react";

const WhtasAppCommerce = () => {
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
                      src="/images/image 253.png"
                      alt=""
                    />
                  </span>
                  Wati
                </p>
                <p className="bg-white px-5 py-1 rounded-full repleacesItems flex items-center border">
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img
                      className="repleacesItemsLogo"
                      src="/images/image 283.png"
                      alt=""
                    />
                  </span>
                  GallaBox
                </p>
                <p className="bg-white px-5 py-1 rounded-full repleacesItems flex items-center border">
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img
                      className="repleacesItemsLogo"
                      src="/images/image 254.png"
                      alt=""
                    />
                  </span>
                  Interkat
                </p>
                <p className="bg-white px-5 py-1 rounded-full repleacesItems flex items-center border">
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
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div>{/* ok */}</div>
      </section>
    </div>
  );
};

export default WhtasAppCommerce;
