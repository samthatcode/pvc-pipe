import React from "react";
import test1 from "./../assets/images/testimonial1.png";
import arrow from "./../assets/icons/arrow.svg";

const Testimonials = () => {
  return (
    <div className="pt-20" id="testimonials">
      <div className="custom-underline mx-1 mt-4 mb-20 text-center text-3xl font-semibold md:text-4xl">
        Our <span className="text-primary">Testimonials</span>
      </div>
      <div className="relative mx-8 grid grid-cols-1 gap-8 md:mx-28 md:grid-cols-2">
        <div className="absolute top-1/2 -left-6 rotate-180 cursor-pointer hover:scale-90 active:scale-100">
          <img src={arrow} alt="Next" />
        </div>
        <div className="absolute top-1/2 -right-6 cursor-pointer hover:scale-90 active:scale-100">
          <img src={arrow} alt="Next" />
        </div>
        <div>
          <img src={test1} alt="Testimonial" />
        </div>
        <div>
          <div className="text-lg">
            I ordered my mum’s PVC and mine and within 48 hours it got to us. so
            glad i did not have to wait in that long queue at ikeja.
            <br /> Thank you PVC PIPE.
          </div>
          <div>
            <div className="text-[1.25rem] font-medium">Loretta Igwe</div>
            <div className="text-lg">Lagos State</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
