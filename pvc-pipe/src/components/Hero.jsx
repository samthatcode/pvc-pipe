import { useState, useRef } from "react";
import { authentication } from "../config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VerifyModal from "./VerifyModal";
import { usePhoneNumber } from "../contexts/NumberContext";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  const inputRef = useRef(null);
  const { phoneNumber, updatePhoneNumber } = usePhoneNumber();
  const [verifyModal, setVerifyModal] = useState(false);

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

  const handleChange = (e) => {
    const cleanedValue = e.target.value.replace(/[^0-9]/g, "");
    updatePhoneNumber(cleanedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length !== 11) {
      inform("Number must be 11 values");
    } else {
      const numValue = parseInt(phoneNumber);
      inputRef.current.value = "";
      notify(`Requesting verification code on 0${numValue}`);
      const intNum = `+234${numValue}`;

      window.recaptchaVerifier = new RecaptchaVerifier(
        "sign-in-button",
        {
          size: "invisible",
          callback: (response) => {},
        },
        authentication
      );
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(authentication, intNum, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          notify("Verification code sent, check your phone");
          setVerifyModal(!verifyModal);
        })
        .catch((error) => {
          // Error; SMS not sent
          warn(error);
        });
    }
  };

  return (
    <div className="h-screen pb-8 pt-8" id="home">
      <div className="mt-8 flex h-full flex-col items-center justify-center bg-black/50 bg-hero bg-cover bg-top text-white">
        <div className="mb-4 w-[90%] text-center text-2xl font-semibold md:mb-8 md:text-4xl">  
          <span className="text-secondary">Get Your PVC Delivered </span>Fast and Hassle-Free, Right to Your Doorstep
        </div>
        <div className="mb-4 w-[90%] max-w-[64ch] text-center text-base sm:mb-8 md:mb-16 md:text-lg">
          Experience timely delivery with our trusted and customer-oriented PVC delivery company, providing efficient and reliable services.
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center justify-center md:flex-row"
        >
          <div className="mb-4 w-[90%] max-w-[644px] md:mb-0">
            <input
              value={phoneNumber}
              onChange={handleChange}
              ref={inputRef}
              name="phoneNumber"
              type="text"
              placeholder="Input your Phone Number or VIN"
              className="mt-0.5 w-full max-w-[644px] rounded-md py-4 px-6 text-gray-700 outline-none md:w-[95%] md:px-14"
              required
            />
          </div>
          <div className="flex w-[90%] md:w-fit">
            <button
              onClick={handleSubmit}
              type="submit"
              className="mx-auto w-full max-w-[644px] rounded-md bg-primary py-4 px-11 text-lg font-semibold transition duration-200 hover:scale-90 md:w-fit"
            >
              Find PVC
            </button>
          </div>
        </form>
        <div className="z-50 mt-2 flex">
          <div id="sign-in-button"></div>
        </div>
        <div className="absolute -bottom-14 hidden h-auto w-full bg-primary px-6 py-4 sm:bottom-0 md:flex md:px-20 md:py-6 ">
          <div className="flex flex-col justify-around md:flex-row">
            <div>
              <div className="py-auto mr-0 text-center text-[1rem] text-white md:mr-5 md:text-left md:text-[1.375rem]">
                We have helped over
                <span className="mx-1 text-secondary">1000 </span>
                Nigerians get their PVC without them leaving the house
              </div>
            </div>
            <div className="mt-4 flex justify-center md:mt-0">
              <HashLink to="#about" smooth='true'>
              <button className="ml-0 w-full rounded border border-white py-1 px-10 text-white transition duration-200  hover:scale-90 md:ml-5 md:w-fit lg:px-20">
                View
              </button>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
      {verifyModal && (
        <VerifyModal
          verifyModal={verifyModal}
          setVerifyModal={setVerifyModal}
          notify={notify}
          warn={warn}
          num={phoneNumber}
        />
      )}
    </div>
  );
};

export default Hero;
