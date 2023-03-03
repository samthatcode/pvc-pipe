import test1 from './../assets/images/testimonial1.png';
import arrow from './../assets/icons/arrow.svg';
const Testimonials = () => {
  return (
    <div className='pt-20' id='testimonials'>
        <div className='font-semibold text-3xl md:text-4xl custom-underline text-center mx-1 mt-4 mb-20'>
            Our <span className='text-primary'>Testimonials</span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mx-8 md:mx-28 relative'>
          <div className="absolute top-1/2 cursor-pointer hover:scale-90 active:scale-100 -left-6 rotate-180">
            <img src={arrow} alt="Next" />
          </div>
          <div className="absolute top-1/2 cursor-pointer hover:scale-90 active:scale-100 -right-6">
            <img src={arrow} alt="Next" />
          </div>
           <div>
            <img src={test1} alt="Testimonial" />
           </div>
        <div>
          <div className="text-lg">I ordered my mum’s PVC and mine and within 48 hours it got to us. so glad i did not have to wait in that long queue at ikeja.
           <br /> Thank you PVC PIPE.
          </div>
          <div>
            <div className="text-[1.25rem] font-medium">Loretta Igwe</div>
            <div className="text-lg">Lagos State</div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Testimonials