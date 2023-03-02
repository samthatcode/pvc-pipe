import React from 'react'
import { whyUsData } from '../data'

const WhyUs = () => {
  return (
    <div>
        <div className='font-semibold text-4xl custom-underline text-center my-20'>
            Why <span className='text-primary'>Choose us?</span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mx-28'>
            {whyUsData.map(why=>(
                <div className={`grid grid-cols-12 rounded-lg shadow p-4`} style={{backgroundColor: why.bg}}>
                    <div className='col-span-2 m-5'><img src={why.icon} alt="Reliable" /></div>
                    <div className='col-span-10 my-6'>
                        <div className='font-semibold text-[1.375rem] mb-4'>{why.title}</div>
                        <div className='max-w-[35ch]'>
                            {why.body} 
                        </div>
                    </div>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default WhyUs