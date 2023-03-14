import React from "react";
import test1 from "./../assets/images/testimonial1.png";
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
      <div className="text-2xl font-semibold ">
        <ul style={{ margin: "0px", fontSize: "35px" }}> {dots} </ul>
      </div>
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
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
          slidesToShow: 1,
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
            <div key={testimonial.id} className="px-2 sm:px-5 md:px-4">
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
                <div className="mb- text-lg font-[400]">
                  {testimonial.state}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
