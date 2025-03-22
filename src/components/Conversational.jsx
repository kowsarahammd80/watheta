import React from "react";

const Conversational = () => {
  return (
    <div className="conversationalbg p-5 lg:p-16 xl:p-16 md:p-8">
      <section className="mx-0 lg:mx-32 xl:mx-32 md:mx-5">
        {/* healdline */}
        <div className="flex justify-center py-2 lg:py-5 xl:py-5 md:py-4">
          <h1 className="conversationalHeadline text-center">
            Conversational Automation For Every Industry
          </h1>
        </div>
        {/* card */}
        <div
          data-aos="fade-up"
            data-aos-anchor-placement="top-center"
         className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-x-5 lg:gap-x-12 gap-y-8 pt-5 xl:pt-10 lg:pt-10">
          <div
           
            className="card card-border cardBgColor rounded-3xl cardHover"
          >
            <div className="card-body">
              <h2 className="conversationalCardTitle">BFSI</h2>
              <div className="py-2 lg:py-5 xl:py-5 flex justify-between items-center">
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
          <div 
           
          className="card card-border cardBgColor rounded-3xl cardHover">
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
          <div 
           
          className="card card-border cardBgColor rounded-3xl cardHover">
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
          <div
           
           className="card card-border cardBgColor rounded-3xl cardHover">
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
          <div 
           
           className="card card-border cardBgColor rounded-3xl cardHover">
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
          <div 
          
           className="card card-border cardBgColor rounded-3xl cardHover">
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
          <button className="flex items-center border rounded-full text-sm lg:text-lg xl:text-lg px-5 lg:px-8 xl:px-8 py-3 lg:py-3 xl:py-3 bg-white viewallindustryButtonText cardHover">
            View all industry
            <span className="ms-2">
              <img src="/images/Group 1000002679.png" alt="" />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Conversational;
