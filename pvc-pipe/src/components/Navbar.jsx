import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const navRef = useRef()
  const showMenu = () => {
    navRef.current.classList.toggle('translate-x-[100%]');
  }

  return (
    <nav className={`fixed w-full bg-primary text-white mx-auto lg:px-auto sm:px-20 transition duration-500 flex justify-center z-10 h-fit`}>
      <div className={`flex w-full bg-primary fixed md:static max-w-[1200px] mx-auto justify-between transition duration-500 h-16 px-4 md:px-0`}>

        {/* Brand Logo */}
        <div className='flex my-auto'>
          <Link to='/' className={``}>
            PVC Pipe
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className='hidden md:flex font-poppins text-white my-auto items-center justify-between w-full max-w-[500px]'>
          <HashLink to="#home" smooth className={({ isActive }) => (isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')}>Home</HashLink>
          <HashLink to='#services' smooth className={({ isActive }) => (isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')}>Services</HashLink>
          <HashLink to='#about' smooth className={({ isActive }) => (isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')}>About us</HashLink>
          <HashLink to='#testimonials' smooth className={({ isActive }) => (isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')}>Testimonials</HashLink>
          <HashLink to='#contact' smooth className={({ isActive }) => (isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')}>Contact us</HashLink>
        </div>

        {/* Mobile nav & toggler */}
        <div className='flex md:hidden z-20'>
          <button onClick={showMenu} className="flex pt-[1.3rem] text-secondary absolute right-2 md:hidden p-3 transition active:scale-90">
            Open
          </button>
          <div ref={navRef} className={`flex translate-x-[100%]  bg-primary md:hidden transition flex-col w-[70%] items-center font-body uppercase my-auto h-screen fixed top-0 right-0`}>
            <div className='flex justify-center mb-4 mt-[50%]' onClick={showMenu}>
              <HashLink to="#home" smooth className={({ isActive }) => (isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')} end>Home</HashLink>
            </div>
            <div className='flex justify-center my-4' onClick={showMenu}>
              <HashLink to='#services' smooth className={({ isActive }) => (isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')}>Services</HashLink>
            </div>
            <div className='flex justify-center my-4' onClick={showMenu}>
              <HashLink to='#about' smooth className={({ isActive }) => (isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')}>About Us</HashLink>
            </div>
            <div className='flex justify-center my-4' onClick={showMenu}>
              <HashLink to='#testimonials' smooth className={({ isActive }) => (isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')}>Testimonials</HashLink>
            </div>
            <div className='flex justify-center my-4' onClick={showMenu}>
              <HashLink to='#contact' smooth className={({ isActive }) => (isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')}>Contact Us</HashLink>
            </div>
            <button onClick={showMenu} className="flex absolute text-secondary right-2 md:hidden p-6 ease-in transition duration-500 active:scale-90">
              Close
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;