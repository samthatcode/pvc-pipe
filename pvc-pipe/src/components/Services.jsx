import collect from "../assets/images/collect.png";
import logistics from "../assets/images/logistics.png";
import deliver from "../assets/images/deliver.png";

const Services = () => {
  return (
    <>
      <div className="h-auto w-full bg-primary px-20 py-10 ">
        <div className="flex justify-between">
          <div className="text-l text-whiteText mr-5">
            We have helped over <span className="text-secondary">1000 </span>
            Nigerians get their without them leaving the house
          </div>

          <button className=" rounded border ml-5 border-white py-2 px-4  text-whiteText transition duration-200 hover:scale-90">
            View
          </button>
        </div>
      </div>
      <div className="h-auto w-full bg-lightGrey px-20 py-14" id="services">
        <div className="custom-underline mb-24 text-center text-4xl font-semibold">
          Our <span className="text-primary">Services</span>
        </div>
        <div className="flex  flex-col lg:flex-row">
          <div className="lg:mr-4 lg:w-1/2">
            <div className="text-3xl text-primary ">
              Collect your PVC upon request
            </div>
            <br />
            <div className="mb-8 text-xl">
              Our team makes sure your card is being collected upon getting the
              notification to request for your voters card. we are happy to
              ensure that your voice is heard.
            </div>
          </div>
          <div className="lg:w-1/2">
            <img className="rounded" src={collect} alt="Collect PVC"></img>
          </div>
        </div>
        <br />
        <br />
        <div className="flex  flex-col lg:flex-row">
          <div className="mr-6 lg:w-1/2">
            <img
              className="mb-8 rounded"
              src={logistics}
              alt="Logistics PVC"
            ></img>
          </div>
          <div className="lg:mr-4 lg:w-1/2">
            <div className=" text-3xl text-primary">
              Take care of the Logistics
            </div>
            <br />
            <div className="text-xl">
              We are proud to offer a comprehensive logistics solution to
              deliver your voter's card. Our team of professionals will work
              with you to ensure fast and efficient delivery to your doorstep,
              with real-time tracking and 24/7 support.
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="flex  flex-col lg:flex-row">
          <div className="lg:mr-4 lg:w-1/2">
            <div className="text-3xl text-primary">
              Deliver it to your door step.
            </div>{" "}
            <br />
            <div className="mb-8 text-xl">
              We are offering mobile delivery services. Our despatch will come
              to you with your voter's card and you can verify your identity on
              the spot.
            </div>
          </div>
          <div className="lg:w-1/2">
            <img className="rounded" src={deliver} alt="Deliver PVC"></img>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default Services;
