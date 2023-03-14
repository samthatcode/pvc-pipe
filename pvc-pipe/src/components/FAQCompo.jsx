import { useState } from 'react';
import plus from './../assets/icons/plus.svg';
import minus from './../assets/icons/minus.svg';

const FAQCompo = ({title, content}) => {
    const [isActive, setIsActive] = useState(false);

  return (
        <div className='flex flex-col mx-auto border-b border-black w-[90%] max-w-[75rem] ease-in mb-6 transition duration-200'>
            <div onClick={()=>{setIsActive(!isActive)}} className='flex justify-between min-w-[90%] items-center mb-6 '>
                <div className='text-primary font-semibold cursor-pointer transition duration-300 ease-in-out delay-200 text-base md:text-[1.5rem]'>{title}</div>
                <div className='cursor-pointer transition duration-300 ease-in-out delay-200 w-12 flex justify-end'><img src={!isActive? plus : minus} alt="Plus" className='w-4 h-12' /></div>
            </div>
            {isActive && (
                <div className='text-[#009a49c9] text-sm md:text-lg transition duration-300 ease-in-out delay-200 cursor-pointer mb-5'>
                    {content}
                </div>
            )} 
        </div>
  )
}

export default FAQCompo