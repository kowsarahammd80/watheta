import React from "react";


const Conversational = () => {
  return (
    <div className="conversationalbg p-16">
      <section className="mx-32">
        {/* healdline */}
        <div className="flex justify-center py-5">
          <h1 className="conversationalHeadline text-center">
            Conversational Automation <br /> For Every Industry
          </h1>
        </div>
        {/* card */}
        <div className="grid grid-cols-3 gap-x-12 gap-y-8 pt-10 ">
          <div className="card card-border bg-base-100 rounded-3xl cardHover">
            <div className="card-body">
              <h2 className="conversationalCardTitle">BFSI</h2>
              <div className="py-5 flex justify-between items-center">
                <button className="conversationallearnMoreButton flex items-center">
                  <span className="conversationalArrowDiv">
                    <img src="/images/Group 1000002593.png" alt="" />
                  </span>
                  <span className="ms-2">Learn More</span>
                </button>
                <div className="conversationalIconDiv">
                  <img
                    className="conversationalIcon"
                    src="/images/Group 1000002759.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="card card-border bg-base-100 rounded-3xl cardHover">
            <div className="card-body">
              <h2 className="conversationalCardTitle">Retail</h2>
              <div className="py-5 flex justify-between items-center">
                <button className="conversationallearnMoreButton flex items-center">
                  <span className="conversationalArrowDiv">
                    <img src="/images/Group 1000002593.png" alt="" />
                  </span>
                  <span className="ms-2">Learn More</span>
                </button>
                <div className="conversationalIconDiv">
                  <img
                    className="conversationalIcon"
                    src="/images/Group 1000002760.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="card card-border bg-base-100 rounded-3xl cardHover">
            <div className="card-body">
              <h2 className="conversationalCardTitle">Food & Beverage</h2>
              <div className="py-5 flex justify-between items-center">
                <button className="conversationallearnMoreButton flex items-center">
                  <span className="conversationalArrowDiv">
                    <img src="/images/Group 1000002593.png" alt="" />
                  </span>
                  <span className="ms-2">Learn More</span>
                </button>
                <div className="conversationalIconDiv">
                  <img
                    className="conversationalIcon"
                    src="/images/Group 1000002761.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="card card-border bg-base-100 rounded-3xl cardHover">
            <div className="card-body">
              <h2 className="conversationalCardTitle">Education</h2>
              <div className="py-5 flex justify-between items-center">
                <button className="conversationallearnMoreButton flex items-center">
                  <span className="conversationalArrowDiv">
                    <img src="/images/Group 1000002593.png" alt="" />
                  </span>
                  <span className="ms-2">Learn More</span>
                </button>
                <div className="conversationalIconDiv">
                  <img
                    className="conversationalIcon"
                    src="/images/Group 1000002762.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="card card-border bg-base-100 rounded-3xl cardHover">
            <div className="card-body">
              <h2 className="conversationalCardTitle">Healthcare</h2>
              <div className="py-5 flex justify-between items-center">
                <button className="conversationallearnMoreButton flex items-center">
                  <span className="conversationalArrowDiv">
                    <img src="/images/Group 1000002593.png" alt="" />
                  </span>
                  <span className="ms-2">Learn More</span>
                </button>
                <div className="conversationalIconDiv">
                  <img
                    className="conversationalIcon"
                    src="/images/Group 1000002763.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="card card-border bg-base-100 rounded-3xl cardHover">
            <div className="card-body">
              <h2 className="conversationalCardTitle">Travel</h2>
              <div className="py-5 flex justify-between items-center">
                <button className="conversationallearnMoreButton flex items-center">
                  <span className="conversationalArrowDiv">
                    <img src="/images/Group 1000002593.png" alt="" />
                  </span>
                  <span className="ms-2">Learn More</span>
                </button>
                <div className="conversationalIconDiv">
                  <img
                    className="conversationalIcon"
                    src="/images/Group 1000002764.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 flex justify-center">
          <button className="flex items-center border rounded-full px-8 py-3 bg-white viewallindustryButtonText">
            View all industry
            <span className="ms-2"><img src="/images/Group 1000002679.png" alt="" /></span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Conversational;
