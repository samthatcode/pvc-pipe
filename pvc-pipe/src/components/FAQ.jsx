import FAQCompo from "./FAQCompo";
import { faqData } from "../data";

const FAQ = () => {
  return (
    <div className="">
      <div className="custom-underline mx-1 my-20 text-center text-3xl font-semibold md:text-4xl">
        Frequently <span className="text-primary">Asked Questions</span>
      </div>
      <div className="mx-auto flex w-[90%] max-w-[75rem] flex-col justify-center">
        {faqData.map((faq, index) => (
          <FAQCompo key={index} title={faq.title} content={faq.content} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
