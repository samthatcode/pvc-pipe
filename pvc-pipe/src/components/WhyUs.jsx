import React from 'react'

const WhyUs = () => {
  return (
    <div>
        <div className='font-semibold text-4xl custom-underline text-center my-20'>
            Why <span className='text-primary'>Choose us?</span>
        </div>
        <div className='grid grid-cols-2 gap-6 mx-28'>
            <div>
                <div><img src={''} alt="Reliable" /></div>
                <div>
                    <div>Reliability</div>
                    <div>
                        We Investing in reliability through testing, 
                        quality control, and maintenance to ensures our 
                        customer satisfaction, making it a priority for 
                        a smooth-running 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyUs