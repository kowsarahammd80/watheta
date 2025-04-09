import React from "react";

const HomeHero = () => {
  return (
    <div className="homeHerobg HomeHeroDivHeight flex justify-center lg:justify-center xl:justify-center items-center lg:items-center xl:items-center">
      <div className="w-full">
        <div className="mx-5 lg:mx-40 xl:mx-40 md:mx-10">
          <div className="flex justify-center lg:justify-center xl:justify-center md:justify-center mx-auto lg:mx-auto xl:mx-auto">
            {/* headline */}
            <div className="pt-0 lg:pt-24 xl:pt-24">
              <h1 className="heroNewHeadline max-w-[100%] lg:max-w-[762px] xl:max-w-[762px] text-center lg:text-center xl:text-center">
                {" "}
                Grow Your Business For{" "}
                <span className="whatsAppApiText">WhatsApp API</span>{" "}
              </h1>
              <p className="max-w-[100%] lg:max-w-[762px] xl:mx-w-[762px] text-center lg:text-center xl:text-center pt-3 lg:pt-5 xl:pt-5 newHeroPera">
                look like readable English. Many desktop publishing packages and
                web page editors now use Lorem Ipsum as their default model text
              </p>
              <div>
                <div className="py-5 lg:py-10 flex justify-center lg:justify-center xl:justify-center lg:gap-5 xl:gap-5 gap-2 md:gap-3">
                  <button className="homeHeroGetButton">Get Started</button>
                  <button className="rounded-full homeScheduleButton">
                    Schedule A Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* image */}
        {/* <div className="newHeroImgaDiv flex justify-center items-center mx-auto pt-5">
            <img data-aos="zoom-in-up" className="w-full h-full" src="images/Group 1000004014.png" alt="" />
        </div> */}
        {/* pc images */}
        <div className="pt-5 hidden lg:block xl:block md:hidden">
          <div className="flex justify-center -gap-5">
            <div className="">
              <div className="flex">
                <div className="openRetImgaeDiv">
                  <img
                    className="penRetImgae ZoomInk"
                    src="images/Rectangle 51(5).png"
                    alt=""
                  />
                </div>
                <div className="comentWithAvatarDiv">
                  <img
                    className="comentWithAvatarimg ZoomIn"
                    src="images/GroupcomentAvatar.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="-mt-14 cartSunglssImgDiv">
                <img
                  className="ms-5 cartSunglssImg ZoomIn"
                  src="images/GroupWithutavatar5.png"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="talkImgDiv">
                <img
                  className="talkImg ZoomInk"
                  src="images/GroupWithutavatar4.png"
                  alt=""
                />
              </div>
              <div className="-mt-16 conversatinImgDiv">
                <img
                  className="conversatinImg ZoomIn"
                  src="images/GroupWithutavatar3.png"
                  alt=""
                />
              </div>
            </div>
            <div className="capImgDiv">
              <img
                className="capImg ZoomInk"
                src="images/GroupWithutavatar6.png"
                alt=""
              />
            </div>
            <div className="pt-14">
              <div className="whatsAppImgDiv">
                <img
                  className="ms-16 whatsAppImg ZoomIn"
                  src="images/GroupWithutavata2.png"
                  alt=""
                />
              </div>
              <div className="-mt-4 whatsAppImgDiv ">
                <img
                  className="whatsAppImg ZoomInk"
                  src="images/GroupWithutavatar.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* phone images */}
        <div className="block lg:hidden xl:hidden md:hidden">
           <div className="pt-3">
               <div className="phoneHeroNewImgDiv">
                  <img className="phoneHeroNewImg ZoomIn" src="images/phoneHeroNew.png" alt="" />
               </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
