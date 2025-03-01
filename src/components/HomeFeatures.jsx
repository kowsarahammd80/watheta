import React from "react";

const HomeFeatures = () => {
  return (
    <div className="homeFeaturesbg py-5">
      {/* heasdline */}
      <div className="">
        <h1 className="text-center pt-10 HomeFeturesHeadline">Our Features</h1>
        <div className="flex justify-center w-full">
          <p className="text-center pt-2 w-1/4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration
          </p>
        </div>
      </div>
      {/* card */}
      <section className="py-10 mx-48">
        <div className="grid grid-cols-4 gap-8">
          <div className="card bg-base-100 w-full HomeFeturescardShadow">
            <div className="card-body">
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
                <p className="text-center pt-3">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </div>
          </div>
          {/* 2nd */}
          <div className="card bg-base-100 w-full HomeFeturescardShadow">
            <div className="card-body">
              <div className="flex justify-center">
                <div className="homeFeaturesLogoDiv">
                  <img
                    className="homeFeaturesLogo"
                    src="/images/Group 1000002815.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center">
                <h1 className="cardFeaturesHeadline text-center">
                  Modular CRM
                </h1>
                <p className="text-center pt-3">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </div>
          </div>
          {/* 3rd */}
          <div className="card bg-base-100 w-full HomeFeturescardShadow">
            <div className="card-body">
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
                <p className="text-center pt-3">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </div>
          </div>
          {/* 4th */}
          <div className="card bg-base-100 w-full HomeFeturescardShadow">
            <div className="card-body">
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
                <p className="text-center pt-3">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </div>
          </div>
          {/* 5th */}
          <div className="card bg-base-100 w-full HomeFeturescardShadow">
            <div className="card-body">
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
                <p className="text-center pt-3">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </div>
          </div>
          {/* 6th */}
          <div className="card bg-base-100 w-full HomeFeturescardShadow">
            <div className="card-body">
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
                <p className="text-center pt-3">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </div>
          </div>
          {/* 7th */}
          <div className="card bg-base-100 w-full HomeFeturescardShadow">
            <div className="card-body">
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
                <p className="text-center pt-3">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </div>
          </div>
          {/* 8th */}
          <div className="card bg-base-100 w-full HomeFeturescardShadow">
            <div className="card-body">
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
                <p className="text-center pt-3">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* button featuers */}
      <div className="flex justify-center py-10">
        <button className="bg-white px-6 py-2 rounded-full flex items-center border HomeFeturescardShadow">View all industry <img src="/images/Group 1000002679.png" alt="" className="ms-3" /></button>
      </div>
    </div>
  );
};

export default HomeFeatures;
