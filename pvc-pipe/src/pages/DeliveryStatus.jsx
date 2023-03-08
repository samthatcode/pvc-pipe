import { useEffect, useState } from 'react';
import { Layout } from '../components';
import milestone from './../assets/icons/milestone.svg'
import milestoneIn from './../assets/icons/milestoneIn.svg'
import milestoneStart from './../assets/icons/milestoneStart.svg'
import status1 from './../assets/icons/status1.svg'
import status2 from './../assets/icons/status2.svg'
import status2In from './../assets/icons/status2_in.svg'
import status3 from './../assets/icons/status3.svg'
import status3In from './../assets/icons/status3_in.svg'
import status4 from './../assets/icons/status4.svg'
import status4In from './../assets/icons/status4_in.svg'

const DeliveryStatus = () => {
  const [milestone, setMilestone] = useState(0);
  const randVal = (num)=> Math.floor(Math.random()*num);
    useEffect(() => {
      setMilestone(randVal(4));
    }, [randVal])
    
  
  DeliveryStatus.defaultProps = {    
    order: "000156",    
    eyeColor: "deepblue",    
    age: "120"
  }
  return (
    <Layout>
      <div className='pt-16 font-poppins'>
        <div className='flex justify-center items-center bg-status_mobile md:bg-status bg-cover bg-center h-[227px] md:h-[360px]'>
            <div className='text-secondary font-semibold text-[2rem] md:text-[2.5rem] w-[90%] text-center'>PVC DELIVERY PROGRESS</div>
        </div>
        <div className='flex flex-col w-[90%] max-w-[1042px] mx-auto my-6'>
          <div>
            <div className='text-[#322F2F] font-semibold text-lg mb-3'>PVC has been collected</div>
            <div className='text-[#80978E] mb-3'>Order - <span className='text-secondary font-bold'>00{randVal(10000)}</span></div>
            <div className='text-[#80978E] mb-10'>Expected delivery date: <br className='flex md:hidden' /> <span className='text-secondary font-bold'>Monday, 25th February, 2023</span></div>
          </div>
          <div className='w-full max-w-[1024px] grid grid-cols-12 mb-4 place-content-center justify-items-center'>
              <div className='col-span-3 ml-8 flex items-center justify-center'><img src={status1} alt="Status" className='scale-150' /></div>
              <div className='col-span-3 ml-4 flex items-center justify-center'><img src={milestone >= 1 ? status2 : status2In} alt="Status" className='scale-150' /></div>
              <div className='col-span-3 flex items-center justify-center'><img src={milestone >= 2 ? status3 : status3In} alt="Status" className='scale-150' /></div>
              <div className='col-span-3 mr-0 md:mr-8 flex items-center justify-center'><img src={milestone === 3 ? status4 : status4In} alt="Status" className='scale-150' /></div>
          </div>
          <div className='w-[95%] mx-[5%] max-w-[1024px] grid grid-cols-12 mb-4'>
            <div className='col-span-1'></div>
            <div className='flex flex-col w-full col-span-3'>
              <div className='flex items-center'>
                <div>
                  <div className='bg-primary rounded-full w-5 h-5 scale-110'></div>
                </div>
                <div className={milestone >= 1 ? `bg-primary w-full h-2` : `bg-[#FFF6DA] w-full h-2`}></div>
              </div>
            </div>
            <div className='flex flex-col w-full col-span-3'>
              <div className='flex items-center'>
                <div>
                  <div className={milestone >= 1 ? `bg-primary rounded-full w-5 h-5 scale-110` : `bg-[#FFF6DA] rounded-full w-5 h-5 scale-110`}></div>
                </div>
                <div className={ milestone >= 2 ? `bg-primary w-full h-2` : `bg-[#FFF6DA] w-full h-2`}></div>
              </div>
            </div>
            <div className='flex flex-col w-full col-span-3'>
              <div className='flex items-center'>
                <div>
                  <div className={milestone >= 2 ? `bg-primary rounded-full w-5 h-5 scale-110` : `bg-[#FFF6DA] rounded-full w-5 h-5 scale-110`}></div>
                </div>
                <div className={milestone === 3 ? `bg-primary w-full h-2` : `bg-[#FFF6DA] w-full h-2`}></div>
              </div>
            </div>
            <div className='flex flex-col w-full col-span-2'>
              <div className='flex items-center'>
                <div className={milestone === 3 ? `bg-primary rounded-full w-5 h-5 scale-110` :`bg-[#FFF6DA] rounded-full w-5 h-5 scale-110`}></div>
              </div>
            </div>
          </div>
          <div className='w-full mx-auto max-w-[1024px] grid grid-cols-12 mb-4 place-content-center justify-items-center'>
              {/* <div className=''></div> */}
              <div className={ milestone >= 0 ? `col-span-3 text-center text-[0.625rem] md:text-lg font-bold text-[#322F2F]` : `col-span-3 text-center text-[0.625rem] md:text-lg font-bold text-[#80978E]`}>Order received</div>
              <div className={ milestone >= 1 ? `col-span-3 text-center text-[0.625rem] md:text-lg font-bold text-[#322F2F]` : `col-span-3 text-center text-[0.625rem] md:text-lg font-bold text-[#80978E]`}>PVC collected</div>
              <div className={ milestone >= 2 ? `col-span-3 text-center text-[0.625rem] md:text-lg font-bold text-[#322F2F]` : `col-span-3 text-center text-[0.625rem] md:text-lg font-bold text-[#80978E]`}>PVC on its way</div>
              <div className={ milestone === 3 ? `col-span-3 text-center text-[0.625rem] md:text-lg font-bold text-[#322F2F]` : `col-span-3 text-center text-[0.625rem] md:text-lg font-bold text-[#80978E]`}>PVC delivered</div>
          </div>
         
          <div>
            <div className='text-[#01301D] text-xl'>ORDER DETAILS</div>
            <div className='h-[0.0625rem] w-full max-w-[1024px] bg-[#01301D] mt-[0.75rem] mb-4'></div>
              <div className='grid grid-cols-12'>
                <div className='col-span-2 md:col-span-1 flex items-center justify-center'><img src={status1} alt="Status" className='scale-150' /></div>
                <div className='col-span-10 md:col-span-11 ml-1'>
                  <div className='text-[#01301D] text-lg font-bold mb-3'>Order received</div>
                  <div className='text-[#80978E]'>10:30am, 10th February, 2023</div>
                </div>
              </div>
            <div className='h-[0.0625rem] w-full max-w-[1024px] bg-[#01301D] my-4'></div>
              <div className='grid grid-cols-12'>
                <div className='col-span-2 md:col-span-1 flex items-center justify-center'><img src={milestone >= 1 ? status2 : status2In} alt="Status" className='scale-150' /></div>
                <div className='col-span-10 md:col-span-11 ml-1'>
                  <div className='text-[#01301D] text-lg font-bold mb-3'>PVC Collected</div>
                  <div className='text-[#80978E]'>{milestone >= 1 ? '10:30am, 15th February, 2023' : 'Loading...'}</div>
                </div>
              </div>
            <div className='h-[0.0625rem] w-full max-w-[1024px] bg-[#01301D] my-4'></div>
              <div className='grid grid-cols-12'>
                <div className='col-span-2 md:col-span-1 flex items-center justify-center'><img src={milestone >= 2 ? status3 : status3In} alt="Status" className='scale-150' /></div>
                <div className='col-span-10 md:col-span-11 ml-1'>
                  <div className='text-[#01301D] text-lg font-bold mb-3'>PVC On its way</div>
                  {/* <div className='text-[#80978E]'>10:30am, 10th February, 2023</div> */}
                </div>
              </div>
            <div className='h-[0.0625rem] w-full max-w-[1024px] bg-[#01301D] my-4'></div>
              <div className='grid grid-cols-12'>
                <div className='col-span-2 md:col-span-1 flex items-center justify-center'><img src={milestone === 3 ? status4 : status4In} alt="Status" className='scale-150' /></div>
                <div className='col-span-10 md:col-span-11 ml-1'>
                  <div className='text-[#01301D] text-lg font-bold mb-3'>PVC Delivered</div>
                  {/* <div className='text-[#80978E]'>10:30am, 10th February, 2023</div> */}
                </div>
              </div>
            <div className='h-[0.0625rem] w-full max-w-[1024px] bg-[#01301D] my-4'></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DeliveryStatus