import GettingStarted from "@/components/GettingStarted";
import HighPerformer from "@/components/HighPerformer";
import HomeBroadcaster from "@/components/HomeBroadcaster";
import HomeConnectors from "@/components/HomeConnectors";
import HomeCrm from "@/components/HomeCrm";
import HomeDrip from "@/components/HomeDrip";
import HomeFAQ from "@/components/HomeFAQ";
import HomeGenerativeAI from "@/components/HomeGenerativeAI";
import WhatsAppChatBots from "@/components/WhatsAppChatBots";
import React from "react";



const FeturesPage = () => {
  return (
    <div className="pt-20">
      <div className="featuresHeroDiv">
        <img
          className="featuresHeroBg"
          src="/images/allison-saeng-kJA4mtHv0go-unsplash 1.png"
          alt=""
        />
        <div className="featuresHeadlineDiv mx-40 pt-24">
          <div>
            <h1 className="featuresHeadline">Features</h1>
            <p className="text-xl featuresPera pt-5">
              look like readable English. Many desktop publishing packages and{" "}
              <br /> web page editors now use Lorem Ipsum as their default model
              text
            </p>
          </div>
          {/* card */}
          <section className="pt-16 grid grid-cols-8 xl:grid-cols-8 gap-2">
            <div className="card bg-base-100 cardHover cursor-pointer">
              <div className="card-body">
                <div className="flex justify-center">
                  <div className="featuresCardLogoDiv">
                    <img
                      className="featuresCardLogo"
                      src="/images/Group 1000002814.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <p className="text-center featuresCardHeadline pt-2">
                    {" "}
                    Chatbots{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 cardHover cursor-pointer">
              <div className="card-body">
                <div className="flex justify-center">
                  <div className="featuresCardLogoDiv">
                    <img
                      className="featuresCardLogo"
                      src="/images/Group 1000002815.png"
                      alt=""
                    />
                  </div>
                </div>
                <p className="text-center featuresCardHeadline pt-2">
                  {" "}
                  Modular <br /> CRM{" "}
                </p>
              </div>
            </div>
            <div className="card bg-base-100 cardHover cursor-pointer">
              <div className="card-body">
                <div className="flex justify-center">
                  <div className="featuresCardLogoDiv">
                    <img
                      className="featuresCardLogo"
                      src="/images/Group 1000002816.png"
                      alt=""
                    />
                  </div>
                </div>
                <p className="text-center featuresCardHeadline pt-2">
                  {" "}
                  Teambox{" "}
                </p>
              </div>
            </div>
            <div className="card bg-base-100 cardHover cursor-pointer">
              <div className="card-body">
                <div className="flex justify-center">
                  <div className="featuresCardLogoDiv">
                    <img
                      className="featuresCardLogo"
                      src="/images/Group 1000002817.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <p className="text-center featuresCardHeadline pt-2">
                    {" "}
                    Broadcaster{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 cardHover cursor-pointer">
              <div className="card-body">
                <div className="flex justify-center">
                  <div className="featuresCardLogoDiv">
                    <img
                      className="featuresCardLogo"
                      src="/images/Group 1000002813.png"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-center">
                    <p className="text-center featuresCardHeadline pt-2">
                      {" "}
                      WhatsApp Commerce{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 cardHover cursor-pointer">
              <div className="card-body">
                <div className="flex justify-center">
                  <div className="featuresCardLogoDiv">
                    <img
                      className="featuresCardLogo"
                      src="/images/Group 1000002812.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <p className="text-center featuresCardHeadline pt-2">
                    {" "}
                    Drip <br /> Campanigns{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 cardHover cursor-pointer">
              <div className="card-body">
                <div className="flex justify-center">
                  <div className="featuresCardLogoDiv">
                    <img
                      className="featuresCardLogo"
                      src="/images/Group 1000002811.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <p className="text-center featuresCardHeadline pt-2">
                    {" "}
                    Connectors{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 cardHover cursor-pointer">
              <div className="card-body">
                <div className="flex justify-center">
                  <div className="featuresCardLogoDiv">
                    <img
                      className="featuresCardLogo"
                      src="/images/Group 1000002810.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <p className="text-center featuresCardHeadline pt-2">
                    {" "}
                    Connectors{" "}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <WhatsAppChatBots />
      <HomeCrm />
      <HomeBroadcaster />
      <HomeDrip />
      <HomeConnectors />
      <HomeGenerativeAI />
      <GettingStarted />
      <HighPerformer />
      <HomeFAQ />
    </div>
  );
};

export default FeturesPage;
