import React from "react";

const HomeGenerativeAI = () => {
  return (
    <div className="py-20">
      {/*  */}
      <section className="grid grid-cols-2 gap-10 mx-48">
        {/* text div */}
        <div className="">
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
              Generative AI
            </button>
            <p className="KeepYourBusinessText pt-4">
              Transform Operations with Our Generative AI Integration
            </p>
            <p className="whatsAppChatBotsTextPera pt-4">
              Our Generative AI is a game-changing tool that empowers your
              business operations, ensuring accuracy, efficiency, and
              productivity at every level.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="persentTextNumber">200%</p>
                <p className="w-1/2 pt-2 persentText">Acceleration in Response Time</p>
              </div>
              <div>
                <p className="persentTextNumber">500%</p>
                <p className="w-1/2 pt-2 persentText">Boost in Employee Productivity</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="persentTextNumber">200%</p>
                <p className="w-6/12 pt-2 persentText">Time on Repetitive Tasks</p>
              </div>
              <div>
                <p className="persentTextNumber">200%</p>
                <p className="w-6/12 pt-2 persentText">Reduce Manpower Expenses</p>
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
                      src="/images/image 254.png"
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
                      src="/images/image 255.png"
                      alt=""
                    />
                  </span>
                  Landbot
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex justify-center items-center whatsAppChatbotsImgDiv">
           <img className="whatsAppChatbotsImg" src="https://watheta.com/wp-content/uploads/2023/09/63a1a93f50ac19da77a80596_Chatbot-p-800-1.webp" alt="" />
        </div>
      </section>
    </div>
  );
};

export default HomeGenerativeAI;
