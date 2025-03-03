import React from "react";

const HomeBlogs = () => {
  return (
    <div className="homeBlogsBg py-20">
      <section className="mx-48">
        {/* headline */}
        <div className="text-center">
          <h1 className="homeBlogsHeadline">Watheta Recent Blogs</h1>
          <p className="text-base leading-loose">
            The Blog Page Of Infermedica Offers News, Analysis, And In-Depth
            Knowledge About The <br /> Future Of Digital Health And How
            Technology Is Affecting It.
          </p>
        </div>
        {/* card */}
        <div className="grid grid-cols-3 py-10 gap-10">
          <div className="col-span-2">
            <div className="homeBlogsCols2ImgDiv rounded-3xl">
              <img
                className="homeBlogsCols2Img"
                src="/images/image.png"
                alt=""
              />
            </div>
            {/* text */}
            <div>
              <h1 className="homeBlogCardHeadline py-4">
                Why Not Seeing Increase in Sales Despite Generating a High
                Volume of Leads?
              </h1>
              <div className="flex gap-4 dayOrCounttext">
                <p>2 MONTHS AGO</p>
                <p>•</p>
                <p>6 MIN READ</p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="homeBlogsCols1-1stImgDiv rounded-3xl">
              <img
                className="homeBlogsCols1-1stImg"
                src="/images/image (1).png"
                alt=""
              />
            </div>
            <div className="homeBlogCard2ndHeadline py-4">
              <p>WhatsApp Conversation Based Pricing Explained</p>
            </div>
            <div className="flex gap-4 dayOrCounttext">
              <p>2 MONTHS AGO</p>
              <p>•</p>
              <p>6 MIN READ</p>
            </div>
          </div>
          {/* 2ndline */}
          <div>
            <div className="homeBlogsCols1-2ndImgDiv rounded-3xl">
              <img
                className="homeBlogsCols2Img"
                src="/images/image (2).png"
                alt=""
              />
            </div>
            <div className="homeBlogCard2ndHeadline py-4">
              <p>Why Customer Relationship Management (CRM) System...</p>
            </div>
            <div className="flex gap-4 dayOrCounttext">
              <p>2 MONTHS AGO</p>
              <p>•</p>
              <p>6 MIN READ</p>
            </div>
          </div>
          <div>
            <div className="homeBlogsCols1-2ndImgDiv rounded-3xl">
              <img
                className="homeBlogsCols2Img"
                src="/images/image (3).png"
                alt=""
              />
            </div>
            <div className="homeBlogCard2ndHeadline py-4">
              <p>2023 Recap & 2024 Possibilities</p>
            </div>
            <div className="flex gap-4 dayOrCounttext">
              <p>2 MONTHS AGO</p>
              <p>•</p>
              <p>6 MIN READ</p>
            </div>
          </div>
          <div>
            <div className="homeBlogsCols1-2ndImgDiv rounded-3xl">
              <img
                className="homeBlogsCols2Img"
                src="/images/image (4).png"
                alt=""
              />
            </div>
            <div className="homeBlogCard2ndHeadline py-4">
              <p>WhatsApp Integration into Lightfunnels</p>
            </div>
            <div className="flex gap-4 dayOrCounttext">
              <p>2 MONTHS AGO</p>
              <p>•</p>
              <p>6 MIN READ</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="flex items-center px-10 py-3 border rounded-full bg-white">See All Blogs <span className="ms-2"><img src="/images/Group 1000002679.png" alt="" /></span></button>
        </div>
      </section>
    </div>
  );
};

export default HomeBlogs;
