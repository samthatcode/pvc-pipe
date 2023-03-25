import { useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import open from "./../assets/icons/hamburger.svg";

const Navbar = () => {
  const navRef = useRef();
  const showMenu = () => {
    navRef.current.classList.toggle("translate-x-[100%]");
  };

  const pathname = window.location.pathname;
  return (
    <nav
      className={`lg:px-auto fixed z-10 mx-auto flex h-fit w-full justify-center bg-primary text-white transition duration-500 sm:px-20`}
    >
      <div
        className={`fixed mx-auto flex h-16 w-full max-w-[1200px] justify-between bg-primary px-4 transition duration-500 md:static md:px-0`}
      >
        {/* Brand Logo */}
        <div className="my-auto flex font-semibold">
          <Link to="/" className={`flex justify-center items-center`}>
            <img className="w-10 mr-2" src="https://res.cloudinary.com/dh4rm7b7b/image/upload/c_scale,r_11,w_100/v1679739220/PVC-Pipe/PVC_Pipe-06_ediimz.png" alt="PVC-Pipe" />
            <div className="font-bold">PVC Pipe</div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="my-auto hidden w-full max-w-[600px] items-center justify-between font-poppins text-white md:flex">
          <HashLink
            to={pathname === "/" ? `#home` : "/#home"}
            smooth
            className="px-4 decoration-2 underline-offset-4 hover:underline"
          >
            Home
          </HashLink>
          <HashLink
            to={pathname === "/" ? `#services` : "/#services"}
            smooth
            className="px-4 decoration-2 underline-offset-4 hover:underline"
          >
            Services
          </HashLink>
          <HashLink
            to={pathname === "/" ? `#about` : "/#about"}
            smooth
            className="px-4 decoration-2 underline-offset-4 hover:underline"
          >
            About us
          </HashLink>
          <HashLink
            to={pathname === "/" ? `#testimonials` : "/#testimonials"}
            smooth
            className="px-4 decoration-2 underline-offset-4 hover:underline"
          >
            Testimonials
          </HashLink>
          <HashLink
            to={pathname === "/" ? `#contact` : "/#contact"}
            smooth
            className="px-4 decoration-2 underline-offset-4 hover:underline"
          >
            Contact us
          </HashLink>
        </div>

        {/* Mobile nav & toggler */}
        <div className="z-20 flex md:hidden">
          <button
            onClick={showMenu}
            className="absolute right-2 flex h-16 items-center justify-center p-3 text-secondary transition active:scale-90 md:hidden"
          >
            <img src={open} alt="Open Nav" />
          </button>
          <div
            ref={navRef}
            className={`font-body fixed  top-0 right-0 my-auto flex h-screen w-[70%] translate-x-[100%] flex-col items-center bg-primary uppercase transition md:hidden`}
          >
            <div
              className="mb-4 mt-[50%] flex justify-center"
              onClick={showMenu}
            >
              <HashLink
                to={pathname === "/" ? `#home` : "/#home"}
                smooth
                className="px-4 decoration-2 underline-offset-4 hover:underline"
              >
                Home
              </HashLink>
            </div>
            <div className="my-4 flex justify-center" onClick={showMenu}>
              <HashLink
                to={pathname === "/" ? `#services` : "/#services"}
                smooth
                className="px-4 decoration-2 underline-offset-4 hover:underline"
              >
                Services
              </HashLink>
            </div>
            <div className="my-4 flex justify-center" onClick={showMenu}>
              <HashLink
                to={pathname === "/" ? `#about` : "/#about"}
                smooth
                className="px-4 decoration-2 underline-offset-4 hover:underline"
              >
                About Us
              </HashLink>
            </div>
            <div className="my-4 flex justify-center" onClick={showMenu}>
              <HashLink
                to={pathname === "/" ? `#testimonials` : "/#testimonials"}
                smooth
                className="px-4 decoration-2 underline-offset-4 hover:underline"
              >
                Testimonials
              </HashLink>
            </div>
            <div className="my-4 flex justify-center" onClick={showMenu}>
              <HashLink
                to={pathname === "/" ? `#contact` : "/#contact"}
                smooth
                className="px-4 decoration-2 underline-offset-4 hover:underline"
              >
                Contact Us
              </HashLink>
            </div>
            <button
              onClick={showMenu}
              className="absolute top-1 right-3 flex scale-110 cursor-pointer p-2 text-4xl font-bold text-secondary transition duration-500 ease-in active:scale-110 md:hidden"
            >
              &times;
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
