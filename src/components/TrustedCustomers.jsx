import React from "react";

const TrustedCustomers = () => {
  return (
    <div className="py-10">
      <div className="mx-10 lg:mx-0 xl:mx-0 md:10">
        <h1 className="text-center pt-4 lg:pt-12 xl:pt-12 md:pt-6 trustedText">
          Trusted by 2000+ Customers in 80+Countries since 2018
        </h1>
      </div>
      {/* logo */}
      <section className="mx-5 lg:mx-48 py-10">
        <div className="grid grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-5 lg:gap-y-16 xl:gap-y-16 md:gap-y-8">
          <div className="trustLogoDiv">
            <img className="trustLogo" src="/images/Company logo.png" alt="" />
          </div>
          <div className="trustLogoDiv">
            <img
              className="trustLogo"
              src="/images/Company logo (1).png"
              alt=""
            />
          </div>
          <div className="trustLogoDiv">
            <img
              className="trustLogo"
              src="/images/Company logo (2).png"
              alt=""
            />
          </div>
          <div className="trustLogoDiv">
            <img
              className="trustLogo"
              src="/images/company logo (3).png"
              alt=""
            />
          </div>
          <div className="trustLogoDiv">
            <img
              className="trustLogo"
              src="/images/company logo (4).png"
              alt=""
            />
          </div>
          <div className="trustLogoDiv ">
            <img
              className="trustLogo"
              src="/images/company logo (5).png"
              alt=""
            />
          </div>
          <div className="trustLogoDiv">
            <img
              className="trustLogo"
              src="/images/company logo (6).png"
              alt=""
            />
          </div>
          <div className="trustLogoDiv">
            <img
              className="trustLogo"
              src="/images/company logo (7).png"
              alt=""
            />
          </div>
          <div className="trustLogoDiv hidden lg:block xl:block">
            <img
              className="trustLogo"
              src="/images/company logo (8).png"
              alt=""
            />
          </div>
          <div className="trustLogoDiv hidden lg:block xl:block">
            <img
              className="trustLogo"
              src="/images/company logo (9).png"
              alt=""
            />
          </div>            
        </div>
        {/* phone */}
        <div className="flex justify-center gap-x-3 w-full pt-4">
            <div className="trustLogoDiv block lg:hidden xl:hidden">
              <img
                className="trustLogo"
                src="/images/company logo (8).png"
                alt=""
              />
            </div>
            <div className="trustLogoDiv block lg:hidden xl:hidden">
              <img
                className="trustLogo"
                src="/images/company logo (9).png"
                alt=""
              />
            </div>
          </div>
      </section>
    </div>
  );
};

export default TrustedCustomers;
