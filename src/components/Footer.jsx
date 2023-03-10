import React from "react";
import { HashLink } from "react-router-hash-link";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import linkedin from "../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <div className="bg-primary px-6 md:px-20 py-7">
      <div className="flex flex-col justify-between md:flex-row text-white">
        <div className="flex justify-start md:justify-center mx-1 mb-6 md:mb-0">
          <div className="font-light">
            <div className="text-2xl justify-start flex w-full mb-4 font-medium text-left">
              <div>PVC PIPE</div>
            </div>
            <div className="max-w-[32ch] text-justify md:text-left">
              We are a team of dedicated individuals who understand the importance
              of having a valid voters card. That's why we have made it our mission
              to ensure that everyone has access to their voters card.
            </div>
          </div>
        </div>
        <div className="flex justify-start md:justify-center mx-1 mb-2 md:mb-0">
          <div className="">
            <div className="mb-4 text-2xl font-medium">Quick links</div>
            <div className="flex flex-col text-left transition duration-200">
              <HashLink to="#home" className="hover:text-secondary hover:font-medium mb-4" smooth>
                Home
              </HashLink>
              <HashLink to="#services" className="hover:text-secondary hover:font-medium mb-4" smooth>
                Services
              </HashLink>
              <HashLink to="#about" className="hover:text-secondary hover:font-medium mb-4" smooth>
                About Us
              </HashLink>
              <HashLink to="#testimonials" className="hover:text-secondary hover:font-medium mb-4" smooth>
                Testimonials
              </HashLink>
            </div>
          </div>
        </div>
        <div className="flex justify-start md:justify-center mx-1">
          <div className="">
            <div className="mb-4 text-2xl font-medium">Contact Us</div>
            <div className="">
              <HashLink to="#" className="hover:text-secondary hover:font-medium">
                <div className="flex items-center mb-4">
                  <img src={facebook} className="h-5 w-5 mr-2" />
                  Facebook
                </div>
              </HashLink>
              <HashLink to="#" className="hover:text-secondary hover:font-medium">
                <div className="flex items-center mb-4">
                  <img src={twitter} className="h-5 w-5 mr-2" />
                  Twitter
                </div>
              </HashLink>
              <HashLink to="#" className="hover:text-secondary hover:font-medium">
                <div className="flex items-center mb-4">
                  <img src={instagram} className="h-5 w-5 mr-2" />
                  Instagram
                </div>
              </HashLink>
              <HashLink to="#" className="hover:text-secondary hover:font-medium">
                <div className="flex items-center mb-4">
                  <img src={linkedin} className="h-5 w-5 mr-2" />
                  LinkedIn
                </div>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mt-2 text-center text-white">All rights reserved &copy; 2023</div>
      </div>
    </div>
  );
};

export default Footer;
