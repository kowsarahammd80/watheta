"use client";

import React, { useState } from "react";

const HomeFAQ = () => {
  const [faqButton, setFaqButton] = useState("genarel");
  console.log(faqButton);
  return (
    <div className="py-20">
      <section className="mx-48">
        {/* head line */}
        <div className="">
          <h1 className="homeFaqHEeadLine">
            {" "}
            Frequently <br /> Asked Questions{" "}
          </h1>
        </div>
        {/* faq */}
        <div className="pt-8">
          <div className="grid grid-cols-3">
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
            <div className="w-full col-span-2">
              <div className="collapse collapse-arrow bg-base-100 border border-t-0 border-l-0 border-r-0 border-base-300 rounded-none w-full">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title HomeFaqQustion text-xl">
                  What kind of jobs can I find on employin?
                </div>
                <div className="collapse-content text-lg opacity-60 pe-32">
                  We work with over 500 partners in the gastronomy sector who
                  are looking for a variety of roles. On our platform, you can
                  find job postings for waiters, bartenders, baristas, chefs,
                  restaurant managers, and more.
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-100 border border-t-0 border-l-0 border-r-0 border-base-300 rounded-none">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl">
                  What kind of employers can I find on employin?
                </div>
                <div className="collapse-content text-lg opacity-60 pe-32">
                  We work with over 500 partners in the gastronomy sector who
                  are looking for a variety of roles. On our platform, you can
                  find job postings for waiters, bartenders, baristas, chefs,
                  restaurant managers, and more.
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-100 border border-t-0 border-l-0 border-r-0 border-base-300 rounded-none">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl">
                  What kind of employers can I find on employin?
                </div>
                <div className="collapse-content text-lg opacity-60 pe-32">
                  We work with over 500 partners in the gastronomy sector who
                  are looking for a variety of roles. On our platform, you can
                  find job postings for waiters, bartenders, baristas, chefs,
                  restaurant managers, and more.
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-100 border border-t-0 border-l-0 border-r-0 border-base-300 rounded-none">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl">
                  What kind of employers can I find on employin?
                </div>
                <div className="collapse-content text-lg opacity-60 pe-32">
                  We work with over 500 partners in the gastronomy sector who
                  are looking for a variety of roles. On our platform, you can
                  find job postings for waiters, bartenders, baristas, chefs,
                  restaurant managers, and more.
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-100 border border-t-0 border-l-0 border-r-0 border-base-300 rounded-none">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl">
                  Does it really only take 1-2 days to hear back from employers?
                </div>
                <div className="collapse-content text-lg opacity-60 pe-32">
                  We work with over 500 partners in the gastronomy sector who
                  are looking for a variety of roles. On our platform, you can
                  find job postings for waiters, bartenders, baristas, chefs,
                  restaurant managers, and more.
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-100 border border-t-0 border-l-0 border-r-0 border-base-300 rounded-none">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl">
                  Can I schedule interviews with multiple employers at the same
                  time?
                </div>
                <div className="collapse-content text-lg opacity-60 pe-32">
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
