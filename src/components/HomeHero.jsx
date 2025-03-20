import React from "react";

const HomeHero = () => {
  return (
    <div className="homeHerobg">
      <div className="mx-5 lg:mx-40 xl:mx-40 md:mx-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 HomeHeroDivHeight pt-14 lg:pt-0 xl:pt-0 md:pt-10">
          <div className="flex justify-start md:mt-28 items-center lg:items-center xl:items-center">
            {/* content */}
            <section>
              {/* headline */}
              <div className="homeHeroHeadLinkDiv">
                <h1 className="homeHeroHeadline">
                  Unified Business Communication Platform
                </h1>
              </div>
              {/* pera */}
              <div className="homeHeroPeraDiv pt-5">
                <p className="homeHeroPera">
                  Connect with customers across all channels through a single,
                  powerful platform. Automate conversations, boost sales, and
                  deliver exceptional support.
                </p>
              </div>
              {/* button */}
              <div className="py-5 lg:py-10 flex justify-start lg:justify-start xl:justify-start lg:gap-5 xl:gap-5 gap-2 md:gap-3">
                <button className="homeHeroGetButton">Get Started</button>
                <button className="px-7 rounded-full homeScheduleButton">
                  Schedule A Call
                </button>
              </div>
            
            </section>
          </div>
          {/* hero content */}
          <div className="flex justify-start items-start lg:items-center xl:items-center w-full">
            <div className="homeHeroImgaDiv">
              <img data-aos="zoom-in-up" className="homeHeroImga" src="https://watheta.com/wp-content/uploads/2023/08/md2x.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;