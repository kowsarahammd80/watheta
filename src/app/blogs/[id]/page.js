"use client";

import HomeFAQ from "@/components/HomeFAQ";
import JoinOurNewsLetter from "@/components/JoinOurNewsLetter";
import Link from "next/link";
import React, { useState } from "react";


const BlogSingleDetails = () => {
  const [inthisButton, setinthisButton] = useState("algorithm");
  return (
    <div className="pt-24">
      <div className="mx-5 lg:mx-48 xl:mx-48 md:mx-16">
        <Link href="/blogs" className="flex items-center">
          <span className="me-2">
            <img src="/images/Group 1000002866.png" alt="" />
          </span>{" "}
          Back
        </Link>
      </div>
      {/* HERO and blog */}
      <section className="pt-5 lg:pt-16 xl:pt-16 mb:pt-10 mx-5 lg:mx-48 xl:mx-48 md:mx-16">
        <div className="mx-0 lg:mx-16 xl:mx-16 md:mx-4">
          <div className="space-x-3">
            <button className="singleStartupButton border px-3 py-1 rounded-full">
              Startups
            </button>
            <button className="singleStartupButton border px-3 py-1 rounded-full">
              Budgeting
            </button>
          </div>
          <h1 className="singleBlogsHeadline font-semibold leading-tight py-2">
            Unlocking Success: The Ultimate Guide to Choosing Your E-commerce
            Platform
          </h1>
          <p className="pt-4">Published September 3,2024</p>
        </div>
        <div className=" singleBlogImgDiv mt-10 rounded-3xl">
          <img
            className="singleBlogImg rounded-3xl"
            src="/images/imageSingleHead.png"
            alt=""
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-1 pt-10">
          <div className="col-span-1">
            <p className="inThisArticleText font-semibold">In this article</p>
            <div className="mt-6">
              <div
                className={`ps-5 border-s-4 inthisSingleButtonsDiv ${
                  inthisButton === "algorithm"
                    ? "inthisSingleButtonsDivActive"
                    : "inthisSingleButtonsDiv"
                }`}
              >
                <button
                  onClick={() => setinthisButton("algorithm")}
                  className="inthisSingleButtons text-start"
                >
                  Underacting the accountable algorithm
                </button>
              </div>
            </div>
            <div
              className={`ps-5 border-s-4 inthisSingleButtonsDiv ${
                inthisButton === "guide"
                  ? "inthisSingleButtonsDivActive"
                  : "inthisSingleButtonsDiv"
              }`}
            >
              <button
                onClick={() => setinthisButton("guide")}
                className="inthisSingleButtons text-start pt-5"
              >
                The Ultimate Guide
              </button>
            </div>
            <div
              className={`ps-5 border-s-4 inthisSingleButtonsDiv ${
                inthisButton === "startups"
                  ? "inthisSingleButtonsDivActive"
                  : "inthisSingleButtonsDiv"
              }`}
            >
              <button
                onClick={() => setinthisButton("startups")}
                className="inthisSingleButtons text-start pt-5"
              >
                Business Budgeting for Startups
              </button>
            </div>
            {/* Shear Article */}
            <div className="pt-10 pb-5">
              <p className="shearAricleText">Share Article</p>
              <div className="flex gap-3">
                <span>
                  <img src="/images/facebook.png" alt="" />
                </span>
                <span>
                  <img src="/images/Group 1000002869.png" alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3">
            <div className="singleBlogsPeraText">
              <p className="pb-5 me-2 lg:me-16 xl:me-16">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of
              </p>
              <p className="pb-5 me-2 lg:me-16 xl:me-16">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
                voluptatem unde. Eveniet voluptatum laborum ab! Optio fugiat
                aspernatur neque reprehenderit explicabo corporis architecto,
                numquam iste atque sed, adipisci beatae accusantium magni
                pariatur fuga fugit cupiditate! At doloribus praesentium
                nesciunt eos.
              </p>
              <p className="pb-5 me-2 lg:me-16 xl:me-16">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of
              </p>
              <p className="pb-5 me-2 lg:me-16 xl:me-16">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
                voluptatem unde. Eveniet voluptatum laborum ab! Optio fugiat
                aspernatur neque reprehenderit explicabo corporis architecto,
                numquam iste atque sed, adipisci beatae accusantium magni
                pariatur fuga fugit cupiditate! At doloribus praesentium
                nesciunt eos.
              </p>
              <p className="pb-5 me-2 lg:me-16 xl:me-16">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of
              </p>
              <p className="pb-5 me-2 lg:me-16 xl:me-16">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
                voluptatem unde. Eveniet voluptatum laborum ab! Optio fugiat
                aspernatur neque reprehenderit explicabo corporis architecto,
                numquam iste atque sed, adipisci beatae accusantium magni
                pariatur fuga fugit cupiditate! At doloribus praesentium
                nesciunt eos.
              </p>
              <div className="singleContentImgDiv pt-5 pb-10">
                <img
                  className="singleContentImg"
                  src="/images/imageSingleCOntent.png"
                  alt=""
                />
              </div>
              <p className="pb-5 me-2 lg:me-16 xl:me-16">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
                voluptatem unde. Eveniet voluptatum laborum ab! Optio fugiat
                aspernatur neque reprehenderit explicabo corporis architecto,
                numquam iste atque sed, adipisci beatae accusantium magni
                pariatur fuga fugit cupiditate! At doloribus praesentium
                nesciunt eos.
              </p>
              <p className="pb-5 me-2 lg:me-16 xl:me-16">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of
              </p>
              <p className="pb-5 me-2 lg:me-16 xl:me-16">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
                voluptatem unde. Eveniet voluptatum laborum ab! Optio fugiat
                aspernatur neque reprehenderit explicabo corporis architecto,
                numquam iste atque sed, adipisci beatae accusantium magni
                pariatur fuga fugit cupiditate! At doloribus praesentium
                nesciunt eos.
              </p>
              <p className="pb-5 me-2 lg:me-16 xl:me-16">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of
              </p>
              <p className="pb-5 me-2 lg:me-16 xl:me-16">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
                voluptatem unde. Eveniet voluptatum laborum ab! Optio fugiat
                aspernatur neque reprehenderit explicabo corporis architecto,
                numquam iste atque sed, adipisci beatae accusantium magni
                pariatur fuga fugit cupiditate! At doloribus praesentium
                nesciunt eos.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* resent blog */}
      {/* <section className="py-20 blogRecentBlog mt-16">
        <div className="mx-48">
          <h1 className="blogPageReasentHeadline">Related Blogs</h1>
          <div className="grid grid-cols-3 gap-10 pt-10">
            <div className="cursor-pointer">
              
              <div className="blogPageImgeDiv border rounded-3xl">
                <img className="blogPageImge" src="/images/image3.png" alt="" />
              </div>
              
              <div className="flex justify-between pt-6">
                <span className="border px-4 py-1 rounded-full blogProductText">
                  Product
                </span>
                <span className="blogProductMinText">11 min read</span>
              </div>
              
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
            
            <div className="cursor-pointer">
              
              <div className="blogPageImgeDiv border rounded-3xl">
                <img
                  className="blogPageImge"
                  src="/images/image3 (1).png"
                  alt=""
                />
              </div>
              
              <div className="flex justify-between pt-6">
                <span className="border px-4 py-1 rounded-full blogProductText">
                  Product
                </span>
                <span className="blogProductMinText">11 min read</span>
              </div>
              
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
            
            <div className="cursor-pointer">
              
              <div className="blogPageImgeDiv border rounded-3xl">
                <img
                  className="blogPageImge"
                  src="/images/image3(2).png"
                  alt=""
                />
              </div>
              
              <div className="flex justify-between pt-6">
                <span className="border px-4 py-1 rounded-full blogProductText">
                  Product
                </span>
                <span className="blogProductMinText">11 min read</span>
              </div>
              
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
        </div>
      </section> */}
      {/* Join our newsletter */}
      <JoinOurNewsLetter/>
      {/* faq*/}
      <section>
        <HomeFAQ />
      </section>
    </div>
  );
};

export default BlogSingleDetails;
