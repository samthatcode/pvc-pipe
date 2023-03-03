import React from "react";

const Newsletter = () => {
  return (
    <>
      <div id="contact" className="h-auto w-full bg-primary px-6 md:px-20 py-6 md:py-10 mt-12 mb-16">
        <div className="flex flex-col md:flex-row justify-center md:justify-between">
          <div className="text-white text-xl md:text-2xl text-center">Subscribe to our Newsletter now</div>
          <div>
            <button className="rounded border w-full md:w-fit border-white py-2 px-2 mt-2 md:mt-0 md:px-10 text-white transition duration-200 hover:scale-90">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
