import React from 'react'

const About = () => {
    return (
        <div id='about' className='grid grid-cols-12 min-h-[80vh]'>
            <div className='col-span-5 bg-about'></div>
            <div className='col-span-7 bg-darkGrey text-white'>
                <div className='text-3xl font-semibold text-center my-14 custom-underline'>
                    About <span className='text-primary'>us</span>
                </div>
                <div className='flex justify-center items-center mb-14'>
                    <div className='text-lg w-[90%] text-center max-w-[53ch]'>
                        At PVC pipe, we are dedicated to ensuring that every 
                        eligible voter receives their voter's card in a timely 
                        and efficient manner. Our team is dedicated to making 
                        the voting process as smooth as possible for all citizens.
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-primary py-4 px-14 hover:scale-90 transition duration-200 rounded-md font-semibold text-lg'>Learn more</button>
                </div>
            </div>
        </div>
    )
}

export default About