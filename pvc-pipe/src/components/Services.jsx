import collect from "../assets/images/collect.png";
import logistics from "../assets/images/logistics.png";
import deliver from "../assets/images/deliver.png";

const Services = () => {
  return (
    <>
      <div
        className="h-auto w-full bg-lightGrey px-6 py-14 md:px-20"
        id="services"
      >
        <div className="custom-underline my-12 text-center text-3xl font-semibold md:text-4xl">
          Our <span className="text-primary">Services</span>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:pr-4">
            <div className="text-center text-2xl text-primary md:text-left md:text-3xl">
              Retrieve your permanent voter's card (PVC) upon making a request
              for it
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
          <div className="order-2 w-full md:order-1 md:w-1/2">
            <img
              className="w-full rounded md:mb-8"
              src={logistics}
              alt="Logistics PVC"
            ></img>
          </div>
          <div className="order-1 w-full md:order-2 md:w-1/2 md:pl-4">
            <div className="text-center text-2xl text-primary md:text-left md:text-3xl">
              Manage the logistics involved
            </div>
            <br />
            <div className="mb-8 text-lg md:text-xl">
              Our team is proud to provide a complete logistics solution for
              delivering your PVC, including fast and efficent delivery to your
              doorstep with real-time tracking and 24/7 support.
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:pr-4">
            <div className="text-center text-2xl text-primary md:text-left md:text-3xl">
              Provide doorstep delivery of the PVC
            </div>{" "}
            <br />
            <div className="mb-8 text-lg md:text-xl">
              We provide mobile delivery services for your voter's card, with
              our dispatch team bringing it directly to you for on-the-spot
              identity verification.
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
