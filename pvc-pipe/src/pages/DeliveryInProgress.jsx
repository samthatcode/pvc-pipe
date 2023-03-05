import React from "react";

import { Navbar, Footer } from "../components";

const DeliveryInProgress = ({ person }) => {
  return (
    <>
      <Navbar />

      <div className="h-56 w-auto bg-lightYellow pt-20 ">
        <img
          src={person?.photo}
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
            VIN no: <span className=" text-primary">{person.vinNo}</span>
          </div>
        </div>

        {/* Input feild */}

        <div className="container mx-auto">
          <div className=" m-7 grid grid-cols-1 gap-4 md:grid-cols-2  lg:grid-cols-3">
            <div className="">
              <label
                for="firstname"
                className=" text-sm font-medium text-slate-700"
              >
                FIRST NAME:
              </label>
              <input
                id="fname"
                type="text"
                value={person.firstName}
                className="mt-1  w-[100%] rounded-md border border-slate-300 bg-textInputColor px-3  py-2 text-sm placeholder-slate-400 shadow-sm outline-none"
              />
            </div>
            <div className="">
              <label
                for="lastname"
                className="text-sm font-medium text-slate-700"
              >
                LAST NAME:
              </label>
              <input
                id="lname"
                type="text"
                value={person.lastName}
                className="mt-1  w-[100%] rounded-md border border-slate-300 bg-textInputColor px-3  py-2 text-sm placeholder-slate-400 shadow-sm outline-none"
              />
            </div>
          </div>
          <div className="m-7 ">
            <div className="">
              <label
                for="phone"
                class=" mr-2 text-sm font-medium text-slate-700"
              >
                PHONE NO:
              </label>
              <br />
              <input
                id="pnumber"
                type="text"
                value={person.phoneNumber}
                className="mt-1 w-[100%] rounded-md  border border-slate-300 bg-textInputColor px-3 py-2  text-sm placeholder-slate-400 shadow-sm outline-none lg:w-[66%]"
              />
            </div>
          </div>
          <div className="m-7 grid grid-cols-1 gap-4 md:grid-cols-2  lg:grid-cols-3">
            <div className="">
              <label
                for="state"
                className=" text-sm font-medium text-slate-700"
              >
                STATE:
              </label>
              <input
                id="state"
                type="text"
                value={person.state}
                className="mt-1 w-[100%] rounded-md border border-slate-300 bg-textInputColor px-3  py-2 text-sm placeholder-slate-400 shadow-sm outline-none"
              />
            </div>
            <div className="">
              <label for="lga" className="text-sm font-medium text-slate-700">
                L.G.A:
              </label>
              <input
                id="lga"
                type="text"
                value={person.lga}
                className="mt-1  w-[100%] rounded-md border border-slate-300 bg-textInputColor px-3  py-2 text-sm placeholder-slate-400 shadow-sm outline-none"
              />
            </div>
          </div>
          <div>
            <div className="m-7 grid grid-cols-1 gap-4 md:grid-cols-2  lg:grid-cols-3">
              <div className="">
                <label
                  for="code"
                  className=" text-sm font-medium text-slate-700"
                >
                  CODE:
                </label>
                <input
                  id="code"
                  type="text"
                  value={person.code}
                  className="mt-1 w-full rounded-md border border-slate-300 bg-textInputColor px-3  py-2 text-sm placeholder-slate-400 shadow-sm outline-none"
                />
              </div>
              <div className="">
                <label
                  for="dob"
                  className=" text-sm font-medium text-slate-700"
                >
                  DATE OF BIRTH:
                </label>
                <input
                  id="dob"
                  type="text"
                  value={person.dob}
                  className="mt-1 w-[100%]  rounded-md border border-slate-300 bg-textInputColor px-3  py-2 text-sm placeholder-slate-400 shadow-sm outline-none"
                />
              </div>
            </div>
          </div>

          <div className="m-7">
            <div className="">
              <label
                for="pickup"
                className=" text-sm font-medium text-slate-700"
              >
                PICK-UP LOCATION:
              </label>
              <br />
              <input
                id="pickup"
                type="text"
                value={person.pickupLocation}
                className="mt-1  w-[100%] rounded-md border border-slate-300 bg-textInputColor px-3 py-2 text-sm placeholder-slate-400  shadow-sm outline-none lg:w-[66%]"
              />
            </div>
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
