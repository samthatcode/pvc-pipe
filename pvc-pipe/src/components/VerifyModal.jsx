import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VerifyModal = ({ num, notify, warn, verifyModal, setVerifyModal }) => {
  const navigateTo = useNavigate();

  const phoneNumber = num; // 11 characters
  const maskedNumber = phoneNumber.slice(0, 3) + "****" + phoneNumber.slice(7);

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [num4, setNum4] = useState("");
  const [num5, setNum5] = useState("");
  const [num6, setNum6] = useState("");
  const [OTP, setOTP] = useState("");

  const num1Ref = useRef(null);
  const num2Ref = useRef(null);
  const num3Ref = useRef(null);
  const num4Ref = useRef(null);
  const num5Ref = useRef(null);
  const num6Ref = useRef(null);

  // const [timeLeft, setTimeLeft] = useState(35);
  window.onload = function () {
    num1Ref.current.focus();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "num1":
        setNum1(value.slice(0, 1));
        if (value.length === 1) num2Ref.current.focus();
        break;
      case "num2":
        setNum2(value.slice(0, 1));
        if (value.length === 1) num3Ref.current.focus();
        if (value.length === 0) num1Ref.current.focus();
        break;
      case "num3":
        setNum3(value.slice(0, 1));
        if (value.length === 1) num4Ref.current.focus();
        if (value.length === 0) num2Ref.current.focus();
        break;
      case "num4":
        setNum4(value.slice(0, 1));
        if (value.length === 1) num5Ref.current.focus();
        if (value.length === 0) num3Ref.current.focus();
        break;
      case "num5":
        setNum5(value.slice(0, 1));
        if (value.length === 1) num6Ref.current.focus();
        if (value.length === 0) num4Ref.current.focus();
        break;
      case "num6":
        setNum6(value.slice(0, 1));
        if (value.length === 0) num5Ref.current.focus();
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    const sumValue = num1 + num2 + num3 + num4 + num5 + num6;
    setOTP(sumValue);
  }, [num1, num2, num3, num4, num5, num6]);

  const handleSubmit = (e) => {
    e.preventDefault();
    num1Ref.current.value = "";
    num2Ref.current.value = "";
    num3Ref.current.value = "";
    num4Ref.current.value = "";
    num5Ref.current.value = "";
    num6Ref.current.value = "";
    const confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(OTP)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        notify("Verification successful, redirecting you");
        setTimeout(() => {
          navigateTo("/track");
        }, 3000);
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        warn(`${error.toString().slice(25)}, request to resend`);
        warn(error);
      });
    // notify(sumValue);
  };

  const handleClose = () => {
    setVerifyModal(!verifyModal);
  };

  //     useEffect(() => {
  //         const timer = timeLeft > 0 && setInterval(() => setTimeLeft(timeLeft - 1), 1000);
  //         return () => clearInterval(timer);
  //     }, [timeLeft]);

  //    const countDownTimer = timeLeft.toString().padStart(2, '0');

  //     const handleRefresh = () => {
  //         if(timeLeft === 0){
  //             window.location.reload();
  //         }
  //       };

  return (
    <div className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50">
      <div className="relative flex h-[364px] w-[90%] max-w-[753px] items-center justify-center bg-white shadow-xl">
        <div
          onClick={handleClose}
          className="absolute top-2 right-4 scale-110 cursor-pointer text-4xl font-bold hover:scale-125 active:scale-110"
        >
          &times;
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-fit text-center font-poppins text-xl font-bold text-primary">
            Enter Verification code
          </div>
          <div className="text-center text-[0.6975rem] text-[#80978E]">
            Kindly enter the 6 digits verification code sent to{" "}
            <span className="font-bold text-[#03592C]">({maskedNumber})</span>
          </div>
          <div>
            <form className="flex flex-col items-center justify-center">
              <div className="my-8 flex items-center justify-center p-4">
                <input
                  type="number"
                  name="num1"
                  value={num1}
                  onChange={handleChange}
                  ref={num1Ref}
                  autoComplete="off"
                  className="mx-1 h-[40px] w-[35px] rounded-lg border-[0.6px] border-[#01301D] text-center text-xl font-bold sm:h-[55px] sm:w-[55px] sm:text-2xl md:mx-3"
                />
                <input
                  type="number"
                  name="num2"
                  value={num2}
                  onChange={handleChange}
                  ref={num2Ref}
                  autoComplete="off"
                  className="mx-1 h-[40px] w-[35px] rounded-lg border-[0.6px] border-[#01301D] text-center text-xl font-bold sm:h-[55px] sm:w-[55px] sm:text-2xl md:mx-3"
                />
                <input
                  type="number"
                  name="num3"
                  value={num3}
                  onChange={handleChange}
                  ref={num3Ref}
                  autoComplete="off"
                  className="mx-1 h-[40px] w-[35px] rounded-lg border-[0.6px] border-[#01301D] text-center text-xl font-bold sm:h-[55px] sm:w-[55px] sm:text-2xl md:mx-3"
                />
                <input
                  type="number"
                  name="num4"
                  value={num4}
                  onChange={handleChange}
                  ref={num4Ref}
                  autoComplete="off"
                  className="mx-1 h-[40px] w-[35px] rounded-lg border-[0.6px] border-[#01301D] text-center text-xl font-bold sm:h-[55px] sm:w-[55px] sm:text-2xl md:mx-3"
                />
                <input
                  type="number"
                  name="num5"
                  value={num5}
                  onChange={handleChange}
                  ref={num5Ref}
                  autoComplete="off"
                  className="mx-1 h-[40px] w-[35px] rounded-lg border-[0.6px] border-[#01301D] text-center text-xl font-bold sm:h-[55px] sm:w-[55px] sm:text-2xl md:mx-3"
                />
                <input
                  type="number"
                  name="num6"
                  value={num6}
                  onChange={handleChange}
                  ref={num6Ref}
                  autoComplete="off"
                  className="mx-1 h-[40px] w-[35px] rounded-lg border-[0.6px] border-[#01301D] text-center text-xl font-bold sm:h-[55px] sm:w-[55px] sm:text-2xl md:mx-3"
                />
              </div>
              <div className="flex w-[90%]">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="w-full cursor-pointer rounded-lg bg-primary py-3 text-xs text-white transition duration-200 hover:scale-95 active:scale-100"
                >
                  Verify & Proceed
                </button>
              </div>
              {/* <div className="text-[#80978E] text-xs mt-4 cursor-pointer">
                                Did not receive OTP? <span onClick={handleRefresh} className="text-secondary font-bold">Resend (00: {countDownTimer})</span> 
                            </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyModal;
