import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components";
import { toast } from "react-toastify";
import PaystackCheckout from "../components/PaystackCheckout";
import { usePaymentMethod } from "../contexts/PaymentContext";
import { usePhoneNumber } from "../contexts/NumberContext";

const ConfirmSubmitRequest = ({ person }) => {
  const { phoneNumber } = usePhoneNumber();
  const { paymentMethod, updatePaymentMethod } = usePaymentMethod();
  const [editing, setEditing] = useState(false);
  const toastParams = {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
  const notify = (val) => toast.success(`${val}`, toastParams);
  const warn = (val) => toast.error(`${val}`, toastParams);
  const inform = (val) => toast.info(`${val}`, toastParams);

  const handleEdit = () => {
    setEditing(!editing);
    if (editing) {
      notify("Payment details saved!");
    } else {
      inform("Editing payment details...");
    }
  };
  const handleEditShipping = () => {
    warn("Sorry, operation not allowed here");
    inform("Visit INEC site to edit your details");
  };
  const handleEditDetails = () => {
    warn("Sorry, operation not allowed here");
    inform("Visit INEC site to edit your details");
  };

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
                <div
                  onClick={handleEditShipping}
                  className="cursor-pointer text-sm text-secondary"
                >
                  Edit
                </div>
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
                <div
                  onClick={handleEditDetails}
                  className="cursor-pointer text-sm text-secondary"
                >
                  Edit
                </div>
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
                      {phoneNumber ? phoneNumber : "+2349023600083"}
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
                <div
                  onClick={handleEdit}
                  className="cursor-pointer text-sm text-secondary"
                >
                  {editing ? "Save" : "Edit"}
                </div>
              </div>
              {editing && (
                <div className="mb-4 flex flex-col">
                  <label htmlFor="name" className="mb-2 text-lg text-[#80978E]">
                    Edit Payment Method
                  </label>
                  <div
                    onClick={() => updatePaymentMethod("cash")}
                    className="mb-3 flex w-full cursor-pointer justify-between rounded border border-[#012F1C] py-1 px-3"
                  >
                    <div>Cash on delivery</div>
                    <div className="flex items-center">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full border border-primary">
                        <div
                          className={`h-3.5 w-3.5 rounded-full`}
                          style={
                            paymentMethod === "cash"
                              ? { backgroundColor: "#00834E" }
                              : { backgroundColor: "transparent" }
                          }
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => updatePaymentMethod("card")}
                    className="mb-3 flex w-full justify-between rounded border border-[#012F1C] py-1 px-3"
                  >
                    <div>Credit card or Debit card</div>
                    <div className="flex items-center">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full border border-primary">
                        <div
                          className={`h-3.5 w-3.5 rounded-full`}
                          style={
                            paymentMethod === "card"
                              ? { backgroundColor: "#00834E" }
                              : { backgroundColor: "transparent" }
                          }
                        ></div>
                      </div>
                    </div>
                  </div>
                  {paymentMethod === "card" && <PaystackCheckout />}
                </div>
              )}

              {!editing && (
                <div>
                  {paymentMethod === "cash" ? (
                    <div className="flex gap-20 md:gap-40">
                      <div className="text-sm text-[#01301D80]">
                        Cash on delivery
                      </div>
                      <div className="text-sm font-semibold text-primary">
                        #2500
                      </div>
                    </div>
                  ) : (
                    <div>Payment is under processing</div>
                  )}
                </div>
              )}
            </div>
            <div className="mt-5">
              <Link to="/status">
                <button className="w-full max-w-[800px] rounded border bg-primary p-3 text-center text-white transition duration-200 hover:scale-95 lg:w-full">
                  {paymentMethod === "cash" ? "Confirm & Submit" : "Track PVC"}
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
