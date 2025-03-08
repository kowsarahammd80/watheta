import HomeFAQ from "@/components/HomeFAQ";
import Link from "next/link";
import React from "react";

const BlogsPage = () => {
  // const blogs = await useBlogsData()
  return (
    <div>
      {/* 1st hero */}
      <div className="blogsHeroDiv pt-20">
        <div className="blogsHeroBg">
          {/* <img className="blogsHeroBgImg" src="/images/image 314.png" alt="" /> */}
          <div className="blogsHeroHeadlineDiv">
            <div className="flex justify-center">
              <div className="pt-14">
                <h1 className="blogsHeroHeadline text-center">Watheta Blog</h1>
                <p className="blogsHeroHeadPera text-center">
                  look like readable English. Many desktop publishing packages
                  and web page <br /> editors now use Lorem Ipsum as their
                  default model text
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*2nd hero */}
      <div className="mx-48 -mt-52">
        <div className="blogs2ndHeroBgImgDiv">
          <img
            className="blogs2ndHeroBgImg"
            src="/images/image2nd.png"
            alt=""
          />
          <div className="blogs2ndHeroContectDiv flex items-end">
            <div className="ps-10 gap-4 w-full">
              <button className="blogsStartupsButton rounded-full shadow-lg border border-gray-400 px-4 py-1">
                Startups
              </button>
              <button className="blogsStartupsButton rounded-full shadow-lg border border-gray-400 px-4 py-1 ms-3">
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
      <section className="mx-48 py-16">
        <div className="grid grid-cols-3 gap-10">
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
      <section className="blogRecentBlog py-20">
        <div className="mx-48">
          <div>
            <h1 className="blogPageReasentHeadline">Recent Blogs</h1>
          </div>
          {/* blog grid */}
          <div className="grid grid-cols-2 py-10 gap-10">
            <div>
              {/* img  */}
              <div className="blogePageResentBlogsImgDiv">
                <img
                  className="blogePageResentBlogsImg"
                  src="/images/imager.png"
                  alt=""
                />
              </div>
              {/* min and product text */}
              <div className="flex justify-between pt-6">
                <span className="border px-4 py-1 rounded-full blogProductText bg-white">
                  Product
                </span>
                <span className="blogProductMinText">11 min read</span>
              </div>
              <div className="pt-4">
                <h1 className="blogPageHeadline">
                  Frequently asked questions about Xref Exit Surveys
                </h1>
              </div>
              <div className="pt-4">
                <button className="border-b border-gray-500 blogReadMoreText">
                  {" "}
                  Read more{" "}
                </button>
              </div>
            </div>
            {/* 2nd gride */}
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-5">
                <div className="blogPageResentImgDiv2nd border rounded-3xl col-span-1">
                  <img
                    className="blogPageResent2Img"
                    src="/images/imager (1).png"
                    alt=""
                  />
                </div>
                <div className="col-span-2">
                  <div className="flex justify-between">
                    <button className="bg-white px-4 py-1 rounded-full border blogProductText">
                      Product
                    </button>
                    <span className="blogProductMinText">11 min read</span>
                  </div>
                  <h1 className="blogPageHeadline pt-4">
                    Frequently asked questions about Xref Exit Surveys
                  </h1>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-5">
                <div className="blogPageResentImgDiv2nd border rounded-3xl col-span-1">
                  <img
                    className="blogPageResent2Img"
                    src="/images/imager (2).png"
                    alt=""
                  />
                </div>
                <div className="col-span-2">
                  <div className="flex justify-between">
                    <button className="bg-white px-4 py-1 rounded-full border blogProductText">
                      Product
                    </button>
                    <span className="blogProductMinText">11 min read</span>
                  </div>
                  <h1 className="blogPageHeadline pt-4">
                    Frequently asked questions about Xref Exit Surveys
                  </h1>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-5">
                <div className="blogPageResentImgDiv2nd border rounded-3xl col-span-1">
                  <img
                    className="blogPageResent2Img"
                    src="/images/imager (3).png"
                    alt=""
                  />
                </div>
                <div className="col-span-2">
                  <div className="flex justify-between">
                    <button className="bg-white px-4 py-1 rounded-full border blogProductText">
                      Product
                    </button>
                    <span className="blogProductMinText">11 min read</span>
                  </div>
                  <h1 className="blogPageHeadline pt-4">
                    Frequently asked questions about Xref Exit Surveys
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 2nd blogs show section */}
      <section className="mx-48 py-16">
        <div className="grid grid-cols-3 gap-10">
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
      <section className="mx-48 pt-5">
        <div className="joinOurNewsletterbgImgDiv">
          <img
            className="joinOurNewsletterbgImg"
            src="/images/Group 1000002862.png"
            alt=""
          />
          <div className="joinOurNewsletterContentDiv flex justify-center items-center">
            <div className="">
              <h1 className="text-white JoinournewsletterText text-center">
                Join our newsletter
              </h1>
              <p className="joinournewsletterPeraText text-center pt-2 leading-relaxed">
                Subscribe our newsletter to receive the latest news and <br />
                exclusive offers every week. No spam,
              </p>
              {/* input */}
              <div className="pt-6 w-full joinournewsletterInputDiv">
                <input
                  className="joinournewsletterInput border-4 w-full"
                  type="text"
                  placeholder="Enter your email"
                />
                <button className="joinournewsletterSubscribeButton px-10 py-2 rounded-full">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeFAQ />
    </div>
  );
};

export default BlogsPage;
