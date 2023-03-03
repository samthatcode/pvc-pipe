import React from "react";
import { HashLink } from "react-router-hash-link";
import facebook from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";
import instagram from "../assets/icons/instagram.png";
import linkedin from "../assets/icons/linkedin.png";
import phone from "../assets/icons/phone.png";

const Footer = () => {
  return (
    <div className="grid h-auto w-full content-between bg-primary px-20 py-7 text-whiteText md:grid-cols-2 lg:grid-cols-3 ">
      <div className="grid  place-items-center text-center font-light sm:grid-cols-1">
        <div className=" text-2xl   font-medium">PVC</div>
        <div className="mb-8">
          We are a team of dedicated individuals who understand the importance
          of having a valid voters card. That's why we have made it our mission
          to ensure that everyone has access to their voters card.
        </div>
      </div>

      <div className="mb-8 grid place-items-center text-center font-light sm:grid-cols-1">
        <div className="m-2 text-2xl font-medium">Our links</div>
        <HashLink to="#home" className="hover:text-darkGrey" smooth>
          Home
        </HashLink>
        <HashLink to="#services" className="hover:text-darkGrey" smooth>
          Services
        </HashLink>
        <HashLink to="#about" className="hover:text-darkGrey" smooth>
          Abouts
        </HashLink>
        <HashLink to="#testimonials" className="hover:text-darkGrey" smooth>
          Testimonials
        </HashLink>
        <HashLink to="#contact" className="hover:text-darkGrey" smooth>
          Contact Us
        </HashLink>
      </div>

      <div className="mb-8 grid place-items-center text-center font-light sm:grid-cols-1">
        <div className="m-2 text-2xl font-medium">Contact</div>
        <div className="flex items-center">
          <img src={facebook} className="h-5 w-5" />
          <HashLink to="#" className="hover:text-darkGrey">
            Facebook
          </HashLink>
        </div>

        <div className="flex items-center">
          <img src={twitter} className="h-5 w-5" />
          <HashLink to="#" className="hover:text-darkGrey">
            Twitter
          </HashLink>
        </div>
        <div className="flex items-center">
          <img src={instagram} className="h-5 w-5" />
          <HashLink to="#" className="hover:text-darkGrey">
            Instagram
          </HashLink>
        </div>
        <div className="flex items-center">
          <img src={linkedin} className="h-5 w-5" />
          <HashLink to="#" className="hover:text-darkGrey">
            LinkedIn
          </HashLink>
        </div>
        <div className="flex items-center">
          <img src={phone} className="h-5 w-5" />
          <HashLink to="#" className="hover:text-darkGrey">
            08037509822
          </HashLink>
        </div>
      </div>
      <br />
      <br />
      <div className="mt-5 text-center">All rights reserved &copy; 2023</div>
    </div>
  );
};

export default Footer;
