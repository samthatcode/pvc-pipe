import { Layout } from "../components";

const DeliveryDetails = ({ person }) => {
  return (
    <Layout>
      <div className="min-h-screen pt-16">
        <div className="mt-16 flex flex-col items-center justify-center">
          <div className="mx-6 flex w-full max-w-[600px] flex-col items-center justify-center font-poppins">
            <div className="mb-10 text-center text-[2rem] font-semibold text-primary md:text-[2.5rem]">
              Delivery Details
            </div>
            <div className="w-full">
              <div className="mx-auto mb-16 w-[90%]">
                <div className="mb-4 flex flex-col">
                  <label htmlFor="name" className="mb-2 text-xl text-[#80978E]">
                    Receiver&apos;s Name
                  </label>
                  <input
                    className="w-full rounded border border-[#012F1C] py-1 px-3 outline-none"
                    id="name"
                    name="name"
                    value={`${person.firstName} ${person.lastName}`}
                    type="text"
                    placeholder="e.g Abdrahman Oladimeji"
                  />
                </div>
                <div className="mb-4 flex flex-col">
                  <label htmlFor="name" className="mb-2 text-xl text-[#80978E]">
                    Receiver&apos;s Phone Number
                  </label>
                  <input
                    className="w-full rounded border border-[#012F1C] py-1 px-3 outline-none"
                    id="name"
                    name="name"
                    value={person.phoneNumber}
                    type="text"
                    placeholder="e.g Abdrahman Oladimeji"
                  />
                </div>
                <div className="mb-4 flex flex-col">
                  <label htmlFor="name" className="mb-2 text-xl text-[#80978E]">
                    Receiver&apos;s Email
                  </label>
                  <input
                    className="w-full rounded border border-[#012F1C] py-1 px-3 outline-none"
                    id="name"
                    name="name"
                    value={person.email}
                    type="text"
                    placeholder="e.g Abdrahman Oladimeji"
                  />
                </div>
                <div className="mb-4 flex flex-col">
                  <label htmlFor="name" className="mb-2 text-xl text-[#80978E]">
                    Receiver&apos;s Address
                  </label>
                  <input
                    className="w-full rounded border border-[#012F1C] py-1 px-3 outline-none"
                    id="name"
                    name="name"
                    value={person.address}
                    type="text"
                    placeholder="e.g Abdrahman Oladimeji"
                  />
                </div>
                <div className="mb-4 flex flex-col">
                  <label htmlFor="name" className="mb-2 text-xl text-[#80978E]">
                    Payment Method
                  </label>
                  <input
                    className="mb-3 w-full rounded border border-[#012F1C] py-1 px-3 outline-none"
                    id="name"
                    name="name"
                    value="Cash on Delivery"
                    type="text"
                    placeholder="e.g Abdrahman Oladimeji"
                  />
                  <input
                    className="w-full rounded border border-[#012F1C] py-1 px-3 font-semibold text-primary outline-none"
                    id="name"
                    name="name"
                    value="#2500"
                    type="text"
                    placeholder="e.g Abdrahman Oladimeji"
                  />
                </div>
                <div className="mt-10 mb-20 flex">
                  <button className="w-full rounded-lg bg-primary py-2 text-white hover:scale-95 active:scale-100">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeliveryDetails;
