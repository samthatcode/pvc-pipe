import React from "react";
import find from "../assets/icons/find.svg";
import request from "../assets/icons/request.svg";
import confirm from "../assets/icons/confirm.svg";

const HowItWorks = () => {
  return (
    <div className="h-auto w-full bg-almostWhite px-6 md:px-20 pt-10 pb-16">
      <div className="py-15 mb-8 text-center text-3xl md:text-4xl font-semibold custom-underline">
        How &nbsp;
        <span className="text-primary decoration-4">it works</span>
      </div>

      <div className="mr-4 grid content-between justify-items-center gap-4 grid-cols-1 md:grid-cols-3">
        <div className="grid place-items-center text-center ">
          <img
            src={find}
            className="mb-1 h-14 w-14 rounded bg-iconFindColor p-3 font-bold"
          />
          <div className="my-4 font-semibold text-greyText text-xl md:text-2xl">Find PVC</div>
          <div className="mb-4 text-lg md:text-xl">
            We Investing in reliability through testing, quality control, and
            maintenance to ensures our customer satisfaction.
          </div>
        </div>
        <div className="grid place-items-center text-center sm:grid-cols-1 ">
          <img
            src={request}
            className="mb-1 h-14 w-14 rounded bg-iconRequestColor p-3 font-bold"
          />
          <div className="my-4 font-semibold text-greyText text-xl md:text-2xl">Request</div>
          <div className="mb-4 text-lg md:text-xl">
            We Investing in reliability through testing, quality control, and
            maintenance to ensures our customer satisfaction.
          </div>
        </div>
        <div className="grid place-items-center text-center sm:grid-cols-1 ">
          <img
            src={confirm}
            className="mb-1 h-14 w-14 rounded bg-iconDeliveryColor p-3 font-bold"
          />
          <div className="my-4 font-semibold text-greyText text-xl md:text-2xl">
            Confirm Delivery
          </div>
          <div className="mb-4 text-lg md:text-xl">
            We Investing in reliability through testing, quality control, and
            maintenance to ensures our customer satisfaction.
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default HowItWorks;
