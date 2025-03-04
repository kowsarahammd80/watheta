import React from "react";

const HomeHero = () => {
  return (
    <div className="homeHerobg">
      <div className="mx-5 lg:mx-40 xl:mx-40 md:mx-10">
        <div className="flex">
          <div className="flex justify-start items-center HomeHeroDivHeight">
            {/* content */}
            <section>
              {/* headline */}
              {/* <div className="homeHeroHeadLinkDiv">
              <h1 className="homeHeroHeadline">
                Grow Your Business For Whatsapp API
              </h1>
            </div> */}
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
              <div className="py-5 lg:py-10 flex justify-center lg:justify-start xl:justify-start gap-5">
                <button className="homeHeroGetButton">Get Started</button>
                <button className="px-7 rounded-full homeScheduleButton">
                  Schedule A Call
                </button>
              </div>
              {/* no card Required */}
              <div className="flex items-center justify-center lg:justify-start xl:justify-start">
                <div className="homeCardImgDiv me-2">
                  {/* <img className="homeCardImg" src="/images/card.png" alt="" /> */}
                </div>
                {/* <div>
                 <p className="homeNoCardText">No Credit Card Required</p>
             </div> */}
              </div>
            </section>
          </div>
          {/*  */}
          <div className="flex justify-start items-center w-full">
            <div className="homeHeroImgaDiv">
              <img className="homeHeroImga" src="https://watheta.com/wp-content/uploads/2023/08/md2x.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
