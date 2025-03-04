import React from "react";

const WhyChooseWaTheta = () => {
  return (
    <div className="whaychooseWathetabg py-20">
      <section className="mx-48">
        {/* headline */}
        <div className="flex justify-between ">
          <div className="w-full">
            <h1 className="whyChooseWaThetaText">Why Choose <br /> WaTheta</h1>
          </div>
          <div className="flex justify-end pt-4">
            <p className="whyChooseWaThetaPera">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>
        </div>
        {/* card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 pt-10 gap-10">
          <div className="card card-border bg-base-100 rounded-3xl cardHover">
            <div className="card-body">
              <div className="whyChooseWathetaCardImgDiv">
                <img
                  className="whyChooseCardImg"
                  src="/images/Group 1000002778.png"
                  alt=""
                />
              </div>
              <div className="py-5">
                <h1 className="whyChooseCardHeadline">
                  Break Engagement <br /> Barriers
                </h1>
              </div>
              {/* <h2 className="card-title">Card Title</h2> */}
              <p className="text-xl">
                Engage using WhatsApp and improve response rates over email, SMS
                and in-app messaging and campaigning
              </p>
            </div>
          </div>
          <div className="card card-border bg-base-100 rounded-3xl cardHover">
            <div className="card-body">
              <div className="whyChooseWathetaCardImgDiv">
                <img
                  className="whyChooseCardImg"
                  src="/images/Group 1000002779.png"
                  alt=""
                />
              </div>
              <div className="py-5">
                <h1 className="whyChooseCardHeadline">
                  A Better Way <br /> To Upscale
                </h1>
              </div>
              {/* <h2 className="card-title">Card Title</h2> */}
              <p className="text-xl">
                Upscale with multiple users on one single number & get a better
                return on investment than alternative WhatsApp BSPs.
              </p>
            </div>
          </div>
          <div className="card card-border bg-base-100 rounded-3xl cardHover">
            <div className="card-body">
              <div className="whyChooseWathetaCardImgDiv">
                <img
                  className="whyChooseCardImg"
                  src="/images/Group 1000002780.png"
                  alt=""
                />
              </div>
              <div className="py-5">
                <h1 className="whyChooseCardHeadline">
                  Communicate At <br /> Scale Efficiently
                </h1>
              </div>
              {/* <h2 className="card-title">Card Title</h2> */}
              <p className="text-xl">
                Easily start and manage conversations with thousands of
                customers and prospects through automation, chatbots & custom
                workflows.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseWaTheta;
