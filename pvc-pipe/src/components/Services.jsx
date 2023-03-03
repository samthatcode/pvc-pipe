import collect from "../assets/images/collect.png";
import logistics from "../assets/images/logistics.png";
import deliver from "../assets/images/deliver.png";

const Services = () => {
  return (
    <>
      <div className="h-auto w-full bg-lightGrey px-6 md:px-20 py-14" id="services">
        <div className="custom-underline my-12 text-center text-3xl md:text-4xl font-semibold">
          Our <span className="text-primary">Services</span>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:pr-4">
            <div className="text-2xl md:text-3xl text-primary text-center md:text-left">
              Collect your PVC upon request
            </div>
            <br />
            <div className="mb-8 text-lg md:text-xl">
              Our team makes sure your card is being collected upon getting the
              notification to request for your voters card. we are happy to
              ensure that your voice is heard.
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img className="rounded" src={collect} alt="Collect PVC"></img>
          </div>
        </div>
        <br />
        <br />
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <img
              className="md:mb-8 rounded w-full"
              src={logistics}
              alt="Logistics PVC"
            ></img>
          </div>
          <div className="w-full md:w-1/2 md:pl-4 order-1 md:order-2">
            <div className="text-2xl md:text-3xl text-primary text-center md:text-left">
              Take care of the Logistics
            </div>
            <br />
            <div className="mb-8 text-lg md:text-xl">
              We are proud to offer a comprehensive logistics solution to
              deliver your voter's card. Our team of professionals will work
              with you to ensure fast and efficient delivery to your doorstep,
              with real-time tracking and 24/7 support.
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:pr-4">
            <div className="text-2xl md:text-3xl text-primary text-center md:text-left">
              Deliver it to your door step.
            </div>{" "}
            <br />
            <div className="mb-8 text-lg md:text-xl">
              We are offering mobile delivery services. Our despatch will come
              to you with your voter's card and you can verify your identity on
              the spot.
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img className="rounded" src={deliver} alt="Deliver PVC"></img>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default Services;
