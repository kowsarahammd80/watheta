"use client";

import React, { useState } from "react";

const HelpPage = () => {
  const [docButton, setDocButton] = useState("crm");

  return (
    <div>
      {/* hero */}
      <div className="helpBgDiv">
        <div className="flex justify-center items-center helpContentDiv">
          <h1 className="text-3xl lg:text-6xl xl:text-6xl font-semibold">
            User Documentation
          </h1>
        </div>
      </div>

      {/* button section */}
      <section className="mx-5 lg:mx-40 xl:mx-40">
        <div className="text-center text-3xl lg:text-4xl xl:text-4xl font-semibold pt-10">
          Features Documentation
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-5 py-8">
            <button
              onClick={() => setDocButton("crm")}
              className={` ${
                docButton === "crm" &&
                "border px-3 lg:px-6 xl:px-6 py-1 lg:py-2 xl:py-2 rounded-lg bg-gradient-to-r from-green-300 to-green-500 text-white shadow-md"
              } border px-3 lg:px-6 xl:px-6 py-1 lg:py-2 xl:py-2 rounded-lg text-sm`}
            >
              CRM
            </button>
            <button
              onClick={() => setDocButton("ecommerce")}
              className={` ${
                docButton === "ecommerce" &&
                "border px-3 lg:px-6 xl:px-6 py-1 lg:py-2 xl:py-2 rounded-lg bg-gradient-to-r from-green-300 to-green-500 text-white shadow-md"
              } border px-3 lg:px-6 xl:px-6 py-1 lg:py-2 xl:py-2 rounded-lg text-sm`}
            >
              Ecommerce
            </button>
            <button
              onClick={() => setDocButton("bots")}
              className={` ${
                docButton === "bots" &&
                "border px-3 lg:px-6 xl:px-6 py-1 lg:py-2 xl:py-2 rounded-lg bg-gradient-to-r from-green-300 to-green-500 text-white shadow-md"
              } border px-3 lg:px-6 xl:px-6 py-1 lg:py-2 xl:py-2 rounded-lg text-sm`}
            >
              Bots & Automation
            </button>
            <button
              onClick={() => setDocButton("support")}
              className={` ${
                docButton === "support" &&
                "border px-3 lg:px-6 xl:px-6 py-1 lg:py-2 xl:py-2 rounded-lg bg-gradient-to-r from-green-300 to-green-500 text-white shadow-md"
              } border px-3 lg:px-6 xl:px-6 py-1 lg:py-2 xl:py-2 rounded-lg text-sm`}
            >
              Support
            </button>
            <button
              onClick={() => setDocButton("technical")}
              className={` ${
                docButton === "technical" &&
                "border px-3 lg:px-6 xl:px-6 py-1 lg:py-2 xl:py-2 rounded-lg bg-gradient-to-r from-green-300 to-green-500 text-white shadow-md"
              } border px-3 lg:px-6 xl:px-6 py-1 lg:py-2 xl:py-2 rounded-lg text-sm`}
            >
              Technical Limits
            </button>
          </div>
        </div>

        {/* crm */}
        {docButton === "crm" && (
          <div className="ms-0 lg:ms-20 xl:ms-20">
            <p className="text-2xl font-semibold py-4">CRM Features</p>
            <div className="mb-5">
              <p className="font-normal text-xl py-4">
                {" "}
                <span className="font-semibold">
                  1.WhatsApp API Channel: <br />{" "}
                </span>{" "}
                Connect to WhatsApp Business API for seamless communication with
                customers.{" "}
              </p>
              <p className="font-normal text-xl py-4">
                {" "}
                <span className="font-semibold">
                  2.Contacts in CRM: <br />{" "}
                </span>{" "}
                Store and manage customer data in one place for easy access and
                organization.
              </p>
              <p className="font-normal text-xl py-4">
                {" "}
                <span className="font-semibold">
                  3.Team Members: <br />{" "}
                </span>{" "}
                Add and collaborate with team members to enhance customer
                support and communication.
              </p>
              <p className="font-normal text-xl py-4">
                {" "}
                <span className="font-semibold">
                  4.WhatsApp Conversations Markup: <br />{" "}
                </span>{" "}
                Enjoy WhatsApp conversations at Meta’s actual rates, without
                additional markup.
              </p>
            </div>
          </div>
        )}

        {/* Ecommerce */}
        {docButton === "ecommerce" && (
          <div className="ms-0 lg:ms-20 xl:ms-20">
            <p className="text-2xl font-semibold py-4">Ecommerce Features</p>
            <div className="mb-5">
              <p className="font-normal text-xl py-4">
                {" "}
                <span className="font-semibold">
                  1.WhatsApp Commerce Store: <br />{" "}
                </span>{" "}
                Set up a fully integrated e-commerce store within WhatsApp for
                easy transactions.
              </p>
              <p className="font-normal text-xl py-4">
                {" "}
                <span className="font-semibold">
                  2.Products Limit: <br />{" "}
                </span>{" "}
                Manage up to the specified number of products in your WhatsApp
                commerce store.
              </p>
              <p className="font-normal text-xl py-4">
                {" "}
                <span className="font-semibold">
                  3.Orders Limit:
                  <br />{" "}
                </span>{" "}
                Handle a set number of orders in the system each month for
                efficient tracking.
              </p>
              <p className="font-normal text-xl py-4">
                {" "}
                <span className="font-semibold">
                  4.Abandoned Carts:
                  <br />{" "}
                </span>{" "}
                Retrieve and follow up with customers who leave items in their
                carts without completing the purchase.
              </p>
            </div>
          </div>
        )}

        {/* Bots & Automation: */}
        {docButton === "bots" && (
          <div className="ms-0 lg:ms-20 xl:ms-20">
            <p className="text-2xl font-semibold py-4">Bots & Automation</p>
            <div className="mb-5">
              <p className="font-normal text-xl py-4">
                {" "}
                <span className="font-semibold">
                  1.Bot Building Blocks:
                  <br />{" "}
                </span>{" "}
                Create custom automation workflows using intuitive building
                blocks to enhance user engagement.
              </p>
              <p className="font-normal text-xl py-4">
                {" "}
                <span className="font-semibold">
                  2.Bot/Automation Triggers:
                  <br />{" "}
                </span>{" "}
                Set triggers that automatically activate actions in your
                automation processes.
              </p>
              <p className="font-normal text-xl py-4">
                {" "}
                <span className="font-semibold">
                  3.External Actions: <br />{" "}
                </span>{" "}
                Automate external actions like sending emails or updating
                databases to enhance customer interaction.
              </p>
            </div>
          </div>
        )}

        {/* Support: */}

        {docButton === "support" && (
          <div className="ms-0 lg:ms-20 xl:ms-20">
            <p className="text-2xl font-semibold py-4">Support</p>
            <div className="mb-5">
              <p className="font-normal text-xl py-4">
                {" "}
                <span className="font-semibold">
                  1.Support:
                  <br />{" "}
                </span>{" "}
                Guaranteed response and resolution times for WhatsApp API and
                CRM-related issues.
              </p>
              <p className="font-normal text-xl py-4">
                {" "}
                <span className="font-semibold">
                  2.Bot/Automation Support:
                  <br />{" "}
                </span>{" "}
                Access support for troubleshooting or improving your bots and
                automation workflows.
              </p>
            </div>
          </div>
        )}

        {/* Technical Limits: */}
        {docButton === "technical" && (
          <div className="ms-0 lg:ms-20 xl:ms-20">
            <p className="text-2xl font-semibold py-4">Technical Limits:</p>
            <div className="mb-5">
              <p className="font-normal text-xl py-4">
                {" "}
                <span className="font-semibold">
                  1.Messages/Second:
                  <br />{" "}
                </span>{" "}
                The limit on the number of messages that can be sent per second,
                ensuring system stability.
              </p>
              <p className="font-normal text-xl py-4">
                {" "}
                <span className="font-semibold">
                  2.Monthly FUP Limit:
                  <br />{" "}
                </span>{" "}
                The Fair Usage Policy limit for monthly usage, helping to manage
                resources effectively.
              </p>
            </div>
          </div>
        )}

        {/* <div className="ms-20">
          <p className="text-2xl font-semibold py-4">Support</p>
          <div className="mb-5">
            <p className="font-normal text-xl py-4">
              {" "}
              <span className="font-semibold">
                1.Support:
                <br />{" "}
              </span>{" "}
              Guaranteed response and resolution times for WhatsApp API and
              CRM-related issues.
            </p>
            <p className="font-normal text-xl py-4">
              {" "}
              <span className="font-semibold">
                2.Bot/Automation Support:
                <br />{" "}
              </span>{" "}
              Access support for troubleshooting or improving your bots and
              automation workflows.
            </p>
          </div>
        </div>

       
        <div className="ms-20">
          <p className="text-2xl font-semibold py-4">Technical Limits:</p>
          <div className="mb-5">
            <p className="font-normal text-xl py-4">
              {" "}
              <span className="font-semibold">
                1.Messages/Second:
                <br />{" "}
              </span>{" "}
              The limit on the number of messages that can be sent per second,
              ensuring system stability.
            </p>
            <p className="font-normal text-xl py-4">
              {" "}
              <span className="font-semibold">
                2.Monthly FUP Limit:
                <br />{" "}
              </span>{" "}
              The Fair Usage Policy limit for monthly usage, helping to manage
              resources effectively.
            </p>
          </div>
        </div> */}
      </section>

      {/*  */}
      <section className="mx-3 lg:mx-48 xl:mx-48 md:mx-16 pt-16 pb-16">
        <div className="joinOurNewsletterbgImgDiv">
          <img
            className="joinOurNewsletterbgImg hidden lg:block xl:block"
            src="/images/Group 1000002862.png"
            alt=""
          />
          <img
            className="joinOurNewsletterbgImg block lg:hidden xl:hidden"
            src="/images/PhoneBgnewsletter.png"
            alt=""
          />
          <div className="joinOurNewsletterContentDiv flex justify-center items-center">
            <div className="">
              <div className="flex justify-center">
                <h1 className="text-white transformYourBusinessText text-center">
                  Ready to Transform Your Business?
                </h1>
              </div>
              <p className="text-md lg:text-lg xl:text-lg text-white text-center pt-2 lg:pt-4 xl:pt-4 leading-relaxed mx-5 lg:mx-0 xl:mx-0">
                Join 23,000+ businesses already growing with our platform
              </p>
              <div className="py-4">
                <button className="flex justify-center items-center readyToButton">
                  Get Started Now{" "}
                  <span className="ms-2 lg:ms-3 xl:ms-3">
                    <img src="/images/white1000002679.png" alt="" />
                  </span>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpPage;
