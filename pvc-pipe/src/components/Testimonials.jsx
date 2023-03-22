import React, { useState } from "react";
import test1 from "./../assets/images/testimonial1.png";
import test2 from "./../assets/images/testimonial2.jpg";
import test3 from "./../assets/images/testimonial3.jpg";
import test4 from "./../assets/images/testimonial4.jpg";
import test5 from "./../assets/images/testimonial5.jpg";
import test6 from "./../assets/images/testimonial6.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 right-0 mx-1 -translate-y-1/2 transform rounded-full bg-primary p-2 text-white"
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
        className="absolute top-1/2 left-0 mx-1 -translate-y-1/2 transform rounded-full bg-primary p-2 text-white"
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
        " I ordered my mum’s PVC and mine and within 48 hours it got to us so glad i did not have to wait in that long queue at ikeja, They made life easy and i have already recommended them to my family and friends. They give the best and are excellent in their work. Great job and kudos to the PVC PIPE team..",
      name: "Loretta Igwe",
      state: "Jakande, Lagos State",
    },
    {
      id: 2,
      image: test2,
      content:
        "I've used a lot of delivery services before, but this one was by far the best. The communication was clear and consistent, the delivery was prompt and efficient, and my card arrived in perfect condition. I highly recommend this delivery service to anyone who wants top-notch service!",
      name: "Bukola and Friends",
      state: "Lokoja, Kogi State",
    },
    {
      id: 3,
      image: test3,
      content:
        "I am extremely impressed with the level of service provided by their delivery service. The delivery team were friendly and professional, and my card was delivered quickly and with great care. I will definitely be using this service again and recommending it to my friends and family. Thank you PVC PIPE...",
      name: "Binta Williams",
      state: "Garki, Abuja",
    },
    {
      id: 4,
      image: test4,
      content:
        "I had a last-minute delivery that needed to be made and this service came through for me in a big way. They were able to pick up and deliver my PVC within hours, and it arrived in excellent condition. I am so grateful for their top-notch service and will be using them again in the future. You guys are the bomb!!!",
      name: "Adamu Garba and Family",
      state: "Kaduna State",
    },
    {
      id: 4,
      image: test5,
      content:
        "I have been using this delivery service for a while now and they have never let me down. Their customer service is fantastic, and their drivers are always on time and professional. I appreciate the care and attention they give to my PVC delivery, and I highly recommend them to anyone who needs a reliable and trustworthy service.  Thank you PVC PIPE...",
      name: "Ebimo Daniels",
      state: "Ikoyi, Lagos State",
    },
    {
      id: 4,
      image: test6,
      content:
        "I was hesitant to use a delivery service but to my greatest surprise, but their service exceeded my expectations. They kept me updated throughout the entire delivery process and my card arrived on time and in perfect condition. I was blown away by their level of service and professionalism. I will definitely be using them again in the future.",
      name: "Tade Ogidan and Colleague",
      state: "Ibadan, Oyo State",
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
            <div key={testimonial.id} className="px-2 sm:px-5 md:px-4 ">
              <div className="flex flex-col p-2">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mx-auto rounded-md pb-4 "
                />
                <div className=" pb-1 text-justify text-base font-[300] ">
                  {testimonial.content}
                </div>
                <div className="text-[1.2rem] font-[300] text-primary">
                  {testimonial.name}
                </div>
                <div className=" text-lg font-[400]">{testimonial.state}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
