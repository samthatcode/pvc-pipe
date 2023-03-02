import React from "react";

const Hero = () => {
  return (
    <div className="bg-hero h-screen bg-cover" id="home">
      <div className="flex flex-col justify-center items-center text-white h-full pt-16">
        <div className="font-semibold text-4xl text-center w-[90%] mb-8">
          {" "}
          <span className="text-secondary">PVC Delivery </span>at the comfort of
          your home
        </div>
        <div className="text-lg max-w-[64ch] text-center w-[90%] mb-8 md:mb-16">
          Making sure your pvc is delivered and given to you at the comfort of
          your home, your voice must be heard.
        </div>
        <div className="flex flex-col md:flex-row w-full justify-center items-center">
          <div className="w-[90%] max-w-[644px] mb-4 md:mb-0">
            <input type='text' placeholder="Input your VIN" className="outline-none text-gray-700 py-4 px-6 md:px-14 mt-0.5 rounded-md w-full md:w-[95%] max-w-[644px]" />
          </div>
          <div>
            <button className='bg-primary py-4 px-11 hover:scale-90 transition duration-200 rounded-md font-semibold text-lg'>Find PVC</button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Hero;
