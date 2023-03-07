import { Layout } from '../components'

const DeliveryDetails = () => {
  return (
    <Layout>
        <div className='min-h-screen pt-16'>
            <div className='my-16'>
                <div className='flex flex-col justify-center items-center font-poppins mx-6'>
                    <div className='text-primary font-semibold text-[2.5rem]'>
                        Delivery Details
                    </div>
                    <div>
                        <div className='w-full'>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="Name" className='text-[#80978E] text-xl'>Receiver's Name</label>
                                <input className='outline-none border border-[#012F1C] rounded py-1 px-3 min-w-full w-full sm:w-[100%]' type="text" placeholder='e.g Abdrahman Oladimeji' />
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