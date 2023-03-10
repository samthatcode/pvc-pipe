import React from 'react'
import { whyUsData } from '../data'

const WhyUs = () => {
  return (
    <div>
        <div className='font-semibold text-3xl md:text-4xl custom-underline text-center mx-2 my-20'>
            Why <span className='text-primary'>Choose us?</span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mx-6 sm:mx-10 md:mx-20'>
            {whyUsData.map(why=>(
                <div className={`grid grid-cols-12 rounded-lg shadow p-4 text-center md:text-left`} style={{backgroundColor: why.bg}}>
                    <div className='col-span-12 md:col-span-3 m-2 md:m-5 mx-auto'><img src={why.icon} alt="Reliable" /></div>
                    <div className='col-span-12 md:col-span-9 my-6 px-2 md:px-0'>
                        <div className='font-semibold text-[1.375rem] mb-4'>{why.title}</div>
                        <div className='w-full flex justify-center md:justify-start'>
                            <div className='max-w-[35ch] text-center md:text-left'>
                                {why.body} 
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default WhyUs