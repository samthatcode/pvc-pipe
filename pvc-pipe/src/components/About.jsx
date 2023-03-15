import React from "react";

const About = () => {
  return (
    <div className="grid min-h-[80vh] grid-cols-12">
      <div className="order-2 col-span-12 h-[30rem] bg-about bg-cover md:order-1 md:col-span-5 md:h-auto"></div>
      <div
        id="about"
        className="order-1 col-span-12 bg-darkGrey pt-10 pb-14 text-white md:order-2 md:col-span-7"
      >
        <div className="custom-underline my-14 text-center text-3xl font-semibold">
          Provide information about{" "}
          <span className="text-primary">our organisation</span>
        </div>
        <div className="mx-auto mb-14 flex w-[90%] items-center justify-center md:w-full">
          <div className="w-[90%] max-w-[53ch] text-center text-lg">
            At PVC pipe, we are committed to ensuring timely and efficient
            delivery of voter's card to every eligible voter, and our team
            strives to make the voting process smooth for all citizens. team is
            dedicated to making the voting process as smooth as possible for all
            citizens.
          </div>
        </div>
        <div className="flex justify-center">
          <button className="rounded-md bg-primary py-4 px-14 text-lg font-semibold transition duration-200 hover:scale-90">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
