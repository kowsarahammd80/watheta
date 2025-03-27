"use client";

import React, { useState } from "react";

const HomeFAQ = () => {
  const [faqButton, setFaqButton] = useState("genarel");
  console.log(faqButton);
  return (
    <div className="py-10 lg:py-20 xl:py-20">
      <section className="mx-5 lg:mx-40 xl:mx-40 md:mx-16">
        {/* head line */}
        <div className="">
          <h1 className="homeFaqHEeadLine">
            {" "}
            Frequently Asked Questions{" "}
          </h1>
        </div>
        {/* faq */}
        <div className="pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
            {/* button */}
            <div className="">
              <div
                onClick={() => setFaqButton("genarel")}
                className={`rounded-lg ${
                  faqButton === "genarel"
                    ? "homeFaqButtonDivActive"
                    : "homeFaqButtonDiv"
                }`}
              >
                <button
                  className={`homeFaqButton ${
                    faqButton === "genarel" && "homeFaqButtonActive"
                  }`}
                >
                  General
                </button>
              </div>
              <div
                onClick={() => setFaqButton("payment")}
                className={`rounded-lg ${
                  faqButton === "payment"
                    ? "homeFaqButtonDivActive"
                    : "homeFaqButtonDiv"
                }`}
              >
                <button
                  className={`homeFaqButton ${
                    faqButton === "payment" && "homeFaqButtonActive"
                  }`}
                >
                  Payment
                </button>
              </div>
              <div
                onClick={() => setFaqButton("features")}
                className={`rounded-lg ${
                  faqButton === "features"
                    ? "homeFaqButtonDivActive"
                    : "homeFaqButtonDiv"
                }`}
              >
                <button
                  className={`homeFaqButton ${
                    faqButton === "features" && "homeFaqButtonActive"
                  }`}
                >
                  Features
                </button>
              </div>
              <div
                onClick={() => setFaqButton("pricing")}
                className={`rounded-lg ${
                  faqButton === "pricing"
                    ? "homeFaqButtonDivActive"
                    : "homeFaqButtonDiv"
                }`}
              >
                <button
                  className={`homeFaqButton ${
                    faqButton === "pricing" && "homeFaqButtonActive"
                  }`}
                >
                  Pricing
                </button>
              </div>
            </div>
            {/* faq */}
            <div data-aos="zoom-in-down" className="w-full col-span-2">
              <div className="collapse collapse-arrow border border-t-0 border-l-0 border-r-0 border-base-300 rounded-none w-full">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title HomeFaqQustion text-md lg:text-xl xl:text-xl md:text-lg">
                  What kind of jobs can I find on employin?
                </div>
                <div className="collapse-content text-sm lg:text-lg xl:text-lg md:text-md opacity-60 pe-6 lg:pe-32 xl:pe-32">
                  We work with over 500 partners in the gastronomy sector who
                  are looking for a variety of roles. On our platform, you can
                  find job postings for waiters, bartenders, baristas, chefs,
                  restaurant managers, and more.
                </div>
              </div>
              <div className="collapse collapse-arrow border border-t-0 border-l-0 border-r-0 border-base-300 rounded-none">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-md lg:text-xl xl:text-xl md:text-lg">
                  What kind of employers can I find on employin?
                </div>
                <div className="collapse-content text-sm lg:text-lg xl:text-lg md:text-md opacity-60 pe-6 lg:pe-32 xl:pe-32">
                  We work with over 500 partners in the gastronomy sector who
                  are looking for a variety of roles. On our platform, you can
                  find job postings for waiters, bartenders, baristas, chefs,
                  restaurant managers, and more.
                </div>
              </div>
              <div className="collapse collapse-arrow border border-t-0 border-l-0 border-r-0 border-base-300 rounded-none">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-md lg:text-xl xl:text-xl md:text-lg">
                  What kind of employers can I find on employin?
                </div>
                <div className="collapse-content text-sm lg:text-lg xl:text-lg md:text-md opacity-60 pe-6 lg:pe-32 xl:pe-32">
                  We work with over 500 partners in the gastronomy sector who
                  are looking for a variety of roles. On our platform, you can
                  find job postings for waiters, bartenders, baristas, chefs,
                  restaurant managers, and more.
                </div>
              </div>
              <div className="collapse collapse-arrow border border-t-0 border-l-0 border-r-0 border-base-300 rounded-none">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-md lg:text-xl xl:text-xl md:text-lg">
                  What kind of employers can I find on employin?
                </div>
                <div className="collapse-content text-sm lg:text-lg xl:text-lg md:text-md opacity-60 pe-6 lg:pe-32 xl:pe-32">
                  We work with over 500 partners in the gastronomy sector who
                  are looking for a variety of roles. On our platform, you can
                  find job postings for waiters, bartenders, baristas, chefs,
                  restaurant managers, and more.
                </div>
              </div>
              <div className="collapse collapse-arrow border border-t-0 border-l-0 border-r-0 border-base-300 rounded-none">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-md lg:text-xl xl:text-xl md:text-lg">
                  Does it really only take 1-2 days to hear back from employers?
                </div>
                <div className="collapse-content text-sm lg:text-lg xl:text-lg md:text-md opacity-60 pe-6 lg:pe-32 xl:pe-32">
                  We work with over 500 partners in the gastronomy sector who
                  are looking for a variety of roles. On our platform, you can
                  find job postings for waiters, bartenders, baristas, chefs,
                  restaurant managers, and more.
                </div>
              </div>
              <div className="collapse collapse-arrow border border-t-0 border-l-0 border-r-0 border-base-300 rounded-none">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-md lg:text-xl xl:text-xl md:text-lg">
                  Can I schedule interviews with multiple employers at the same
                  time?
                </div>
                <div className="collapse-content text-sm lg:text-lg xl:text-lg md:text-md opacity-60 pe-6 lg:pe-32 xl:pe-32">
                  We work with over 500 partners in the gastronomy sector who
                  are looking for a variety of roles. On our platform, you can
                  find job postings for waiters, bartenders, baristas, chefs,
                  restaurant managers, and more.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeFAQ;
