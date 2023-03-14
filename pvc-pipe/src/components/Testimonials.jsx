import React from "react";
import test1 from "./../assets/images/testimonial1.png";
import arrow from "./../assets/icons/arrow.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    arrows: true,
    infinite: true,
    cssEase: "ease-in-out",
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px", fontSize: "35px" }}> {dots} </ul>
      </div>
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      image: test1,
      content:
        " I ordered my mum’s PVC and mine and within 48 hours it got to us so glad i did not have to wait in that long queue at ikeja, Thank you PVC PIPE..",
      name: "Loretta Igwe",
      state: "Lagos State",
    },
    {
      id: 2,
      image: test1,
      content:
        "I ordered my mum’s PVC and mine and within 48 hours it got to us so glad i did not have to wait in that long queue at ikeja, Thank you PVC PIPE...",
      name: "Loretta Igwe",
      state: "Lagos State",
    },
    {
      id: 3,
      image: test1,
      content:
        "I ordered my mum’s PVC and mine and within 48 hours it got to us so glad i did not have to wait in that long queue at ikeja,  Thank you PVC PIPE...",
      name: "Loretta Igwe",
      state: "Lagos State",
    },
    {
      id: 4,
      image: test1,
      content:
        "I ordered my mum’s PVC and mine and within 48 hours it got to us so glad i did not have to wait in that long queue at ikeja,  Thank you PVC PIPE...",
      name: "Loretta Igwe",
      state: "Lagos State",
    },
    // add more testimonial objects as needed
  ];

  return (
    <div className=" overflow-hidden pt-20" id="testimonials">
      <div className="custom-underline mx-1 mt-4 mb-20 text-center text-3xl font-semibold md:text-4xl">
        Our <span className="text-primary">Testimonials</span>
      </div>
      <div className=" mx-auto ">
        <Slider
          {...settings}
          dots={true}
          autoplay={true}
          autoplaySpeed={2000}
          className=" center-padding"
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4 sm:px-8 md:px-12">
              <div className="flex flex-col ">
                <img
                  src={testimonial.image}
                  alt={testimonial.content}
                  className="mx-auto mb-4 "
                />
                <div className=" text-lg font-medium">
                  {testimonial.content}
                </div>
                <div className="text-[1.25rem] font-medium">
                  {testimonial.name}
                </div>
                <div className="text-lg font-[400] pb-5">{testimonial.state}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* <div className="relative mx-12 grid grid-cols-1 gap-8 md:mx-28 md:grid-cols-2">
        <div className="absolute top-1/2 -left-20 hidden rotate-180 cursor-pointer hover:scale-90 active:scale-100 md:flex">
          <img src={arrow} alt="Prev" />
        </div>
        <div className="absolute top-1/2 -right-20 hidden cursor-pointer hover:scale-90 active:scale-100 md:flex">
          <img src={arrow} alt="Next" />
        </div>
        <div className="-mb-5 md:mb-0">
          <img src={test1} alt="Testimonial" />
        </div>
        <div className="-mt-40  -mb-5 flex justify-between  md:hidden">
          <div className="-ml-11  ">
            <img
              src={arrow}
              alt="Prev"
              className=" rotate-180 cursor-pointer hover:scale-90 active:scale-100 "
            />
          </div>
          <div className="-mr-11  ">
            <img
              src={arrow}
              alt="Next"
              className="  cursor-pointer hover:scale-90 active:scale-100"
            />
          </div>
        </div>

        <div className="-mt-4 md:mt-0">
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
      </div> */}
    </div>
  );
};

export default Testimonials;
