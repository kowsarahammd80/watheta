"use client";

import React, { useState } from "react";

const HomeFAQ = () => {
  const [faqButton, setFaqButton] = useState("genarel");
  // console.log(faqButton);
  return (
    <div className="py-10 lg:py-20 xl:py-20">
      <section className="mx-5 lg:mx-40 xl:mx-40 md:mx-16">
        {/* head line */}
        <div className="flex justify-center">
          <h1 className="homeFaqHEeadLine text-center">
            {" "}
            Frequently Asked Questions{" "}
          </h1>
        </div>
        {/* faq */}
        <div className="pt-8">
          <div className="">
            {/* button */}
            {/* <div className="">
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
            </div> */}
            {/* faq */}
            <div className="mx-1 lg:mx-48 xl:mx-48 md:mx-16">
              <div className="collapse collapse-arrow border border-t-0 border-l-0 border-r-0 rounded-none w-full py-3 lg:py-4 xl:py-4">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title HomeFaqQustion text-md lg:text-xl xl:text-xl md:text-lg">
                  What is WaTheta and how does it work?
                </div>
                <div className="collapse-content text-sm lg:text-lg xl:text-lg md:text-md opacity-60 pe-6 lg:pe-32 xl:pe-32">
                  WaTheta is a full-stack WhatsApp Business API platform
                  designed to help businesses automate, scale, and manage
                  customer communication. It offers powerful tools like bot
                  builders, CRM, lead management, e-commerce integration,
                  broadcast messaging, appointment scheduling, and more all
                  within WhatsApp. Similar to platforms like AiSensy and
                  Respond.io, WaTheta connects your WhatsApp Business API with a
                  smart dashboard that allows multiple users, automation
                  workflows, analytics, and seamless integrations no technical
                  expertise required.
                </div>
              </div>
              <div className="collapse collapse-arrow border border-t-0 border-l-0 border-r-0 rounded-none py-3 lg:py-4 xl:py-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-md lg:text-xl xl:text-xl md:text-lg">
                  What kind of employers can I find on employin?
                </div>
                <div className="collapse-content text-sm lg:text-lg xl:text-lg md:text-md opacity-60 pe-6 lg:pe-32 xl:pe-32">
                  The standard WhatsApp Business App is meant for individual use
                  and limited messaging. In contrast, WaTheta offers the
                  WhatsApp Business API, which includes: Multi-user team inbox
                  (agents can reply from one number) Verified business messaging
                  No-code chatbot builder Real-time analytics and CRM Unlimited
                  bulk messaging (with Meta-approved templates) Automation
                  flows, reminders, broadcasts, and form handling Seamless
                  integration with tools like Google Sheets, Shopify, Calendly,
                  and more It’s built for businesses that need to scale
                  communication, manage thousands of leads, and automate
                  day-to-day tasks.
                </div>
              </div>
              <div className="collapse collapse-arrow border border-t-0 border-l-0 border-r-0 rounded-none py-3 lg:py-4 xl:py-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-md lg:text-xl xl:text-xl md:text-lg">
                  Do I need any coding knowledge to use WaTheta?
                </div>
                <div className="collapse-content text-sm lg:text-lg xl:text-lg md:text-md opacity-60 pe-6 lg:pe-32 xl:pe-32">
                  Not at all. WaTheta is 100% no-code. You can: Build WhatsApp
                  bots with a visual drag-and-drop interface Create automation
                  workflows for replies, lead routing, and updates Assign leads
                  and track responses — without writing a single line of code
                  Even complex functions like conditional replies, data capture,
                  and funnel automation can be set up with simple clicks.
                </div>
              </div>
              <div className="collapse collapse-arrow border border-t-0 border-l-0 border-r-0 rounded-none py-3 lg:py-4 xl:py-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-md lg:text-xl xl:text-xl md:text-lg">
                  What industries can benefit from WaTheta?
                </div>
                <div className="collapse-content text-sm lg:text-lg xl:text-lg md:text-md opacity-60 pe-6 lg:pe-32 xl:pe-32">
                  WaTheta is ideal for any business that communicates with
                  customers regularly via WhatsApp. Some top industries include:
                  E-commerce & F-commerce: Product catalog, order tracking,
                  payment updates Edtech & Coaching: Admission queries, course
                  reminders, auto onboarding Visa & Travel Agencies: Document
                  handling, appointment booking, lead follow-up Real Estate:
                  Property inquiry forms, client qualification, site visit
                  scheduling Service-based businesses: Appointment reminders,
                  client feedback, drip campaigns Digital Marketing Agencies:
                  Campaign automation, client onboarding, lead sharing
                </div>
              </div>
              <div className="collapse collapse-arrow border border-t-0 border-l-0 border-r-0 rounded-none py-3 lg:py-4 xl:py-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-md lg:text-xl xl:text-xl md:text-lg">
                  Is WaTheta compliant with WhatsApp’s official policies?
                </div>
                <div className="collapse-content text-sm lg:text-lg xl:text-lg md:text-md opacity-60 pe-6 lg:pe-32 xl:pe-32">
                  Yes. WaTheta is built on the official WhatsApp Business API
                  and fully complies with Meta’s policies and data privacy
                  standards. Every feature — from broadcasting to automation —
                  follows the correct usage limits and messaging formats. Your
                  business number is protected and verified through Meta's
                  approval system.
                </div>
              </div>
              <div className="collapse collapse-arrow border border-t-0 border-l-0 border-r-0 rounded-none py-3 lg:py-4 xl:py-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-md lg:text-xl xl:text-xl md:text-lg">
                  What’s included in WaTheta’s CRM & automation features?
                </div>
                <div className="collapse-content text-sm lg:text-lg xl:text-lg md:text-md opacity-60 pe-6 lg:pe-32 xl:pe-32">
                  WaTheta comes with a robust CRM built into the WhatsApp
                  dashboard. You can: View and segment leads using visual boards
                  and status cards Auto-tag users based on entry points (ads,
                  forms, QR codes) Assign leads to team members Track follow-up
                  tasks and performance reports Trigger personalized drip
                  campaigns based on user activity This CRM helps businesses
                  close leads 60% faster and improve response time by up to 5x.
                </div>
              </div>
              <div className="collapse collapse-arrow border border-t-0 border-l-0 border-r-0 rounded-none py-3 lg:py-4 xl:py-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-md lg:text-xl xl:text-xl md:text-lg">
                  Can I send bulk messages and marketing broadcasts?{" "}
                </div>
                <div className="collapse-content text-sm lg:text-lg xl:text-lg md:text-md opacity-60 pe-6 lg:pe-32 xl:pe-32">
                  Yes. WaTheta lets you send WhatsApp-approved broadcast
                  messages to thousands of users using pre-approved templates.
                  Each message can be personalized with names, order details, or
                  custom fields. This is fully compliant with WhatsApp’s
                  policies and far more effective than email or SMS — with 98%
                  open rates and 30–45% click-through rates.
                </div>
              </div>
              <div className="collapse collapse-arrow border border-t-0 border-l-0 border-r-0 rounded-none py-3 lg:py-4 xl:py-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-md lg:text-xl xl:text-xl md:text-lg">
                  How do I track performance and campaign results?{" "}
                </div>
                <div className="collapse-content text-sm lg:text-lg xl:text-lg md:text-md opacity-60 pe-6 lg:pe-32 xl:pe-32">
                  WaTheta provides detailed analytics dashboards for: Campaign
                  engagement: opens, clicks, replies Agent-wise performance
                  tracking CRM funnel data: from inquiry to sale Source
                  tracking: find out whether a lead came from ad, QR, form, or
                  referral You’ll always have a clear view of what’s working and
                  where to improve.
                </div>
              </div>
              <div className="collapse collapse-arrow border border-t-0 border-l-0 border-r-0 rounded-none py-3 lg:py-4 xl:py-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-md lg:text-xl xl:text-xl md:text-lg">
                  Is onboarding and support included?{" "}
                </div>
                <div className="collapse-content text-sm lg:text-lg xl:text-lg md:text-md opacity-60 pe-6 lg:pe-32 xl:pe-32">
                  Yes. WaTheta provides full onboarding support including:
                  Business API setup and Meta verification WhatsApp number
                  activation Bot design and workflow setup Live chat, ticketing,
                  and dedicated account management You get continuous support
                  from our local team to ensure success from day one.
                </div>
              </div>
              <div className="collapse collapse-arrow border border-t-0 border-l-0 border-r-0 rounded-none py-3 lg:py-4 xl:py-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-md lg:text-xl xl:text-xl md:text-lg">
                  Can I integrate WaTheta with my existing tools?{" "}
                </div>
                <div className="collapse-content text-sm lg:text-lg xl:text-lg md:text-md opacity-60 pe-6 lg:pe-32 xl:pe-32">
                  Definitely. WaTheta integrates with: Google Sheets Shopify &
                  WooCommerce Calendly Zapier Webhooks Facebook Ads (for
                  click-to-WhatsApp flows) You can also connect with your
                  existing CRM or ERP via API for seamless data sync.
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
