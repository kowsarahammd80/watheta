"use client";

import HomeFAQ from "@/components/HomeFAQ";
import JoinOurNewsLetter from "@/components/JoinOurNewsLetter";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Integrations = () => {
  
    useEffect(() => {
      AOS.init({
        duration: 800,
        once: false,
      });
    }, []);

  const [categoryButton, setCategoryButton] = useState("integrations");

  return (
    <div>
      {/* hero */}
      <section className="pt-16 lg:pt-20 xl:pt-20 md:pt-20">
        <div className="integrateHeroBg">
          <div  className="flex justify-center items-center h-full">
            <div className="">
              {/* integetbutton */}
              <div data-aos="fade-down" className="text-center mb-5">
                <button data-aos="fade-down-right" className="bg-white px-6 lg:px-8 xl:px-8 py-2 rounded-full border inregrationPageButton cardHover">
                  Integrations
                </button>
              </div>
              <p className="integrationsPageHeadLine">
                Integrate with your existing tech stack in seconds
              </p>
              <div  className="flex justify-center pt-5">
                <div className="integetSearchInputDiv">
                  <input
                    className="integetSearchInput bg-white rounded-lg ps-14"
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
      <section className="mx-5 lg:mx-48 xl:mx-48 md:mx-16 py-16">
        <div className="flex flex-col lg:flex-row xl:flex-row justify-between">
          <div>
            <h1 className="integetCategoryText">Categories</h1>
          </div>
          <div className="space-x-1 space-y-2">
            <button
              onClick={() => setCategoryButton("integrations")}
              className={`border px-3 lg:px-4 xl:px-4 py-3 lg:py-3 xl:py-3 rounded-full ${
                categoryButton === "integrations"
                  ? "categoryButtonBgActive"
                  : "categoryButtonBg"
              }`}
            >
              All Integrations
            </button>
            <button
              onClick={() => setCategoryButton("erp")}
              className={`border px-4 lg:px-4 xl:px-4 py-3 lg:py-3 xl:py-3 rounded-full ${
                categoryButton === "erp"
                  ? "categoryButtonBgActive"
                  : "categoryButtonBg"
              }`}
            >
              ERP
            </button>
            <button
              onClick={() => setCategoryButton("crm")}
              className={`border px-4 lg:px-4 xl:px-4 py-3 lg:py-3 xl:py-3 rounded-full ${
                categoryButton === "crm"
                  ? "categoryButtonBgActive"
                  : "categoryButtonBg"
              }`}
            >
              CRM
            </button>
            <button
              onClick={() => setCategoryButton("hris")}
              className={`border px-4 lg:px-4 xl:px-4 py-3 lg:py-3 xl:py-3 rounded-full ${
                categoryButton === "hris"
                  ? "categoryButtonBgActive"
                  : "categoryButtonBg"
              }`}
            >
              HRIS
            </button>
            <button
              onClick={() => setCategoryButton("billing")}
              className={`border px-2 lg:px-4 xl:px-4 py-3 lg:py-3 xl:py-3 rounded-full ${
                categoryButton === "billing"
                  ? "categoryButtonBgActive"
                  : "categoryButtonBg"
              }`}
            >
              BILLING
            </button>
            <button
              onClick={() => setCategoryButton("warehous")}
              className={`border px-2 lg:px-4 xl:px-4 py-3 lg:py-3 xl:py-3 rounded-full ${
                categoryButton === "warehous"
                  ? "categoryButtonBgActive"
                  : "categoryButtonBg"
              }`}
            >
              DATA WAREHOUS
            </button>
          </div>
          <div className="items-center flex lg:flex-none xl:flex-none md:flex-none justify-center pt-4">
            <button className="border border-black px-3 py-2 rounded-full flex items-center">
              <p className="text-xl pe-2">+</p> <p>See More</p>
            </button>
          </div>
        </div>
        
        <section className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 pt-10 gap-x-8 lg:gap-y-10 xl:gap-y-10 gap-y-5">
         
          <div className="card bg-white w-full border HomeFeturescardShadow">
            <div className="card-body">
             
              <div className="intreInconDiv">
                <img
                  className="intreIncon"
                  src="/images/imageIconIn 154.png"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold pt-2 lg:pt-5 xl:pt-5">Klaviyo</h1>
              <p className="interCategoryPera py-1 lg:py-2 xl:py-2">
                Integrate your reviews with Klaviyo Email & SMS marketing that
                helps you own your revenue.
              </p>
              <div>
                <button className="interCategoryLearnButton">Lear More</button>
              </div>
            </div>
          </div>
          
          <div className="card bg-white w-full border HomeFeturescardShadow">
            <div className="card-body">
              
              <div className="intreInconDiv">
                <img
                  className="intreIncon"
                  src="/images/imageIconIn 155.png"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold pt-2 lg:pt-5 xl:pt-5">Stripe</h1>
              <p className="interCategoryPera pt-2 lg:pt-5 xl:pt-5">
                Integrate your reviews with Klaviyo Email & SMS marketing that
                helps you own your revenue.
              </p>
              <div>
                <button className="interCategoryLearnButton">Lear More</button>
              </div>
            </div>
          </div>
          
          <div className="card bg-white w-full border HomeFeturescardShadow">
            <div className="card-body">
              
              <div className="intreInconDiv">
                <img
                  className="intreIncon"
                  src="/images/imageIconIn 156.png"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold pt-2 lg:pt-5 xl:pt-5">Shopify</h1>
              <p className="interCategoryPera py-1 lg:py-2 xl:py-2">
                Integrate your reviews with Klaviyo Email & SMS marketing that
                helps you own your revenue.
              </p>
              <div>
                <button className="interCategoryLearnButton">Lear More</button>
              </div>
            </div>
          </div>
          
          <div className="card bg-white w-full border HomeFeturescardShadow">
            <div className="card-body">
              
              <div className="intreInconDiv">
                <img
                  className="intreIncon"
                  src="/images/imageIconIn 154.png"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold pt-2 lg:pt-5 xl:pt-5">Shopify</h1>
              <p className="interCategoryPera py-1 lg:py-2 xl:py-2">
                Integrate your reviews with Klaviyo Email & SMS marketing that
                helps you own your revenue.
              </p>
              <div>
                <button className="interCategoryLearnButton">Lear More</button>
              </div>
            </div>
          </div>
          
          <div className="card bg-white w-full border HomeFeturescardShadow">
            <div className="card-body">
              
              <div className="intreInconDiv">
                <img
                  className="intreIncon"
                  src="/images/imageIconIn 154.png"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold pt-2 lg:pt-5 xl:pt-5">Klaviyo</h1>
              <p className="interCategoryPera py-1 lg:py-2 xl:py-2">
                Integrate your reviews with Klaviyo Email & SMS marketing that
                helps you own your revenue.
              </p>
              <div>
                <button className="interCategoryLearnButton">Lear More</button>
              </div>
            </div>
          </div>
          
          <div className="card bg-white w-full border HomeFeturescardShadow">
            <div className="card-body">
              
              <div className="intreInconDiv">
                <img
                  className="intreIncon"
                  src="/images/imageIconIn 155.png"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold pt-2 lg:pt-5 xl:pt-5">Stripe</h1>
              <p className="interCategoryPera py-1 lg:py-2 xl:py-2">
                Integrate your reviews with Klaviyo Email & SMS marketing that
                helps you own your revenue.
              </p>
              <div>
                <button className="interCategoryLearnButton">Lear More</button>
              </div>
            </div>
          </div>
          
          <div className="card bg-white w-full border HomeFeturescardShadow">
            <div className="card-body">
              
              <div className="intreInconDiv">
                <img
                  className="intreIncon"
                  src="/images/imageIconIn 156.png"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold pt-2 lg:pt-5 xl:pt-5">Shopify</h1>
              <p className="interCategoryPera py-1 lg:py-2 xl:py-2">
                Integrate your reviews with Klaviyo Email & SMS marketing that
                helps you own your revenue.
              </p>
              <div>
                <button className="interCategoryLearnButton">Lear More</button>
              </div>
            </div>
          </div>
          
          <div className="card bg-white w-full border HomeFeturescardShadow">
            <div className="card-body">
              
              <div className="intreInconDiv">
                <img
                  className="intreIncon"
                  src="/images/imageIconIn 154.png"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold pt-2 lg:pt-5 xl:pt-5">Shopify</h1>
              <p className="interCategoryPera py-1 lg:py-2 xl:py-2">
                Integrate your reviews with Klaviyo Email & SMS marketing that
                helps you own your revenue.
              </p>
              <div>
                <button className="interCategoryLearnButton">Lear More</button>
              </div>
            </div>
          </div>
         
          <div className="card bg-white w-full border HomeFeturescardShadow">
            <div className="card-body">
             
              <div className="intreInconDiv">
                <img
                  className="intreIncon"
                  src="/images/imageIconIn 154.png"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold pt-2 lg:pt-5 xl:pt-5">Klaviyo</h1>
              <p className="interCategoryPera py-1 lg:py-2 xl:py-2">
                Integrate your reviews with Klaviyo Email & SMS marketing that
                helps you own your revenue.
              </p>
              <div>
                <button className="interCategoryLearnButton">Lear More</button>
              </div>
            </div>
          </div>
          
          <div className="card bg-white w-full border HomeFeturescardShadow">
            <div className="card-body">
              
              <div className="intreInconDiv">
                <img
                  className="intreIncon"
                  src="/images/imageIconIn 155.png"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold pt-2 lg:pt-5 xl:pt-5">Stripe</h1>
              <p className="interCategoryPera py-1 lg:py-2 xl:py-2">
                Integrate your reviews with Klaviyo Email & SMS marketing that
                helps you own your revenue.
              </p>
              <div>
                <button className="interCategoryLearnButton">Lear More</button>
              </div>
            </div>
          </div>
         
          <div className="card bg-white w-full border HomeFeturescardShadow">
            <div className="card-body">
              
              <div className="intreInconDiv">
                <img
                  className="intreIncon"
                  src="/images/imageIconIn 156.png"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold pt-2 lg:pt-5 xl:pt-5">Shopify</h1>
              <p className="interCategoryPera py-1 lg:py-2 xl:py-2">
                Integrate your reviews with Klaviyo Email & SMS marketing that
                helps you own your revenue.
              </p>
              <div>
                <button className="interCategoryLearnButton">Lear More</button>
              </div>
            </div>
          </div>
          
          <div  className="card bg-white w-full border HomeFeturescardShadow">
            <div className="card-body">
              
              <div className="intreInconDiv">
                <img
                  className="intreIncon"
                  src="/images/imageIconIn 154.png"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold pt-2 lg:pt-5 xl:pt-5">Shopify</h1>
              <p className="interCategoryPera py-1 lg:py-2 xl:py-2">
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
      <JoinOurNewsLetter/>
      <HomeFAQ />
    </div>
  );
};

export default Integrations;
