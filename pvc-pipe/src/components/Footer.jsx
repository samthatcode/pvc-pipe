import React from "react";
import { HashLink } from "react-router-hash-link";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import linkedin from "../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <div className="bg-primary px-6 py-7 md:px-20">
      <div className="flex flex-col justify-between text-white md:flex-row">
        <div className="mx-1 mb-6 flex justify-start md:mb-0 md:justify-center">
          <div className="font-light">
            <div className="mb-4 flex w-full justify-start text-left text-2xl font-medium">
              <div>PVC PIPE</div>
            </div>
            <div className="max-w-[32ch] text-justify md:text-left">
              We are a team of dedicated individuals who understand the
              importance of having a valid voters card. That's why we have made
              it our mission to ensure that everyone has access to their voters
              card.
            </div>
          </div>
        </div>
        <div className="mx-1 mb-2 flex justify-start md:mb-0 md:justify-center">
          <div className="">
            <div className="mb-4 text-2xl font-medium">Quick links</div>
            <div className="flex flex-col text-left transition duration-200">
              <HashLink
                to="#home"
                className="mb-4 hover:font-medium hover:text-secondary"
                smooth
              >
                Home
              </HashLink>
              <HashLink
                to="#services"
                className="mb-4 hover:font-medium hover:text-secondary"
                smooth
              >
                Services
              </HashLink>
              <HashLink
                to="#about"
                className="mb-4 hover:font-medium hover:text-secondary"
                smooth
              >
                About Us
              </HashLink>
              <HashLink
                to="#testimonials"
                className="mb-4 hover:font-medium hover:text-secondary"
                smooth
              >
                Testimonials
              </HashLink>
            </div>
          </div>
        </div>
        <div className="mx-1 flex justify-start md:justify-center">
          <div className="">
            <div className="mb-4 text-2xl font-medium">Contact Us</div>
            <div className="">
              <HashLink
                to="#"
                className="hover:font-medium hover:text-secondary"
              >
                <div className="mb-4 flex items-center">
                  <img src={facebook} className="mr-2 h-5 w-5" />
                  Facebook
                </div>
              </HashLink>
              <HashLink
                to="#"
                className="hover:font-medium hover:text-secondary"
              >
                <div className="mb-4 flex items-center">
                  <img src={twitter} className="mr-2 h-5 w-5" />
                  Twitter
                </div>
              </HashLink>
              <HashLink
                to="#"
                className="hover:font-medium hover:text-secondary"
              >
                <div className="mb-4 flex items-center">
                  <img src={instagram} className="mr-2 h-5 w-5" />
                  Instagram
                </div>
              </HashLink>
              <HashLink
                to="#"
                className="hover:font-medium hover:text-secondary"
              >
                <div className="mb-4 flex items-center">
                  <img src={linkedin} className="mr-2 h-5 w-5" />
                  LinkedIn
                </div>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mt-2 text-center text-white">
          All rights reserved &copy; 2023
        </div>
      </div>
    </div>
  );
};

export default Footer;
