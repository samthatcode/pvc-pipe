import { Link } from "react-router-dom";
import { Layout } from "../components";
import React, { useState, useEffect, useRef } from "react";
import { usePhoneNumber } from "../contexts/NumberContext";
import { usePaymentMethod } from "../contexts/PaymentContext";
import PaystackCheckout from "../components/PaystackCheckout";
// import { update } from "lodash";

const DeliveryDetails = ({ person }) => {
  const emailRef = useRef();
  const { phoneNumber } = usePhoneNumber();
  const { paymentMethod, updatePaymentMethod } = usePaymentMethod();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [updateEmail, setUpdateEmail] = useState(false); // update email feild

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    // setIsButtonDisabled(!validateEmail(value) || isButtonClicked);
  };

  const validateEmail = (email) => {
    // validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailUpdate = (e) => {
    e.preventDefault();
    setUpdateEmail(!updateEmail);
    if (updateEmail) {
      setMessage("Updating Email...");
      emailRef.current.focus();
    } else {
      if (validateEmail(email)) {
        setMessage("Email updated successfully!");
      } else {
        setMessage("Pls enter a valid email address");
        setUpdateEmail(false);
      }
    }
  };

  // setTimeout for message
  useEffect(() => {
    if (message !== "") {
      const timeoutMessage = setTimeout(() => {
        setMessage("");
      }, 3000);
      return () => clearTimeout(timeoutMessage);
    }
  }, [message]);

  return (
    <Layout>
      <div className="min-h-screen pt-16">
        <form>
          <div className="mt-16 flex flex-col items-center justify-center">
            <div className="mx-6 flex w-full max-w-[600px] flex-col items-center justify-center font-poppins">
              <div className="mb-10 text-center text-[2rem] font-semibold text-primary md:text-[2.5rem]">
                Delivery Details
              </div>

              <div className="w-full">
                <div className="mx-auto mb-16 w-[90%]">
                  <div className="mb-4 flex flex-col">
                    <label
                      htmlFor="name"
                      className="mb-2 text-xl text-[#80978E]"
                    >
                      Receiver&apos;s Name
                    </label>
                    <input
                      className="w-full rounded border border-[#012F1C] py-1 px-3 outline-none"
                      id="name"
                      name="name"
                      value={`${person.firstName} ${person.lastName}`}
                      type="text"
                      placeholder="e.g Abdrahman Oladimeji"
                      required
                      autoFocus
                      disabled
                    />
                  </div>
                  <div className="mb-4 flex flex-col">
                    <label
                      htmlFor="name"
                      className="mb-2 text-xl text-[#80978E]"
                    >
                      Receiver&apos;s Phone Number
                    </label>
                    <input
                      className="w-full rounded border border-[#012F1C] py-1 px-3 outline-none"
                      id="name"
                      name="name"
                      value={phoneNumber ? phoneNumber : "+2349023600083"}
                      type="text"
                      placeholder="e.g 09023600083"
                      required
                      autoFocus
                      disabled
                    />
                  </div>
                  <div className="mb-4 flex flex-col">
                    <label
                      htmlFor="email"
                      className="mb-2 text-xl text-[#80978E]"
                    >
                      Receiver&apos;s Email
                    </label>
                    <input
                      className="w-full rounded border border-[#012F1C] py-1 px-3 outline-none"
                      id="email"
                      name="email"
                      ref={emailRef}
                      value={email ? email : person.email}
                      onChange={handleEmailChange}
                      type="email"
                      placeholder="example@gmail.com (click to edit & update)"
                      required
                      disabled={updateEmail}
                    />
                    <div className="">
                      <button
                        className="mt-1 rounded border bg-[#ddd] p-1 text-sm text-[#308a69] transition duration-200 hover:scale-95 active:scale-100"
                        onClick={handleEmailUpdate}
                      >
                        {updateEmail ? "Update" : "Save"} Email
                      </button>
                      {message !== "" && (
                        <span className="ml-7 text-primary">{message}</span>
                      )}
                    </div>
                  </div>
                  <div className="mb-4 flex flex-col">
                    <label
                      htmlFor="name"
                      className="mb-2 text-xl text-[#80978E]"
                    >
                      Receiver&apos;s Address
                    </label>
                    <input
                      className="w-full rounded border border-[#012F1C] py-1 px-3 outline-none"
                      id="name"
                      name="name"
                      value={person.pickupLocation}
                      type="text"
                      placeholder="e.g No 13, Adeyemi close, Obafemi Awolowo Way, Opposite Elephant House, Alausa off abuja hih way"
                      required
                      autoFocus
                      disabled
                    />
                  </div>
                  <div className="mb-4 flex flex-col">
                    <label
                      htmlFor="name"
                      className="mb-2 text-xl text-[#80978E]"
                    >
                      Payment Method
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
                  {paymentMethod === "cash" && (
                    <div className="mt-10 mb-20 flex w-full">
                      <Link to="/confirm" className="w-full">
                        <button
                          type="submit"
                          className="w-full rounded-lg bg-primary py-2 text-white transition duration-200 hover:scale-95 active:scale-100"
                        >
                          Submit
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default DeliveryDetails;
