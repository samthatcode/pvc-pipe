import { useState, useRef } from "react";

const VerifyModal = ({ num, notify, verifyModal, setVerifyModal }) => {

    const phoneNumber = num; // 11 characters
    const maskedNumber = phoneNumber.slice(0, 3) + "****" + phoneNumber.slice(7);

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [num3, setNum3] = useState('');
    const [num4, setNum4] = useState('');
    const [sum, setSum] = useState('');

    const num1Ref = useRef(null);
    const num2Ref = useRef(null);
    const num3Ref = useRef(null);
    const num4Ref = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
          case "num1":
            setNum1(value);
            if (value.length === 1) num2Ref.current.focus();
            break;
          case "num2":
            setNum2(value);
            if (value.length === 1) num3Ref.current.focus();
            break;
          case "num3":
            setNum3(value);
            if (value.length === 1) num4Ref.current.focus();
            break;
          case "num4":
            setNum4(value);
            break;
          default:
            break;
        }
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        const sumValue = num1 + num2 + num3 + num4;
        notify(sumValue);
        setSum(sumValue);
    };

    const handleClose = () => {
        setVerifyModal(!verifyModal);
    }
    return (
        <div className='w-screen h-screen flex justify-center items-center bg-black/50 fixed top-0 left-0 z-50'>
            <div className='bg-white shadow-xl h-[364px] w-[90%] max-w-[753px] flex justify-center items-center relative'>
                <div onClick={handleClose} className="absolute font-bold text-4xl cursor-pointer top-2 scale-110 hover:scale-125 active:scale-110 right-4">&times;</div>
                <div className='flex items-center justify-center flex-col'>
                    <div className='font-bold text-center w-fit font-poppins text-xl text-primary'>
                        Enter Verification code
                    </div>
                    <div className='text-[#80978E] text-[0.6975rem]'>
                        Kindly enter  the 4 digits verification code sent  to {" "}
                        <span className='text-[#03592C] font-bold'>({maskedNumber})</span>
                    </div>
                    <div>
                        <form className="flex flex-col justify-center items-center">
                            <div className="flex justify-center items-center p-4 my-8">
                                <input
                                    type="number"
                                    name="num1"
                                    value={num1}
                                    onChange={handleChange}
                                    ref={num1Ref}
                                    autoComplete="off"
                                    className="font-bold text-2xl mx-3 text-center w-[55px] h-[55px] rounded-lg border-[0.6px] border-[#01301D]"
                                />
                                <input
                                    type="number"
                                    name="num2"
                                    value={num2}
                                    onChange={handleChange}
                                    ref={num2Ref}
                                    autoComplete="off"
                                    className="font-bold text-2xl mx-3 text-center w-[55px] h-[55px] rounded-lg border-[0.6px] border-[#01301D]"
                                />
                                <input
                                    type="number"
                                    name="num3"
                                    value={num3}
                                    onChange={handleChange}
                                    ref={num3Ref}
                                    autoComplete="off"
                                    className="font-bold text-2xl mx-3 text-center w-[55px] h-[55px] rounded-lg border-[0.6px] border-[#01301D]"
                                />
                                <input
                                    type="number"
                                    name="num4"
                                    value={num4}
                                    onChange={handleChange}
                                    ref={num4Ref}
                                    autoComplete="off"
                                    className="font-bold text-2xl mx-3 text-center w-[55px] h-[55px] rounded-lg border-[0.6px] border-[#01301D]"
                                />
                            </div>
                            <div className="flex w-full">
                                <button onClick={handleSubmit} type='submit' className='text-white bg-primary cursor-pointer w-full py-3 rounded-lg text-xs hover:scale-95 active:scale-100 transition duration-200'>Verify & Proceed</button>
                            </div>
                            <div className="text-[#80978E] text-xs mt-4 cursor-pointer">
                                Did not receive OTP? <span className="text-secondary font-bold">Resend (0:35)</span> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifyModal