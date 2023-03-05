import React from "react";
import person1 from "../assets/images/person1.jpg";

import { Navbar, Footer } from "../components";

const DeliveryInProgress = () => {
  return (
    <>
      <Navbar />

      <div className="h-56 w-auto bg-lightYellow pt-20 ">
        <img
          src={person1}
          alt="Person"
          className="ml-20 mt-14 h-40 w-40 rounded-full border-4  border-green-500 "
        />
      </div>

      <div className="bg-inherit">
        <div className="ml-72 mb-10 font-poppins font-semibold">
          <div className="mb-4 mt-4 text-2xl text-[#10442F]">
            Delivery in Progress
          </div>
          <div className="text-[#01301D]">
            VIN no: <span className=" text-primary">1239087444</span>
          </div>
        </div>

        {/* Input feild */}

        <div className="container mx-auto">
          <div className=" m-7 grid grid-cols-1 gap-4 md:grid-cols-2  lg:grid-cols-3">
            <label className="">
              <span className=" text-sm font-medium text-slate-700">
                FIRST NAME:
              </span>
              <input
                type="text"
                placeholder="Peace"
                className="mt-1  w-[100%] rounded-md border border-slate-300 bg-textInputColor px-3  py-2 text-sm placeholder-slate-400 shadow-sm outline-none"
              />
            </label>
            <label className="">
              <span className="  text-sm font-medium text-slate-700">
                LAST NAME:
              </span>
              <input
                type="text"
                placeholder="Emmanuel"
                className="mt-1  w-[100%] rounded-md border border-slate-300 bg-textInputColor px-3  py-2 text-sm placeholder-slate-400 shadow-sm outline-none"
              />
            </label>
          </div>
          <div className="m-7 ">
            <label className="">
              <span class=" mr-2 text-sm font-medium text-slate-700">
                PHONE NO:
              </span>
              <br />
              <input
                type="number"
                placeholder="081-55564-466"
                className="mt-1 w-[100%] rounded-md  border border-slate-300 bg-textInputColor px-3 py-2  text-sm placeholder-slate-400 shadow-sm outline-none lg:w-[66%]"
              />
            </label>
          </div>
          <div className="m-7 grid grid-cols-1 gap-4 md:grid-cols-2  lg:grid-cols-3">
            <label className="">
              <span className=" text-sm font-medium text-slate-700">
                STATE:
              </span>
              <input
                type="text"
                placeholder="Lagos State"
                className="mt-1 w-[100%] rounded-md border border-slate-300 bg-textInputColor px-3  py-2 text-sm placeholder-slate-400 shadow-sm outline-none"
              />
            </label>
            <label className="">
              <span className=" text-sm font-medium text-slate-700">
                L.G.A:
              </span>
              <input
                type="text"
                placeholder="Ikorodu"
                className="mt-1  w-[100%] rounded-md border border-slate-300 bg-textInputColor px-3  py-2 text-sm placeholder-slate-400 shadow-sm outline-none"
              />
            </label>
          </div>
          <div>
            {" "}
            <div className="m-7 grid grid-cols-1 gap-4 md:grid-cols-2  lg:grid-cols-3">
              <label className="">
                <span className=" text-sm font-medium text-slate-700">
                  CODE:
                </span>
                <input
                  type="number"
                  placeholder="16-27-02-004"
                  className="mt-1 w-full rounded-md border border-slate-300 bg-textInputColor px-3  py-2 text-sm placeholder-slate-400 shadow-sm outline-none"
                />
              </label>
              <label className="">
                <span className=" text-sm font-medium text-slate-700">
                  DATE OF BIRTH:
                </span>
                <input
                  type="number"
                  placeholder="12-02-1990"
                  className="mt-1 w-[100%]  rounded-md border border-slate-300 bg-textInputColor px-3  py-2 text-sm placeholder-slate-400 shadow-sm outline-none"
                />
              </label>
            </div>
          </div>

          <div className="m-7">
            <label className="">
              <span className=" text-sm font-medium text-slate-700">
                PICK-UP LOCATION:
              </span>
              <br />
              <input
                type="text"
                placeholder="Lagos State"
                className="mt-1  w-[100%] rounded-md border border-slate-300 bg-textInputColor px-3 py-2 text-sm placeholder-slate-400  shadow-sm outline-none lg:w-[66%]"
              />
            </label>
          </div>
          <div className="m-7 pt-10">
            <button className="w-full rounded border bg-primary p-3 text-center text-white transition duration-200 hover:scale-95 lg:w-[66%]">
              Track Delivery
            </button>
            <p className="text-sm">Click to track delivery progress</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DeliveryInProgress;
