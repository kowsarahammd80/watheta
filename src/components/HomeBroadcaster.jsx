import React from "react";

const HomeBroadcaster = () => {
  return (
    <div className="broadcasterBg py-20">
      {/*  */}
      <section className="grid grid-cols-2 gap-10 mx-48">
        <div>{/* ok */}</div>
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
              Broadcaster
            </button>
            <p className="KeepYourBusinessText pt-4">
              Fostering Personalized Communication At Scale
            </p>
            <p className="whatsAppChatBotsTextPera pt-4">
              The ultimate communication solution for boosting engagement,
              streamlining your marketing, and driving higher sales.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="persentTextNumber">40%</p>
                <p className="w-1/2 pt-2 persentText">Uptick in Sales</p>
              </div>
              <div>
                <p className="persentTextNumber">200%</p>
                <p className="w-7/12 pt-2 persentText">Higher Click-Through Rate than SMS</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="persentTextNumber">32%</p>
                <p className="w-1/3 pt-2 persentText">Increase in Responses</p>
              </div>
              <div>
                <p className="persentTextNumber">200%</p>
                <p className="w-6/12 pt-2 persentText">More Cost-Effective than PPC</p>
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
                      src="/images/image 281.png"
                      alt=""
                    />
                  </span>
                  Haptik
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBroadcaster;
