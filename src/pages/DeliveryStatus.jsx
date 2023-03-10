import { useEffect, useState } from "react";
import { Layout } from "../components";
import status1 from "./../assets/icons/status1.svg";
import status2 from "./../assets/icons/status2.svg";
import status2In from "./../assets/icons/status2_in.svg";
import status3 from "./../assets/icons/status3.svg";
import status3In from "./../assets/icons/status3_in.svg";
import status4 from "./../assets/icons/status4.svg";
import status4In from "./../assets/icons/status4_in.svg";

const DeliveryStatus = () => {
  const [milestone, setMilestone] = useState(0);
  const randVal = (num) => Math.floor(Math.random() * num);
  useEffect(() => {
    setMilestone(randVal(4));
  }, [randVal]);

  DeliveryStatus.defaultProps = {
    order: "000156",
  };
  return (
    <Layout>
      <div className="pt-16 font-poppins">
        <div className="flex h-[227px] items-center justify-center bg-status_mobile bg-cover bg-center md:h-[360px] md:bg-status">
          <div className="w-[90%] text-center text-[2rem] font-semibold text-secondary md:text-[2.5rem]">
            PVC DELIVERY PROGRESS
          </div>
        </div>
        <div className="mx-auto my-6 flex w-[90%] max-w-[1042px] flex-col">
          <div>
            <div className="mb-3 text-lg font-semibold text-[#322F2F]">
              PVC has been collected
            </div>
            <div className="mb-3 text-[#80978E]">
              Order -{" "}
              <span className="font-bold text-secondary">
                00{randVal(10000)}
              </span>
            </div>
            <div className="mb-10 text-[#80978E]">
              Expected delivery date: <br className="flex md:hidden" />{" "}
              <span className="font-bold text-secondary">
                Monday, 25th February, 2023
              </span>
            </div>
          </div>
          <div className="mb-4 grid w-full max-w-[1024px] grid-cols-12 place-content-center justify-items-center">
            <div className="col-span-3 ml-8 flex items-center justify-center">
              <img src={status1} alt="Status" className="scale-150" />
            </div>
            <div className="col-span-3 ml-4 flex items-center justify-center">
              <img
                src={milestone >= 1 ? status2 : status2In}
                alt="Status"
                className="scale-150"
              />
            </div>
            <div className="col-span-3 flex items-center justify-center">
              <img
                src={milestone >= 2 ? status3 : status3In}
                alt="Status"
                className="scale-150"
              />
            </div>
            <div className="col-span-3 mr-0 flex items-center justify-center md:mr-8">
              <img
                src={milestone === 3 ? status4 : status4In}
                alt="Status"
                className="scale-150"
              />
            </div>
          </div>
          <div className="mx-[5%] mb-4 grid w-[95%] max-w-[1024px] grid-cols-12">
            <div className="col-span-1"></div>
            <div className="col-span-3 flex w-full flex-col">
              <div className="flex items-center">
                <div>
                  <div className="h-5 w-5 scale-110 rounded-full bg-primary"></div>
                </div>
                <div
                  className={
                    milestone >= 1
                      ? `h-2 w-full bg-primary`
                      : `h-2 w-full bg-[#FFF6DA]`
                  }
                ></div>
              </div>
            </div>
            <div className="col-span-3 flex w-full flex-col">
              <div className="flex items-center">
                <div>
                  <div
                    className={
                      milestone >= 1
                        ? `h-5 w-5 scale-110 rounded-full bg-primary`
                        : `h-5 w-5 scale-110 rounded-full bg-[#FFF6DA]`
                    }
                  ></div>
                </div>
                <div
                  className={
                    milestone >= 2
                      ? `h-2 w-full bg-primary`
                      : `h-2 w-full bg-[#FFF6DA]`
                  }
                ></div>
              </div>
            </div>
            <div className="col-span-3 flex w-full flex-col">
              <div className="flex items-center">
                <div>
                  <div
                    className={
                      milestone >= 2
                        ? `h-5 w-5 scale-110 rounded-full bg-primary`
                        : `h-5 w-5 scale-110 rounded-full bg-[#FFF6DA]`
                    }
                  ></div>
                </div>
                <div
                  className={
                    milestone === 3
                      ? `h-2 w-full bg-primary`
                      : `h-2 w-full bg-[#FFF6DA]`
                  }
                ></div>
              </div>
            </div>
            <div className="col-span-2 flex w-full flex-col">
              <div className="flex items-center">
                <div
                  className={
                    milestone === 3
                      ? `h-5 w-5 scale-110 rounded-full bg-primary`
                      : `h-5 w-5 scale-110 rounded-full bg-[#FFF6DA]`
                  }
                ></div>
              </div>
            </div>
          </div>
          <div className="mx-auto mb-4 grid w-full max-w-[1024px] grid-cols-12 place-content-center justify-items-center">
            {/* <div className=''></div> */}
            <div
              className={
                milestone >= 0
                  ? `col-span-3 text-center text-[0.625rem] font-bold text-[#322F2F] md:text-lg`
                  : `col-span-3 text-center text-[0.625rem] font-bold text-[#80978E] md:text-lg`
              }
            >
              Order received
            </div>
            <div
              className={
                milestone >= 1
                  ? `col-span-3 text-center text-[0.625rem] font-bold text-[#322F2F] md:text-lg`
                  : `col-span-3 text-center text-[0.625rem] font-bold text-[#80978E] md:text-lg`
              }
            >
              PVC collected
            </div>
            <div
              className={
                milestone >= 2
                  ? `col-span-3 text-center text-[0.625rem] font-bold text-[#322F2F] md:text-lg`
                  : `col-span-3 text-center text-[0.625rem] font-bold text-[#80978E] md:text-lg`
              }
            >
              PVC on its way
            </div>
            <div
              className={
                milestone === 3
                  ? `col-span-3 text-center text-[0.625rem] font-bold text-[#322F2F] md:text-lg`
                  : `col-span-3 text-center text-[0.625rem] font-bold text-[#80978E] md:text-lg`
              }
            >
              PVC delivered
            </div>
          </div>

          <div>
            <div className="text-xl text-[#01301D]">ORDER DETAILS</div>
            <div className="mt-[0.75rem] mb-4 h-[0.0625rem] w-full max-w-[1024px] bg-[#01301D]"></div>
            <div className="grid grid-cols-12">
              <div className="col-span-2 flex items-center justify-center md:col-span-1">
                <img src={status1} alt="Status" className="scale-150" />
              </div>
              <div className="col-span-10 ml-1 md:col-span-11">
                <div className="mb-3 text-lg font-bold text-[#01301D]">
                  Order received
                </div>
                <div className="text-[#80978E]">
                  10:30am, 10th February, 2023
                </div>
              </div>
            </div>
            <div className="my-4 h-[0.0625rem] w-full max-w-[1024px] bg-[#01301D]"></div>
            <div className="grid grid-cols-12">
              <div className="col-span-2 flex items-center justify-center md:col-span-1">
                <img
                  src={milestone >= 1 ? status2 : status2In}
                  alt="Status"
                  className="scale-150"
                />
              </div>
              <div className="col-span-10 ml-1 md:col-span-11">
                <div className="mb-3 text-lg font-bold text-[#01301D]">
                  PVC Collected
                </div>
                <div className="text-[#80978E]">
                  {milestone >= 1
                    ? "10:30am, 15th February, 2023"
                    : "Loading..."}
                </div>
              </div>
            </div>
            <div className="my-4 h-[0.0625rem] w-full max-w-[1024px] bg-[#01301D]"></div>
            <div className="grid grid-cols-12">
              <div className="col-span-2 flex items-center justify-center md:col-span-1">
                <img
                  src={milestone >= 2 ? status3 : status3In}
                  alt="Status"
                  className="scale-150"
                />
              </div>
              <div className="col-span-10 ml-1 md:col-span-11">
                <div className="mb-3 text-lg font-bold text-[#01301D]">
                  PVC On its way
                </div>
                {/* <div className='text-[#80978E]'>10:30am, 10th February, 2023</div> */}
              </div>
            </div>
            <div className="my-4 h-[0.0625rem] w-full max-w-[1024px] bg-[#01301D]"></div>
            <div className="grid grid-cols-12">
              <div className="col-span-2 flex items-center justify-center md:col-span-1">
                <img
                  src={milestone === 3 ? status4 : status4In}
                  alt="Status"
                  className="scale-150"
                />
              </div>
              <div className="col-span-10 ml-1 md:col-span-11">
                <div className="mb-3 text-lg font-bold text-[#01301D]">
                  PVC Delivered
                </div>
                {/* <div className='text-[#80978E]'>10:30am, 10th February, 2023</div> */}
              </div>
            </div>
            <div className="my-4 h-[0.0625rem] w-full max-w-[1024px] bg-[#01301D]"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeliveryStatus;
