import React from "react";

const BlogsPage = () => {
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
          <img className="blogs2ndHeroBgImg" src="/images/image2nd.png" alt="" />
          <div className="blogs2ndHeroContectDiv flex items-end">
             <div className="ps-10 gap-4 w-full">
                <button className="blogsStartupsButton rounded-full shadow-lg border border-gray-400 px-4 py-1">Startups</button>
                <button className="blogsStartupsButton rounded-full shadow-lg border border-gray-400 px-4 py-1 ms-3">Budgeting</button>
                <h1 className="blogs2ndHeroHealdline pt-5 leading-tight">The Ultimate Guide to Business Budgeting for Startups</h1>
                <p className="blogs2ndHeroPera pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor lorem vel sem luctus tristique. Sed rhoncus neque elit, in consequat odio ultrices vitae. Phasellus tristique eu neque non varius.</p>
                <div className="pb-10 pt-5">
                    <button className="blogsReadArticleButton flex items-center px-10 py-3 rounded-full">Read Article <span className="ms-3"><img src="/images/Group 1000002859.png" alt="" /></span></button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
