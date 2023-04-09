import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PaystackConsumer } from "react-paystack";

const PaystackCheckout = () => {
  const navigateTo = useNavigate();
  const [paymentEmail, setPaymentEmail] = useState("");

  const config = {
    reference: new Date().getTime().toString(),
    email: paymentEmail,
    amount: 250000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_d56e5d99cfeea7107f91f241fadb5ac00ef8e4cb",
  };
  // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    if (reference.status === "success") {
      navigateTo("/confirm");
    }
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  const handleInputChange = (event) => {
    setPaymentEmail(event.target.value);
  };

  return (
    <div className="mt-2">
      <h1 className="my-4 mb-2 text-xl">Checkout</h1>
      <div className="mb-0 flex flex-col">
        <label htmlFor="name" className="mb-2 text-lg text-[#80978E]">
          Email Address
        </label>
        <input
          className="w-full rounded border border-[#012F1C] py-1 px-3 outline-none"
          id="paymentEmail"
          name="paymentEmail"
          value={paymentEmail}
          type="paymentEmail"
          onChange={handleInputChange}
          placeholder="Enter your email address"
          required
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="name" className="my-2 text-lg text-[#80978E]">
          Amount to pay
        </label>
        <input
          className="w-full rounded border border-[#012F1C] py-1 px-3 outline-none"
          id="amount"
          name="amount"
          value={`₦${config.amount / 100}.00K`}
          type="text"
          placeholder="Amount"
          disabled
        />
      </div>
      {
        <PaystackConsumer {...componentProps}>
          {({ initializePayment }) => (
            <button
              onClick={(e) => {
                e.preventDefault();
                initializePayment(
                  handlePaystackSuccessAction,
                  handlePaystackCloseAction
                );
              }}
              className="w-full rounded-lg bg-primary py-2 text-white transition duration-200 hover:scale-95 active:scale-100"
            >
              Make payment
            </button>
          )}
        </PaystackConsumer>
      }
    </div>
  );
};

export default PaystackCheckout;
