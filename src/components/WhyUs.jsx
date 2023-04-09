import React from "react";
import { whyUsData } from "../data";

const WhyUs = () => {
  return (
    <div>
      <div className="custom-underline mx-2 my-20 text-center text-3xl font-semibold md:text-4xl">
        Why <span className="text-primary">Choose us?</span>
      </div>
      <div className="mx-6 grid grid-cols-1 gap-8 sm:mx-10 md:mx-20 md:grid-cols-2">
        {whyUsData.map((why, index) => (
          <div
            key={index}
            className={`grid grid-cols-12 rounded-lg p-4 text-center shadow md:text-left`}
            style={{ backgroundColor: why.bg }}
          >
            <div className="col-span-12 m-2 mx-auto md:col-span-3 md:m-5">
              <img src={why.icon} alt="Reliable" />
            </div>
            <div className="col-span-12 my-6 px-2 md:col-span-9 md:px-0">
              <div className="mb-4 text-[1.375rem] font-semibold">
                {why.title}
              </div>
              <div className="flex w-full justify-center md:justify-start">
                <div className="max-w-[35ch] text-center md:text-left">
                  {why.body}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
