import { Layout } from '../components'

const DeliveryDetails = () => {
  return (
    <Layout>
        <div className='min-h-screen pt-16'>
            <div className='mt-16 flex flex-col justify-center items-center'>
                <div className='w-full max-w-[600px] flex flex-col justify-center items-center font-poppins mx-6'>
                    <div className='text-primary mb-10 text-center font-semibold text-[2rem] md:text-[2.5rem]'>
                        Delivery Details
                    </div>
                    <div className='w-full'>
                        <div className='w-[90%] mx-auto mb-16'>
                            <div className='flex flex-col mb-4'>
                                <label htmlFor="name" className='text-[#80978E] text-xl mb-2'>Receiver&apos;s Name</label>
                                <input className='outline-none border border-[#012F1C] rounded py-1 px-3 w-full' id='name' name='name' type="text" placeholder='e.g Abdrahman Oladimeji' />
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label htmlFor="name" className='text-[#80978E] text-xl mb-2'>Receiver&apos;s Phone Number</label>
                                <input className='outline-none border border-[#012F1C] rounded py-1 px-3 w-full' id='name' name='name' type="text" placeholder='e.g Abdrahman Oladimeji' />
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label htmlFor="name" className='text-[#80978E] text-xl mb-2'>Receiver&apos;s Email</label>
                                <input className='outline-none border border-[#012F1C] rounded py-1 px-3 w-full' id='name' name='name' type="text" placeholder='e.g Abdrahman Oladimeji' />
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label htmlFor="name" className='text-[#80978E] text-xl mb-2'>Receiver&apos;s Address</label>
                                <input className='outline-none border border-[#012F1C] rounded py-1 px-3 w-full' id='name' name='name' type="text" placeholder='e.g Abdrahman Oladimeji' />
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label htmlFor="name" className='text-[#80978E] text-xl mb-2'>Payment Method</label>
                                <input className='outline-none border border-[#012F1C] rounded py-1 px-3 w-full mb-3' id='name' name='name' type="text" placeholder='e.g Abdrahman Oladimeji' />
                                <input className='outline-none border border-[#012F1C] rounded py-1 px-3 w-full' id='name' name='name' type="text" placeholder='e.g Abdrahman Oladimeji' />
                            </div>
                            <div className='flex mt-10 mb-20'>
                                <button className='bg-primary text-white w-full py-2 rounded-lg hover:scale-95 active:scale-100'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default DeliveryDetails