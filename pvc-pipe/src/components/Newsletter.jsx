import React from "react";

const Newsletter = () => {
  return (
    <>
      <div
        id="contact"
        className="mt-12 mb-16 h-auto w-full bg-primary px-6 py-6 md:px-20 md:py-10"
      >
        <div className="flex flex-col justify-center md:flex-row md:justify-between">
          <div className="text-center text-xl text-white md:text-2xl">
            Subscribe to our Newsletter now
          </div>
          <div>
            <button className="mt-2 w-full rounded border border-white py-2 px-2 text-white transition duration-200 hover:scale-90 md:mt-0 md:w-fit md:px-10">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
