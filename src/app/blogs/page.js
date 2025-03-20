'use client';

import BlogPageRecentblogs from "@/components/BlogPageRecentblogs";
import HomeFAQ from "@/components/HomeFAQ";
import JoinOurNewsLetter from "@/components/JoinOurNewsLetter";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



const BlogsPage = () => {
  // const blogs = await useBlogsData()
   useEffect(() => {
      AOS.init({
        duration: 800,
        once: false,
      });
    }, []);
  return (
    <div>
      {/* 1st hero */}
      <div className="blogsHeroDiv pt-16 lg:pt-20 xl:pt-20">
        <div data-aos="fade-down" className="blogsHeroBg">
          {/* <img className="blogsHeroBgImg" src="/images/image 314.png" alt="" /> */}
          <div className="blogsHeroHeadlineDiv">
            <div className="flex justify-center">
              <div className="pt-14">
                <h1 className="blogsHeroHeadline text-center">Watheta Blog</h1>
                <p className="blogsHeroHeadPera text-center pb-0 lg:pb-5 xl:pb-5">
                  look like readable English. Many desktop publishing packages
                  and web page editors now use Lorem Ipsum as their
                  default model text
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*2nd hero */}
      <div className="mx-5 lg:mx-48 xl:mx-48 md:mx-16 -mt-80 lg:-mt-52 xl:-mt-52">
        <div data-aos="fade-up" className="blogs2ndHeroBgImgDiv">
          <img
            className="blogs2ndHeroBgImg hidden lg:block xl:block"
            src="/images/image2nd.png"
            alt=""
          />
          <img
            className="blogs2ndHeroBgImg block lg:hidden xl:hidden"
            src="/images/blogPhoneBg.png"
            alt=""
          />
          <div className="blogs2ndHeroContectDiv flex items-end">
            <div className="ps-3 lg:ps-10 xl:ps-10 gap-4 w-full">
              <button className="blogsStartupsButton rounded-full shadow-lg border border-gray-400 px-4 py-1">
                Startups
              </button>
              <button className="blogsStartupsButton rounded-full shadow-lg border border-gray-400 px-4 py-1 ms-2 lg:ms-3 xl:ms-3">
                Budgeting
              </button>
              <h1 className="blogs2ndHeroHealdline pt-5 leading-tight">
                The Ultimate Guide to Business Budgeting for Startups
              </h1>
              <p className="blogs2ndHeroPera pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum porttitor lorem vel sem luctus tristique. Sed rhoncus
                neque elit, in consequat odio ultrices vitae. Phasellus
                tristique eu neque non varius.
              </p>
              <div className="pb-10 pt-5">
                <button className="blogsReadArticleButton flex items-center px-10 py-3 rounded-full">
                  Read Article{" "}
                  <span className="ms-3">
                    <img src="/images/Group 1000002859.png" alt="" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* blogs card section */}
      <section className="mx-5 lg:mx-48 xl:mx-48 md:mx-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 gap-10">
          {/* card */}
          <div className="cursor-pointer">
            {/* img */}
            <div className="blogPageImgeDiv border rounded-3xl">
              <img className="blogPageImge" src="/images/imageb.png" alt="" />
            </div>
            {/* product and min */}
            <div className="flex justify-between pt-6">
              <span className="border px-4 py-1 rounded-full blogProductText">
                Product
              </span>
              <span className="blogProductMinText">11 min read</span>
            </div>
            {/* headline */}
            <div className="pt-4">
              <h1 className="blogPageHeadline">
                Frequently asked questions about Xref Exit Surveys
              </h1>
            </div>
            <div className="pt-5">
              <Link href="/blogs/1">
                <button className="border-b border-gray-500 blogReadMoreText">
                  Read more
                </button>
              </Link>
            </div>
          </div>
          {/* card */}
          <div className="cursor-pointer">
            {/* img */}
            <div className="blogPageImgeDiv border rounded-3xl">
              <img
                className="blogPageImge"
                src="/images/imageb (1).png"
                alt=""
              />
            </div>
            {/* product and min */}
            <div className="flex justify-between pt-6">
              <span className="border px-4 py-1 rounded-full blogProductText">
                Product
              </span>
              <span className="blogProductMinText">11 min read</span>
            </div>
            {/* headline */}
            <div className="pt-4">
              <h1 className="blogPageHeadline">
                Frequently asked questions about Xref Exit Surveys
              </h1>
            </div>
            <div className="pt-5">
              <Link href="/blogs/1">
                <button className="border-b border-gray-500 blogReadMoreText">
                  Read more
                </button>
              </Link>
            </div>
          </div>
          {/* card */}
          <div className="cursor-pointer">
            {/* img */}
            <div className="blogPageImgeDiv border rounded-3xl">
              <img
                className="blogPageImge"
                src="/images/imageb (2).png"
                alt=""
              />
            </div>
            {/* product and min */}
            <div className="flex justify-between pt-6">
              <span className="border px-4 py-1 rounded-full blogProductText">
                Product
              </span>
              <span className="blogProductMinText">11 min read</span>
            </div>
            {/* headline */}
            <div className="pt-4">
              <h1 className="blogPageHeadline">
                Frequently asked questions about Xref Exit Surveys
              </h1>
            </div>
            <div className="pt-5">
              <Link href="/blogs/1">
                <button className="border-b border-gray-500 blogReadMoreText">
                  Read more
                </button>
              </Link>
            </div>
          </div>
          {/* card */}
          <div className="cursor-pointer">
            {/* img */}
            <div className="blogPageImgeDiv border rounded-3xl">
              <img
                className="blogPageImge"
                src="/images/imageb (3).png"
                alt=""
              />
            </div>
            {/* product and min */}
            <div className="flex justify-between pt-6">
              <span className="border px-4 py-1 rounded-full blogProductText">
                Product
              </span>
              <span className="blogProductMinText">11 min read</span>
            </div>
            {/* headline */}
            <div className="pt-4">
              <h1 className="blogPageHeadline">
                Frequently asked questions about Xref Exit Surveys
              </h1>
            </div>
            <div className="pt-5">
              <Link href="/blogs/1">
                <button className="border-b border-gray-500 blogReadMoreText">
                  Read more
                </button>
              </Link>
            </div>
          </div>
          {/* card */}
          <div className="cursor-pointer">
            {/* img */}
            <div className="blogPageImgeDiv border rounded-3xl">
              <img
                className="blogPageImge"
                src="/images/imageb (4).png"
                alt=""
              />
            </div>
            {/* product and min */}
            <div className="flex justify-between pt-6">
              <span className="border px-4 py-1 rounded-full blogProductText">
                Product
              </span>
              <span className="blogProductMinText">11 min read</span>
            </div>
            {/* headline */}
            <div className="pt-4">
              <h1 className="blogPageHeadline">
                Frequently asked questions about Xref Exit Surveys
              </h1>
            </div>
            <div className="pt-5">
              <Link href="/blogs/1">
                <button className="border-b border-gray-500 blogReadMoreText">
                  Read more
                </button>
              </Link>
            </div>
          </div>
          {/* card */}
          <div className="cursor-pointer">
            {/* img */}
            <div className="blogPageImgeDiv border rounded-3xl">
              <img
                className="blogPageImge"
                src="/images/image (5).png"
                alt=""
              />
            </div>
            {/* product and min */}
            <div className="flex justify-between pt-6">
              <span className="border px-4 py-1 rounded-full blogProductText">
                Product
              </span>
              <span className="blogProductMinText">11 min read</span>
            </div>
            {/* headline */}
            <div className="pt-4">
              <h1 className="blogPageHeadline">
                Frequently asked questions about Xref Exit Surveys
              </h1>
            </div>
            <div className="pt-5">
              <Link href="/blogs/1">
                <button className="border-b border-gray-500 blogReadMoreText">
                  Read more
                </button>
              </Link>
            </div>
          </div>
          {/*  */}
          <div className="cursor-pointer">
            {/* img */}
            <div className="blogPageImgeDiv border rounded-3xl">
              <img
                className="blogPageImge"
                src="/images/image (6).png"
                alt=""
              />
            </div>
            {/* product and min */}
            <div className="flex justify-between pt-6">
              <span className="border px-4 py-1 rounded-full blogProductText">
                Product
              </span>
              <span className="blogProductMinText">11 min read</span>
            </div>
            {/* headline */}
            <div className="pt-4">
              <h1 className="blogPageHeadline">
                Frequently asked questions about Xref Exit Surveys
              </h1>
            </div>
            <div className="pt-5">
              <Link href="/blogs/1">
                <button className="border-b border-gray-500 blogReadMoreText">
                  Read more
                </button>
              </Link>
            </div>
          </div>
          {/*  */}
          <div className="cursor-pointer">
            {/* img */}
            <div className="blogPageImgeDiv border rounded-3xl">
              <img
                className="blogPageImge"
                src="/images/image (7).png"
                alt=""
              />
            </div>
            {/* product and min */}
            <div className="flex justify-between pt-6">
              <span className="border px-4 py-1 rounded-full blogProductText">
                Product
              </span>
              <span className="blogProductMinText">11 min read</span>
            </div>
            {/* headline */}
            <div className="pt-4">
              <h1 className="blogPageHeadline">
                Frequently asked questions about Xref Exit Surveys
              </h1>
            </div>
            <div className="pt-5">
              <Link href="/blogs/1">
                <button className="border-b border-gray-500 blogReadMoreText">
                  Read more
                </button>
              </Link>
            </div>
          </div>
          {/*  */}
          <div className="cursor-pointer">
            {/* img */}
            <div className="blogPageImgeDiv border rounded-3xl">
              <img
                className="blogPageImge"
                src="/images/image (8).png"
                alt=""
              />
            </div>
            {/* product and min */}
            <div className="flex justify-between pt-6">
              <span className="border px-4 py-1 rounded-full blogProductText">
                Product
              </span>
              <span className="blogProductMinText">11 min read</span>
            </div>
            {/* headline */}
            <div className="pt-4">
              <h1 className="blogPageHeadline">
                Frequently asked questions about Xref Exit Surveys
              </h1>
            </div>
            <div className="pt-5">
              <Link href="/blogs/1">
                <button className="border-b border-gray-500 blogReadMoreText">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* reacent blogs */}
      <BlogPageRecentblogs/>
      {/* 2nd blogs show section */}
      <section className="mx-5 lg:mx-48 xl:mx-48 py-8 lg:py-16 xl:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 gap-10">
          {/* card */}
          <div className="cursor-pointer">
            {/* img */}
            <div className="blogPageImgeDiv border rounded-3xl">
              <img className="blogPageImge" src="/images/image3.png" alt="" />
            </div>
            {/* product and min */}
            <div className="flex justify-between pt-6">
              <span className="border px-4 py-1 rounded-full blogProductText">
                Product
              </span>
              <span className="blogProductMinText">11 min read</span>
            </div>
            {/* headline */}
            <div className="pt-4">
              <h1 className="blogPageHeadline">
                Frequently asked questions about Xref Exit Surveys
              </h1>
            </div>
            <div className="pt-5">
              <Link href="/blogs/1">
                <button className="border-b border-gray-500 blogReadMoreText">
                  Read more
                </button>
              </Link>
            </div>
          </div>
          {/* card */}
          <div className="cursor-pointer">
            {/* img */}
            <div className="blogPageImgeDiv border rounded-3xl">
              <img
                className="blogPageImge"
                src="/images/image3 (1).png"
                alt=""
              />
            </div>
            {/* product and min */}
            <div className="flex justify-between pt-6">
              <span className="border px-4 py-1 rounded-full blogProductText">
                Product
              </span>
              <span className="blogProductMinText">11 min read</span>
            </div>
            {/* headline */}
            <div className="pt-4">
              <h1 className="blogPageHeadline">
                Frequently asked questions about Xref Exit Surveys
              </h1>
            </div>
            <div className="pt-5">
              <Link href="/blogs/1">
                <button className="border-b border-gray-500 blogReadMoreText">
                  Read more
                </button>
              </Link>
            </div>
          </div>
          {/* card */}
          <div className="cursor-pointer">
            {/* img */}
            <div className="blogPageImgeDiv border rounded-3xl">
              <img
                className="blogPageImge"
                src="/images/image3(2).png"
                alt=""
              />
            </div>
            {/* product and min */}
            <div className="flex justify-between pt-6">
              <span className="border px-4 py-1 rounded-full blogProductText">
                Product
              </span>
              <span className="blogProductMinText">11 min read</span>
            </div>
            {/* headline */}
            <div className="pt-4">
              <h1 className="blogPageHeadline">
                Frequently asked questions about Xref Exit Surveys
              </h1>
            </div>
            <div className="pt-5">
              <Link href="/blogs/1">
                <button className="border-b border-gray-500 blogReadMoreText">
                  Read more
                </button>
              </Link>
            </div>
          </div>
          {/* card */}
          <div className="cursor-pointer">
            {/* img */}
            <div className="blogPageImgeDiv border rounded-3xl">
              <img
                className="blogPageImge"
                src="/images/image3 (3).png"
                alt=""
              />
            </div>
            {/* product and min */}
            <div className="flex justify-between pt-6">
              <span className="border px-4 py-1 rounded-full blogProductText">
                Product
              </span>
              <span className="blogProductMinText">11 min read</span>
            </div>
            {/* headline */}
            <div className="pt-4">
              <h1 className="blogPageHeadline">
                Frequently asked questions about Xref Exit Surveys
              </h1>
            </div>
            <div className="pt-5">
              <Link href="/blogs/1">
                <button className="border-b border-gray-500 blogReadMoreText">
                  Read more
                </button>
              </Link>
            </div>
          </div>
          {/* card */}
          <div className="cursor-pointer">
            {/* img */}
            <div className="blogPageImgeDiv border rounded-3xl">
              <img
                className="blogPageImge"
                src="/images/image3 (4).png"
                alt=""
              />
            </div>
            {/* product and min */}
            <div className="flex justify-between pt-6">
              <span className="border px-4 py-1 rounded-full blogProductText">
                Product
              </span>
              <span className="blogProductMinText">11 min read</span>
            </div>
            {/* headline */}
            <div className="pt-4">
              <h1 className="blogPageHeadline">
                Frequently asked questions about Xref Exit Surveys
              </h1>
            </div>
            <div className="pt-5">
              <Link href="/blogs/1">
                <button className="border-b border-gray-500 blogReadMoreText">
                  Read more
                </button>
              </Link>
            </div>
          </div>
          {/* card */}
          <div className="cursor-pointer">
            {/* img */}
            <div className="blogPageImgeDiv border rounded-3xl">
              <img
                className="blogPageImge"
                src="/images/image3 (5).png"
                alt=""
              />
            </div>
            {/* product and min */}
            <div className="flex justify-between pt-6">
              <span className="border px-4 py-1 rounded-full blogProductText">
                Product
              </span>
              <span className="blogProductMinText">11 min read</span>
            </div>
            {/* headline */}
            <div className="pt-4">
              <h1 className="blogPageHeadline">
                Frequently asked questions about Xref Exit Surveys
              </h1>
            </div>
            <div className="pt-5">
              <Link href="/blogs/1">
                <button className="border-b border-gray-500 blogReadMoreText">
                  Read more
                </button>
              </Link>
            </div>
          </div>
          {/*  */}
        </div>
      </section>
      {/* join our */}
     
      <JoinOurNewsLetter/>
      <HomeFAQ />
    </div>
  );
};

export default BlogsPage;
