import React, { useState } from "react";
import twilio from "twilio";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Verification = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationSid, setVerificationSid] = useState("");
  const [verificationError, setVerificationError] = useState("");

  const sendVerificationCode = async () => {
    const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    try {
      const verificationResult = await client.verify.services(process.env.TWILIO_SERVICE_ID).verifications.create({
        to: phoneNumber,
        channel: "sms",
      });
      setVerificationSid(verificationResult.sid);
    } catch (error) {
      setVerificationError(error.message);
    }
  };

  const verifyCode = async () => {
    const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    try {
      const verificationCheck = await client.verify.services(process.env.TWILIO_SERVICE_ID).verificationChecks.create({
        to: phoneNumber,
        code: verificationCode,
      });
      if (verificationCheck.status === "approved") {
        // code is correct
        console.log("Verification successful!");
      } else {
        // code is incorrect
        setVerificationError("Verification failed. Please check the code and try again.");
      }
    } catch (error) {
      setVerificationError(error.message);
    }
  };
  const notify = () => toast("🦄 Wow so easy!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  return (
    <div>
      <h1>Phone Verification</h1>
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
      <div>
        <label>Enter your phone number:</label>
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <button onClick={sendVerificationCode}>Send Verification Code</button>
      </div>
      {verificationSid && (
        <div>
          <label>Enter the verification code you received:</label>
          <input type="text" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
          <button onClick={verifyCode}>Verify Code</button>
        </div>
      )}
      {verificationError && <div>{verificationError}</div>}
    </div>
  );
};

export default Verification;
