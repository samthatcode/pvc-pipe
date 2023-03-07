import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VerifyModal from './VerifyModal';

const Hero = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verifyModal, setVerifyModal] = useState(false);
  // 🦄
  const toastParams = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    }
  const notify = (val) => toast.success(`${val}`, toastParams);
  const warn = (val) => toast.danger(`${val}`, toastParams);
  const inform = (val) => toast.info(`${val}`, toastParams);

    const handleChange = (e)=> {
      const cleanedValue = e.target.value.replace(/[^0-9]/g, '');
      setPhoneNumber(cleanedValue);
    }
   
    const handleSubmit = (e) => {
      e.preventDefault();
      if(phoneNumber.length !== 11){
        inform("Number must be 11 values")
      } else {
        const numValue = parseInt(phoneNumber);
        notify(`Sending verification code to 0${numValue}`);
        setTimeout(() => {
          setVerifyModal(!verifyModal);
        }, 3000);
      }
    }
  return (
    <div className="h-screen pb-8 pt-8" id="home">
      <div className="flex flex-col justify-center items-center text-white h-full bg-hero bg-top bg-cover mt-8">
        <div className="font-semibold text-2xl md:text-4xl text-center w-[90%] mb-4 md:mb-8">
          {" "}
          <span className="text-secondary">PVC Delivery </span>at the comfort of
          your home
        </div>
        <div className="text-base md:text-lg max-w-[64ch] text-center w-[90%] mb-4 sm:mb-8 md:mb-16">
          Making sure your pvc is delivered and given to you at the comfort of
          your home, your voice must be heard.
        </div>
        <form className="flex flex-col md:flex-row w-full justify-center items-center">
          <div className="w-[90%] max-w-[644px] mb-4 md:mb-0">
            <input 
              value={phoneNumber} 
              onChange={handleChange} 
              type='text' 
              placeholder="Input your Phone Number or VIN" 
              className="outline-none text-gray-700 py-4 px-6 md:px-14 mt-0.5 rounded-md w-full md:w-[95%] max-w-[644px]" required />
          </div>
          <div className='w-[90%] md:w-fit'>
            <button 
              onClick={handleSubmit} 
              type="submit" 
              className='bg-primary py-4 px-11 hover:scale-90 transition duration-200 rounded-md font-semibold text-lg w-full md:w-fit'>Find PVC</button>
          </div>
          <div>
          </div>
          <ToastContainer />
        </form>
        <div className="hidden md:flex h-auto w-full bg-primary absolute -bottom-14 sm:bottom-0 px-6 md:px-20 py-4 md:py-10 ">
          <div className="flex flex-col md:flex-row justify-around">
            <div>
              <div className="text-[1rem] md:text-[1.375rem] text-center py-auto md:text-left text-white mr-0 md:mr-5">
                We have helped over <span className="text-secondary mx-1">1000 </span>
                Nigerians get their PVC without them leaving the house
              </div>
            </div>
            <div className="flex justify-center mt-4 md:mt-0">
              <button className="rounded border w-full md:w-fit ml-0 md:ml-5 border-white py-1 px-20  text-white transition duration-200 hover:scale-90">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
      {verifyModal && <VerifyModal verifyModal={verifyModal} setVerifyModal={setVerifyModal} notify={notify} num={phoneNumber} />}
    </div>

  );
};

export default Hero;
