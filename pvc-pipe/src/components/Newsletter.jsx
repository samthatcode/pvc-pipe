import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="h-auto w-full bg-primary px-20 py-10 ">
        <div className="flex justify-between">
          <div className="text-whiteText text-2xl">Subscribe to our Newsletter now</div>

          <button className=" rounded border  border-white py-2 px-2  text-whiteText transition duration-200 hover:scale-90">
            Learn more
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default Newsletter;
