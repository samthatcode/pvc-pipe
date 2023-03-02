import React from "react";

const Services = () => {
  return (
    <div className="h-auto w-full bg-lightGrey px-20 py-10">
      <div className="py-15 mb-8 text-center text-2xl font-semibold">
        Our &nbsp;
        <span className="text-primary underline decoration-4">Services</span>
      </div>
      <div className="flex  flex-col lg:flex-row">
        <div className="lg:mr-4 lg:w-1/2">
          <div className="text-3xl text-primary ">
            Collect your PVC upon request
          </div>
          <br />
          <div className="mb-8 text-xl">
            Our team makes sure your card is being collected <br />
            upon getting the notification to request for your voters card.
            <br /> we are happy to ensure that your voice is heard.
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            className="rounded"
            src="src/assets/images/collect.png"
            alt="Collect PVC"
          ></img>
        </div>
      </div>
      <br />
      <br />
      <div className="flex  flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img
            className="mb-8 rounded"
            src="src/assets/images/logistics.png"
            alt="Logistics PVC"
          ></img>
        </div>
        <div className="lg:mr-4 lg:w-1/2">
          <div className=" text-3xl text-primary">
            Take care of the Logistics
          </div>
          <br />
          <div className="text-xl">
            We are proud to offer a comprehensive logistics solution to deliver
            your voter's card. Our team of professionals will work with you to
            ensure fast and efficient delivery to your doorstep, with real-time
            tracking and 24/7 support.
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="flex  flex-col lg:flex-row">
        <div className="lg:mr-4 lg:w-1/2">
          <div className="text-3xl text-primary ">
            Deliver it to your door step.
          </div>{" "}
          <br />
          <div className="mb-8 text-xl">
            We are offering mobile delivery services. Our despatch will come to
            you with your voter's card and you can verify your identity on the
            spot.
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            className="rounded"
            src="src/assets/images/deliver.png"
            alt="Deliver PVC"
          ></img>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Services;
