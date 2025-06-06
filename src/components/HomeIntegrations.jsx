import Link from "next/link";
import React from "react";
// import './HomeIntegrations.css'

const HomeIntegrations = () => {
  return (
    <div className="">
      <div className="intregeteDivBG">
        {/* Integrations */}
        <div data-aos="fade-down-right" className="flex justify-center pt-9 lg:pt-16 xl:pt-16 md:pt-8">
          <span className="bg-white border rounded-full px-4 lg:px-6 xl:px-6 py-1 integrationsText">
            Integrations
          </span>
        </div>
        {/* headline */}
        <div className="flex justify-center">
          <h1 className="intregeteHeadline text-center py-4 lg:py-5 xl:py-5 md:py-3">
            Streamline your workflow with Watheta 40+ integrations
          </h1>
        </div>
        {/* Explore integrations */}
        <div className="flex justify-center">
          <Link href="/integrations">
            <button data-aos="fade-down-left" className="flex items-center">
              <span className="border-b border-gray-500">
                Explore integrations
              </span>
              <span className="ms-3">
                <img src="/images/Group 1000002679.png" alt="" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeIntegrations;
