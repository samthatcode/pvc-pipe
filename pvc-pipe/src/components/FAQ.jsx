
import FAQCompo from './FAQCompo';
import { faqData } from '../data';

const FAQ = () => {
    
    return (
      <div className=''>
          <div className='font-semibold text-4xl custom-underline text-center mx-1 my-20'>
              Frequently <span className='text-primary'>Asked Questions</span>
          </div>
          <div className='w-[90%] mx-auto max-w-[75rem] flex flex-col justify-center'>
            {faqData.map((faq, index)=>
                <FAQCompo index={index} title={faq.title} content={faq.content} />
            )} 
          </div>
      </div>
    )
  }
  
  export default FAQ