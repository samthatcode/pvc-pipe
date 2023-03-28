import React from "react";
import find from "../assets/icons/find.svg";
import request from "../assets/icons/request.svg";
// import confirm from "../assets/icons/confirm.svg";

const HowItWorks = () => {
  return (
    <div className="h-auto w-full bg-almostWhite px-6 pt-10 pb-16 md:px-20">
      <div className="py-15 custom-underline mb-8 text-center text-3xl font-semibold md:text-4xl">
        How &nbsp;
        <span className="text-primary decoration-4">it works</span>
      </div>

      <div className="mr-4 grid grid-cols-1 content-between justify-items-center  gap-4 md:grid-cols-2">
        <div className="grid place-items-center text-center ">
          <img
            src={find}
            className="mb-1 h-14 w-14 rounded bg-iconFindColor p-3 font-bold"
          />
          <div className="my-4 text-xl font-semibold text-greyText md:text-2xl">
            Locate your PVC
          </div>
          <div className="mb-4  md:text-lg ">
            We priortize reliability by conducting tests, implementing quality
            control measures, and performing maintenance to ensure our
            customer's satisfaction.
          </div>
        </div>
        <div className="grid place-items-center text-center sm:grid-cols-1 ">
          <img
            src={request}
            className="mb-1 h-14 w-14 rounded bg-iconRequestColor p-3 font-bold"
          />
          <div className="my-4 text-xl font-semibold text-greyText md:text-2xl">
            Make a Request
          </div>
          <div className="mb-4 md:text-lg">
            To ensure our customer's satisfaction, we invest in reliability by
            conducting testing, implementing quality control, and performing
            maintenance.
          </div>
        </div>
        {/* <div className="grid place-items-center text-center sm:grid-cols-1 ">
          <img
            src={confirm}
            className="mb-1 h-14 w-14 rounded bg-iconDeliveryColor p-3 font-bold"
          />
          <div className="my-4 text-xl font-semibold text-greyText md:text-2xl">
            Confirm the Delivery
          </div>
          <div className="mb-4 md:text-lg">
            To ensure our customer's satisfaction, we invest in reliability by
            conducting testing, implementing quality control, and performing
            maintenance.
          </div>
        </div> */}
      </div>
      
    </div>
  );
};

export default HowItWorks;
