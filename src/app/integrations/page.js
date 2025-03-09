"use client";

import HomeFAQ from "@/components/HomeFAQ";
import React, { useState } from "react";

const Integrations = () => {
    const [categoryButton, setCategoryButton] = useState("integrations")
  return (
    <div>
      {/* hero */}
      <section className="pt-20">
        <div className="integrateHeroBg">
          <div className="flex justify-center items-center h-full">
            <div className="">
              {/* integetbutton */}
              <div className="text-center mb-5">
                <button className="bg-white px-8 py-2 rounded-full border inregrationPageButton">
                  Integrations
                </button>
              </div>
              <p className="integrationsPageHeadLine">
                Integrate with your existing tech stack in seconds
              </p>
              <div className="flex justify-center pt-5">
                <div className="integetSearchInputDiv">
                  <input
                    className="integetSearchInput rounded-lg ps-14"
                    type="text"
                    placeholder="Search for an integration"
                  />
                  <button className="searchIconButton ps-5">
                    <p className="searchInconDiv">
                      <img
                        className="searchIncon"
                        src="/images/searchIcon.png"
                        alt=""
                      />
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* categoris */}
      <section className="mx-48 py-16">
        <div className="flex justify-between">
          <div>
            <h1 className="integetCategoryText">Categories</h1>
          </div>
          <div className="space-x-1">
            <button onClick={() => setCategoryButton("integrations") } className={`border px-4 py-3 rounded-full ${categoryButton === "integrations" ? "categoryButtonBgActive" : "categoryButtonBg"}`}>
              All Integrations
            </button>
            <button onClick={() => setCategoryButton("erp") } className={`border px-4 py-3 rounded-full ${categoryButton === "erp" ? "categoryButtonBgActive" : "categoryButtonBg"}`}>ERP</button>
            <button onClick={() => setCategoryButton("crm") } className={`border px-4 py-3 rounded-full ${categoryButton === "crm" ? "categoryButtonBgActive" : "categoryButtonBg"}`}>CRM</button>
            <button onClick={() => setCategoryButton("hris") } className={`border px-4 py-3 rounded-full ${categoryButton === "hris" ? "categoryButtonBgActive" : "categoryButtonBg"}`}>HRIS</button>
            <button onClick={() => setCategoryButton("billing") } className={`border px-4 py-3 rounded-full ${categoryButton === "billing" ? "categoryButtonBgActive" : "categoryButtonBg"}`}>BILLING</button>
            <button onClick={() => setCategoryButton("warehous") } className={`border px-4 py-3 rounded-full ${categoryButton === "warehous" ? "categoryButtonBgActive" : "categoryButtonBg"}`}>
              DATA WAREHOUS
            </button>
          </div>
          <div className="items-center">
            <button className="border border-black px-3 py-2 rounded-full flex items-center">
              <p className="text-xl pe-2">+</p> <p>See More</p>
            </button>
          </div>
        </div>
        {/* card div */}
        <section className="grid grid-cols-4 pt-10 gap-x-8 gap-y-10">
          {/* card */}
          <div className="card bg-base-100 w-full border HomeFeturescardShadow">
            <div className="card-body">
              {/* icon div */}
              <div className="intreInconDiv">
                <img
                  className="intreIncon"
                  src="/images/imageIconIn 154.png"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold pt-5">Klaviyo</h1>
              <p className="interCategoryPera py-2">
                Integrate your reviews with Klaviyo Email & SMS marketing that
                helps you own your revenue.
              </p>
              <div>
                <button className="interCategoryLearnButton">Lear More</button>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="card bg-base-100 w-full border HomeFeturescardShadow">
            <div className="card-body">
              {/* icon div */}
              <div className="intreInconDiv">
                <img
                  className="intreIncon"
                  src="/images/imageIconIn 155.png"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold pt-5">Stripe</h1>
              <p className="interCategoryPera py-2">
                Integrate your reviews with Klaviyo Email & SMS marketing that
                helps you own your revenue.
              </p>
              <div>
                <button className="interCategoryLearnButton">Lear More</button>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="card bg-base-100 w-full border HomeFeturescardShadow">
            <div className="card-body">
              {/* icon div */}
              <div className="intreInconDiv">
                <img
                  className="intreIncon"
                  src="/images/imageIconIn 156.png"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold pt-5">Shopify</h1>
              <p className="interCategoryPera py-2">
                Integrate your reviews with Klaviyo Email & SMS marketing that
                helps you own your revenue.
              </p>
              <div>
                <button className="interCategoryLearnButton">Lear More</button>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="card bg-base-100 w-full border HomeFeturescardShadow">
            <div className="card-body">
              {/* icon div */}
              <div className="intreInconDiv">
                <img
                  className="intreIncon"
                  src="/images/imageIconIn 154.png"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold pt-5">Shopify</h1>
              <p className="interCategoryPera py-2">
                Integrate your reviews with Klaviyo Email & SMS marketing that
                helps you own your revenue.
              </p>
              <div>
                <button className="interCategoryLearnButton">Lear More</button>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="card bg-base-100 w-full border HomeFeturescardShadow">
            <div className="card-body">
              {/* icon div */}
              <div className="intreInconDiv">
                <img
                  className="intreIncon"
                  src="/images/imageIconIn 154.png"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold pt-5">Klaviyo</h1>
              <p className="interCategoryPera py-2">
                Integrate your reviews with Klaviyo Email & SMS marketing that
                helps you own your revenue.
              </p>
              <div>
                <button className="interCategoryLearnButton">Lear More</button>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="card bg-base-100 w-full border HomeFeturescardShadow">
            <div className="card-body">
              {/* icon div */}
              <div className="intreInconDiv">
                <img
                  className="intreIncon"
                  src="/images/imageIconIn 155.png"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold pt-5">Stripe</h1>
              <p className="interCategoryPera py-2">
                Integrate your reviews with Klaviyo Email & SMS marketing that
                helps you own your revenue.
              </p>
              <div>
                <button className="interCategoryLearnButton">Lear More</button>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="card bg-base-100 w-full border HomeFeturescardShadow">
            <div className="card-body">
              {/* icon div */}
              <div className="intreInconDiv">
                <img
                  className="intreIncon"
                  src="/images/imageIconIn 156.png"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold pt-5">Shopify</h1>
              <p className="interCategoryPera py-2">
                Integrate your reviews with Klaviyo Email & SMS marketing that
                helps you own your revenue.
              </p>
              <div>
                <button className="interCategoryLearnButton">Lear More</button>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="card bg-base-100 w-full border HomeFeturescardShadow">
            <div className="card-body">
              {/* icon div */}
              <div className="intreInconDiv">
                <img
                  className="intreIncon"
                  src="/images/imageIconIn 154.png"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold pt-5">Shopify</h1>
              <p className="interCategoryPera py-2">
                Integrate your reviews with Klaviyo Email & SMS marketing that
                helps you own your revenue.
              </p>
              <div>
                <button className="interCategoryLearnButton">Lear More</button>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="card bg-base-100 w-full border HomeFeturescardShadow">
            <div className="card-body">
              {/* icon div */}
              <div className="intreInconDiv">
                <img
                  className="intreIncon"
                  src="/images/imageIconIn 154.png"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold pt-5">Klaviyo</h1>
              <p className="interCategoryPera py-2">
                Integrate your reviews with Klaviyo Email & SMS marketing that
                helps you own your revenue.
              </p>
              <div>
                <button className="interCategoryLearnButton">Lear More</button>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="card bg-base-100 w-full border HomeFeturescardShadow">
            <div className="card-body">
              {/* icon div */}
              <div className="intreInconDiv">
                <img
                  className="intreIncon"
                  src="/images/imageIconIn 155.png"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold pt-5">Stripe</h1>
              <p className="interCategoryPera py-2">
                Integrate your reviews with Klaviyo Email & SMS marketing that
                helps you own your revenue.
              </p>
              <div>
                <button className="interCategoryLearnButton">Lear More</button>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="card bg-base-100 w-full border HomeFeturescardShadow">
            <div className="card-body">
              {/* icon div */}
              <div className="intreInconDiv">
                <img
                  className="intreIncon"
                  src="/images/imageIconIn 156.png"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold pt-5">Shopify</h1>
              <p className="interCategoryPera py-2">
                Integrate your reviews with Klaviyo Email & SMS marketing that
                helps you own your revenue.
              </p>
              <div>
                <button className="interCategoryLearnButton">Lear More</button>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="card bg-base-100 w-full border HomeFeturescardShadow">
            <div className="card-body">
              {/* icon div */}
              <div className="intreInconDiv">
                <img
                  className="intreIncon"
                  src="/images/imageIconIn 154.png"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold pt-5">Shopify</h1>
              <p className="interCategoryPera py-2">
                Integrate your reviews with Klaviyo Email & SMS marketing that
                helps you own your revenue.
              </p>
              <div>
                <button className="interCategoryLearnButton">Lear More</button>
              </div>
            </div>
          </div>
          
          
        </section>
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

export default Integrations;
