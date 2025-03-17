import React from "react";

const JoinOurNewsLetter = () => {
  return (
    <div>
      <section className="mx-3 lg:mx-48 xl:mx-48 md:mx-16 pt-5">
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
              <h1 className="text-white JoinournewsletterText text-center">
                Join our newsletter
              </h1>
              <p className="joinournewsletterPeraText text-center pt-2 leading-relaxed">
                Subscribe our newsletter to receive the latest news and <br />
                exclusive offers every week. No spam,
              </p>
              
              <div className="pt-6 w-full joinournewsletterInputDiv">
                <input
                  className="joinournewsletterInput border-4 w-full"
                  type="text"
                  placeholder="Enter your email"
                />
                <button className="joinournewsletterSubscribeButton px-8 lg:px-10 xl:px-10 py-2 rounded-full">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinOurNewsLetter;
