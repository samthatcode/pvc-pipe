import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components";

const ConfirmSubmitRequest = ({ person }) => {
  return (
    <Layout>
      <div>
        <div className="container mx-auto  mb-40 bg-inherit px-4 pt-36 sm:px-6 lg:px-8">
          <div className="mx-auto grid grid-cols-1">
            <div className=" mb-3 font-poppins text-2xl font-semibold">
              Please confirm and submit your request
            </div>
            <div className=" mb-8 font-poppins text-sm font-normal text-[#01301D80]">
              <div className="">
                By clicking confirm order, you are agreeing to PVC PIPE's terms
                and conditions.
              </div>
              <div className="">
                You are also confirming that all details are accurate
              </div>
            </div>
            <div className="container mb-5 h-auto w-full max-w-[800px] overflow-hidden rounded-md border border-[#80978E] p-5">
              <div className="mb-4 flex justify-between ">
                <div className="font-poppins text-xl font-bold">
                  Shipping Address
                </div>
                <div className="text-sm text-secondary">Edit</div>
              </div>
              <div className="">
                <div className="text-sm text-[#01301D80]">{person.address}</div>
                <div className="mt-9 text-primary">{person.phoneNumber}</div>
              </div>
            </div>
            <div className="container mb-5 h-auto w-full max-w-[800px] overflow-hidden rounded-md border border-[#80978E] p-5">
              <div className="mb-4 flex justify-between ">
                <div className="font-poppins text-xl font-bold">
                  PVC Requested
                </div>
                <div className="text-sm text-secondary">Edit</div>
              </div>
              <div className="">
                <div className="text-sm  text-[#01301D80]">
                  <div className="flex ">
                    <div className="">Name:</div>
                    <div className="text-l ml-9 font-poppins font-bold text-primary">
                      {person.firstName} {person.lastName}
                    </div>
                  </div>
                  <div className="flex gap-3.5">
                    <div className="">Sex:</div>
                    <div className="text-l ml-10 font-poppins font-bold text-primary">
                      {person.sex}
                    </div>
                  </div>
                  <div className="gap-.5 flex">
                    <div className="">VIN no:</div>
                    <div className="text-l ml-8 font-poppins font-bold text-primary">
                      {person.vinNo}
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div className="">L.G.A:</div>
                    <div className="text-l ml-10 font-poppins font-bold text-primary">
                      {person.lga}
                    </div>
                  </div>
                  <div className="flex gap-0">
                    <div className="">Phone no:</div>
                    <div className="text-l ml-3 font-poppins font-bold text-primary">
                      {person.phoneNumber}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mb-5 h-auto w-full max-w-[800px] overflow-hidden rounded-md border border-[#80978E] p-5">
              <div className="mb-4 flex justify-between ">
                <div className="font-poppins text-xl font-bold">
                  Payment Method
                </div>
                <div className="text-sm text-secondary">Edit</div>
              </div>
              <div className="flex gap-20 md:gap-40">
                <div className="text-sm text-[#01301D80]">Cash on delivery</div>
                <div className="text-sm font-semibold text-primary">#2500</div>
              </div>
            </div>
            <div className="mt-5">
              <Link to="/status">
                <button className="w-full max-w-[800px] rounded border bg-primary p-3 text-center text-white transition duration-200 hover:scale-95 lg:w-full">
                  Confirm & Submit
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ConfirmSubmitRequest;
