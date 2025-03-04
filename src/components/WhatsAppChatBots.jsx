import React from "react";

const WhatsAppChatBots = () => {
  return (
    <div className="whatsAppChatBotsBg py-20">
      {/*  */}
      <section className="grid grid-cols-2 gap-10 mx-48">
        {/* content */}
        <div className="flex justify-center items-center whatsAppChatbotsImgDiv">
           <img className="whatsAppChatbotsImg" src="https://watheta.com/wp-content/uploads/2023/09/63febbc449df0b1092ec79e9_Discovery-p-800.png" alt="" />
        </div>
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
              WhatsApp Chatbots
            </button>
            <p className="KeepYourBusinessText pt-4">
              Keep your business open 24x7 without human
            </p>
            <p className="whatsAppChatBotsTextPera pt-4">
              Create chatbots in a matter of minutes using our effortless,
              no-code flow builder, simply upload your training data and witness
              our AI perform its magic.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="persentTextNumber">100%</p>
                <p className="w-1/2 pt-2 persentText">Boost in First Response Time</p>
              </div>
              <div>
                <p className="persentTextNumber">30%</p>
                <p className="w-7/12 pt-2 persentText">
                  Improvement in Customer Satisfaction
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="persentTextNumber">25%</p>
                <p className="w-6/12 pt-2 persentText">
                  Rise in Sales Through Instant Engagement
                </p>
              </div>
              <div>
                <p className="persentTextNumber">34%</p>
                <p className="w-1/2 pt-2 persentText">Save in Operational Costs Y-O-Y</p>
              </div>
            </div>
            <div className="pt-5 flex items-center">
              <button className="font-normal flex items-center justify-between bg-white px-8 py-2 rounded-full border">
                Try for free{" "}
                <span className="ms-3">
                  <img src="/images/Group 1000002679.png" alt="" />
                </span>
              </button>
              <button className="ms-8 border-b-2 border-gray-800">
                Read more
              </button>
            </div>
            <div className="py-8">
              <p className="repleacesText">Replaces</p>
              <div className="pt-5 flex items-center gap-1">
                <p className="bg-white px-5 py-1 rounded-full repleacesItems flex items-center border">
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img className="repleacesItemsLogo" src="/images/image 251.png" alt="" />
                  </span>
                  ManyChats
                </p>
                <p className="bg-white px-5 py-1 rounded-full repleacesItems flex items-center border">
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img className="repleacesItemsLogo" src="/images/image 252.png" alt="" />
                  </span>
                  Fuelchats
                </p>
                <p className="bg-white px-5 py-1 rounded-full repleacesItems flex items-center border">
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img className="repleacesItemsLogo" src="/images/image 253.png" alt="" />
                  </span>
                  Wait
                </p>
                <p className="bg-white px-5 py-1 rounded-full repleacesItems flex items-center border">
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img className="repleacesItemsLogo" src="/images/image 254.png" alt="" />
                  </span>
                  Interkat
                </p>
              </div>
              <div className="flex items-center gap-1 pt-2">
                <p className="bg-white px-5 py-1 rounded-full repleacesItems flex items-center border">
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img className="repleacesItemsLogo" src="/images/image 255.png" alt="" />
                  </span>
                  Landbot
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatsAppChatBots;
