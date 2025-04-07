import React from "react";

const PrivacyPage = () => {
  return (
    <div className="mx-48 py-24">
      <div className="">
        <h1 className="text-2xl font-semibold">Privacy Policy</h1>
        <div className="mt-4 opacity-80 text-md lg:text-lg xl:text-lg space-y-3">
          <p className="text-justify leading-loose">
            {" "}
            WaTheta is the Signature Product of AdTheta{" "}
          </p>
          <p className="text-justify leading-loose">
            Trade Licence Number (Bangladesh Government):{" "}
            <span className="text-black font-semibold">
              TRAD/DNCC/145380/2022
            </span>
          </p>
          <p className="text-justify leading-loose">
            VAT Registration Certificate (Bangladesh Government):{" "}
            <span className="text-black font-semibold">
              BIN: 005690707-0401
            </span>
          </p>
          <p className="text-justify leading-loose">
            Certificate of Incorporation (England & Wales):{" "}
            <span className="text-black font-semibold">
              Company Number: 15263726
            </span>
          </p>
          <p className="text-justify leading-loose">
            Bangladesh Register Address: House- 13, 2nd Floor, Road- 01 Sector-
            01, Block- k, Aftabnagar, Dhaka- 1214
          </p>
          <p className="text-justify leading-loose">
            United Kingdom Register Address: 71-75 Shelton Street, Covent Garden
            London, WC2H 9JQ, UK
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
