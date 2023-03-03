
const Hero = () => {
  return (
    <div className="bg-hero h-screen bg-cover pb-8 pt-8" id="home">
      <div className="flex flex-col justify-center items-center text-white h-full ">
        <div className="font-semibold text-2xl md:text-4xl text-center w-[90%] mb-4 md:mb-8">
          {" "}
          <span className="text-secondary">PVC Delivery </span>at the comfort of
          your home
        </div>
        <div className="text-base md:text-lg max-w-[64ch] text-center w-[90%] mb-4 sm:mb-8 md:mb-16">
          Making sure your pvc is delivered and given to you at the comfort of
          your home, your voice must be heard.
        </div>
        <div className="flex flex-col md:flex-row w-full justify-center items-center">
          <div className="w-[90%] max-w-[644px] mb-4 md:mb-0">
            <input type='text' placeholder="Input your VIN" className="outline-none text-gray-700 py-4 px-6 md:px-14 mt-0.5 rounded-md w-full md:w-[95%] max-w-[644px]" />
          </div>
          <div>
            <button className='bg-primary py-4 px-11 hover:scale-90 transition duration-200 rounded-md font-semibold text-lg'>Find PVC</button>
          </div>
        </div>
        <div className="h-auto w-full bg-primary absolute -bottom-14 sm:bottom-0 px-6 md:px-20 py-4 md:py-10 ">
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
    </div>

  );
};

export default Hero;
