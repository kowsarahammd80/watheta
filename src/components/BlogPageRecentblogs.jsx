import React from "react";

const BlogPageRecentblogs = () => {
  return (
    <div>
      <section className="blogRecentBlog py-10 lg:py-20 xl:py-20">
        <div className="mx-5 lg:mx-48 xl:mx-48 md:mx-16">
          <div>
            <h1 className="blogPageReasentHeadline">Recent Blogs</h1>
          </div>
          {/* blog grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 py-10 gap-10">
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
    </div>
  );
};

export default BlogPageRecentblogs;
