import React, { useState } from "react";
import test1 from "./../assets/images/testimonial1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../index.css'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 right-0 -translate-y-1/2 transform rounded-full bg-primary p-2 text-white"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 left-0 -translate-y-1/2 transform rounded-full bg-primary p-2 text-white"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    );
  };

  const Dot = ({ onClick, active }) => {
    return (
      <div
        className={`mx-2 h-3 w-3 cursor-pointer rounded-full bg-gray-700 ${
          active && "bg-primary"
        }`}
        onClick={onClick}
      ></div>
    );
  };

  const settings = {
    dots: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    infinite: true,
    cssEase: "ease-in-out",
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // appendDots: (dots) => {
    //   return (
    //     <div className="mt-4 !flex !justify-center">
    //       {dots.map((_, index) => {
    //         return (
    //           <Dot
    //             key={index}
    //             active={index === currentSlide}
    //             onClick={() => setCurrentSlide(index)}
                
    //           />
    //         );
    //       })}
    //     </div>
    //   );
      
    // },


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
      <div className="container mx-auto ">
        <Slider
          {...settings}
          afterChange={(index) => setCurrentSlide(index)}
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
                  className="mx-auto  "
                />
                <div className=" text-lg font-medium">
                  {testimonial.content}
                </div>
                <div className="text-[1.25rem] font-medium">
                  {testimonial.name}
                </div>
                <div className="mb-10 text-lg font-[400]">
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
