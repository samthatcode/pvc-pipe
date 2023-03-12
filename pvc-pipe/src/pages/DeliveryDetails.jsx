import { Link } from "react-router-dom";
import { Layout } from "../components";
import React, { useState, useEffect } from "react";

const DeliveryDetails = ({ person }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  // update email feild
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setIsButtonDisabled(!validateEmail(value) || isButtonClicked);
  };

  const validateEmail = (email) => {
    // validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailUpdate = () => {
    setIsButtonClicked(true);
    setMessage("Email updated successfully!");
    setIsButtonDisabled(true);
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
                      value={person.name}
                      type="text"
                      placeholder="e.g Abdrahman Oladimeji"
                      required
                      autofocus
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
                      value={``}
                      type="text"
                      placeholder="e.g 09023600083"
                      required
                      autofocus
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
                      value={email}
                      onChange={handleEmailChange}
                      type="email"
                      placeholder="example@gmail.com (click to edit & update)"
                      required
                      autofocus
                    />
                    <div className="">
                      <button
                        className="border rounded p-1 mt-1 text-sm bg-[#ddd] text-[#308a69] transition duration-200 hover:scale-95 active:scale-100"
                        onClick={handleEmailUpdate}
                        disabled={isButtonDisabled}
                      >
                        Update Email
                      </button>
                      {message !== "" && (
                        <span className="text-primary ml-7">{message}</span>
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
                      value={``}
                      type="text"
                      placeholder="e.g No 13, Adeyemi close, Obafemi Awolowo Way, Opposite Elephant House, Alausa off abuja hih way"
                      required
                      autofocus
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
                    <input
                      className="mb-3 w-full rounded border border-[#012F1C] py-1 px-3 outline-none"
                      id="name"
                      name="name"
                      value="Cash on Delivery"
                      type="text"
                      placeholder="e.g Abdrahman Oladimeji"
                      required
                      autofocus
                      disabled
                    />
                    <input
                      className="w-full rounded border border-[#012F1C] py-1 px-3 font-semibold text-primary outline-none"
                      id="name"
                      name="name"
                      value="#2500"
                      type="text"
                      placeholder="e.g Abdrahman Oladimeji"
                      required
                      autofocus
                      disabled
                    />
                  </div>
                  <div className="mt-10 mb-20 flex w-full">
                    <Link to="/confirm" className="w-full">
                      <button className="w-full rounded-lg bg-primary py-2 text-white transition duration-200 hover:scale-95 active:scale-100">
                        Submit
                      </button>
                    </Link>
                  </div>
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
