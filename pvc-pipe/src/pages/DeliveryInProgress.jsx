import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components";

const DeliveryInProgress = ({ person }) => {
  return (
    <Layout>
      <div className="">
        <div className="mb-20 h-56 w-auto bg-lightYellow pt-20 md:mb-0 ">
          <img
            src={person?.photo}
            alt="Person"
            className="ml-6 mt-14 h-40 w-40 rounded-full border-4 border-green-500  md:ml-20 "
          />
        </div>

        <div className="bg-inherit">
          <div className="ml-6 mt-14 mb-10 font-poppins font-semibold md:ml-72 md:mt-0">
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
                  htmlFor="firstname"
                  className=" text-sm font-medium text-slate-700"
                >
                  FIRST NAME:
                </label>
                <input
                  id="fname"
                  type="text"
                  value={person.firstName}
                  className="mt-1  w-[100%] rounded-md border border-slate-300 bg-textInputColor px-3  py-2 text-sm placeholder-slate-400 shadow-sm outline-none"
                  disabled
                />
              </div>
              <div className="">
                <label
                  htmlFor="lastname"
                  className="text-sm font-medium text-slate-700"
                >
                  LAST NAME:
                </label>
                <input
                  id="lname"
                  type="text"
                  value={person.lastName}
                  className="mt-1  w-[100%] rounded-md border border-slate-300 bg-textInputColor px-3  py-2 text-sm placeholder-slate-400 shadow-sm outline-none"
                  disabled
                />
              </div>
            </div>
            <div className="m-7 ">
              <div className="">
                <label
                  htmlFor="phone"
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
                  disabled
                />
              </div>
            </div>
            <div className="m-7 grid grid-cols-1 gap-4 md:grid-cols-2  lg:grid-cols-3">
              <div className="">
                <label
                  htmlFor="state"
                  className=" text-sm font-medium text-slate-700"
                >
                  STATE:
                </label>
                <input
                  id="state"
                  type="text"
                  value={person.state}
                  className="mt-1 w-[100%] rounded-md border border-slate-300 bg-textInputColor px-3  py-2 text-sm placeholder-slate-400 shadow-sm outline-none"
                  disabled
                />
              </div>
              <div className="">
                <label
                  htmlFor="lga"
                  className="text-sm font-medium text-slate-700"
                >
                  L.G.A:
                </label>
                <input
                  id="lga"
                  type="text"
                  value={person.lga}
                  className="mt-1  w-[100%] rounded-md border border-slate-300 bg-textInputColor px-3  py-2 text-sm placeholder-slate-400 shadow-sm outline-none"
                  disabled
                />
              </div>
            </div>
            <div>
              <div className="m-7 grid grid-cols-1 gap-4 md:grid-cols-2  lg:grid-cols-3">
                <div className="">
                  <label
                    htmlFor="code"
                    className=" text-sm font-medium text-slate-700"
                  >
                    CODE:
                  </label>
                  <input
                    id="code"
                    type="text"
                    value={person.code}
                    className="mt-1 w-full rounded-md border border-slate-300 bg-textInputColor px-3  py-2 text-sm placeholder-slate-400 shadow-sm outline-none"
                    disabled
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="dob"
                    className=" text-sm font-medium text-slate-700"
                  >
                    DATE OF BIRTH:
                  </label>
                  <input
                    id="dob"
                    type="text"
                    value={person.dob}
                    className="mt-1 w-[100%]  rounded-md border border-slate-300 bg-textInputColor px-3  py-2 text-sm placeholder-slate-400 shadow-sm outline-none"
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="m-7">
              <div className="">
                <label
                  htmlFor="pickup"
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
                  disabled
                />
              </div>
            </div>
            <div className="m-7 pt-10">
              <Link to="/details">
                <button className="w-full rounded border bg-primary p-3 text-center text-white transition duration-200 hover:scale-95 lg:w-[66%]">
                  Submit Request
                </button>
              </Link>
              <Link to="/status">
                <p className="text-sm mt-3 text-center md:text-left font-poppins text-[#80978E]">Already requested? <span className="text-secondary font-bold hover:underline">Click to track delivery progress</span></p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeliveryInProgress;
