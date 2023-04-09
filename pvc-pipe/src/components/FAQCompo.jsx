import { useState } from "react";
import plus from "./../assets/icons/plus.svg";
import minus from "./../assets/icons/minus.svg";

const FAQCompo = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="mx-auto mb-6 flex w-[90%] max-w-[75rem] flex-col border-b border-black transition duration-200 ease-in">
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="mb-6 flex min-w-[90%] items-center justify-between "
      >
        <div className="cursor-pointer text-base font-semibold text-primary transition delay-200 duration-300 ease-in-out md:text-[1.5rem]">
          {title}
        </div>
        <div className="flex w-12 cursor-pointer justify-end transition delay-200 duration-300 ease-in-out">
          <img src={!isActive ? plus : minus} alt="Plus" className="h-12 w-4" />
        </div>
      </div>
      {isActive && (
        <div className="mb-5 cursor-pointer text-sm text-[#009a49c9] transition delay-200 duration-300 ease-in-out md:text-lg">
          {content}
        </div>
      )}
    </div>
  );
};

export default FAQCompo;
