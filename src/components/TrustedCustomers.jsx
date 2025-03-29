"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const TrustedCustomers = () => {
  return (
    <div className="py-10">
      <div className="mx-10 lg:mx-0 xl:mx-0 md:10">
        <h1 className="text-center pt-4 lg:pt-12 xl:pt-12 md:pt-6 trustedText">
          Trusted by 2000+ Customers in 80+Countries since 2018
        </h1>
      </div>
      {/* logo */}
      {/* <section className="mx-5 lg:mx-48 xl:mx-48 md:mx-10 py-10">
        <div
          data-aos="fade-up"
          className=" grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 md:grid-cols-5 gap-x-5 gap-y-5 lg:gap-y-16 xl:gap-y-16 md:gap-y-8"
        >
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
          <div className="trustLogoDiv">
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
          <div className="trustLogoDiv hidden lg:block xl:block md:block">
            <img
              className="trustLogo"
              src="/images/company logo (8).png"
              alt=""
            />
          </div>
          <div className="trustLogoDiv hidden lg:block xl:block md:block">
            <img
              className="trustLogo"
              src="/images/company logo (9).png"
              alt=""
            />
          </div>
        </div>
       
        <div
          data-aos="fade-up"
          className="flex justify-center gap-x-3 w-full pt-4"
        >
          <div className="trustLogoDivPhone block lg:hidden xl:hidden md:hidden">
            <img
              className="trustLogo"
              src="/images/company logo (8).png"
              alt=""
            />
          </div>
          <div className="trustLogoDivPhone block lg:hidden xl:hidden md:hidden">
            <img
              className="trustLogo"
              src="/images/company logo (9).png"
              alt=""
            />
          </div>
        </div>
      </section> */}

      <section>
        {/* <Swiper
          spaceBetween={20}
          centeredSlides={true}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 0, // Continuous sliding
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={4000} // Adjust speed for smooth sliding
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3.2 },
          }}
        >
          <SwiperSlide>
            <div className="trustLogoDiv">
              <img
                className="trustLogo"
                src="/images/Company logo.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="trustLogoDiv">
              <img
                className="trustLogo"
                src="/images/Company logo (1).png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="trustLogoDiv">
              <img
                className="trustLogo"
                src="/images/Company logo (1).png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="trustLogoDiv">
              <img
                className="trustLogo"
                src="/images/Company logo (1).png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="trustLogoDiv">
              <img
                className="trustLogo"
                src="/images/Company logo (1).png"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper> */}
        {/* <Marquee speed={60} pauseOnHover={true} gradient={true}>
          <div className="flex justify-between gap-x-5 lg:gap-x-16 xl:gap-x-16 py-8 lg:py-16 xl:py-16 mx-5 lg:mx-20 xl:mx-20 md:mx-10">
            <div className="trustLogoDiv">
              <img
                className="trustLogo"
                src="/images/Company logo.png"
                alt=""
              />
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
            <div className="trustLogoDiv">
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
            <div className="trustLogoDiv">
              <img
                className="trustLogo"
                src="/images/company logo (8).png"
                alt=""
              />
            </div>
            <div className="trustLogoDiv">
              <img
                className="trustLogo"
                src="/images/company logo (9).png"
                alt=""
              />
            </div>
          </div>
        </Marquee> */}
        <Marquee className="">
          <div className="flex justify-between mt-5">
            <div className="trustLogoDiv m-5">
              <img
                className="trustLogo"
                src="/images/Company logo.png"
                alt=""
              />
            </div>
            <div className="trustLogoDiv m-5">
              <img
                className="trustLogo"
                src="/images/Company logo (1).png"
                alt=""
              />
            </div>
            <div className="trustLogoDiv m-5">
              <img
                className="trustLogo"
                src="/images/Company logo (2).png"
                alt=""
              />
            </div> 
            <div className="trustLogoDiv m-5">
              <img
                className="trustLogo"
                src="/images/company logo (3).png"
                alt=""
              />
            </div>
            <div className="trustLogoDiv m-5">
              <img
                className="trustLogo"
                src="/images/company logo (4).png"
                alt=""
              />
            </div>
            <div className="trustLogoDiv m-5">
              <img
                className="trustLogo"
                src="/images/company logo (5).png"
                alt=""
              />
            </div>
            <div className="trustLogoDiv m-5">
              <img
                className="trustLogo"
                src="/images/company logo (6).png"
                alt=""
              />
            </div>
            <div className="trustLogoDiv m-5">
              <img
                className="trustLogo"
                src="/images/company logo (7).png"
                alt=""
              />
            </div>
            <div className="trustLogoDiv m-5">
              <img
                className="trustLogo"
                src="/images/company logo (8).png"
                alt=""
              />
            </div>
            <div className="trustLogoDiv m-5">
              <img
                className="trustLogo"
                src="/images/company logo (9).png"
                alt=""
              />
            </div>
          </div>
        </Marquee>
      </section>
    </div>
  );
};

export default TrustedCustomers;
