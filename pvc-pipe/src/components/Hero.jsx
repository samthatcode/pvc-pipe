import React from "react";

const Hero = () => {
  return (
    <div className="bg-hero h-screen bg-cover">
      <div className="flex flex-col justify-center items-center text-white h-full">
        <div className="font-semibold text-4xl">
          {" "}
          <span className="text-secondary">PVC Delivery </span>at the comfort of
          your home
        </div>
        <div className="text-lg max-w-[64ch] text-center">
          Making sure your pvc is delivered and given to you at the comfort of
          your home, your voice must be heard.
        </div>
      </div>
    </div>
    
  );
};

export default Hero;
