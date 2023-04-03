import { useState } from "react";

const Newsletter = () => {
  const [showNewsletter, setShowNewsletter] = useState(false);
  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const myForm = event.target;
  //   const formData = new FormData(myForm);

  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: new URLSearchParams(formData).toString(),
  //   })
  //     .then(() => navigate("/thank-you/"))
  //     .catch((error) => alert(error));
  // };

  return (
    <>
      <div
        id="contact"
        className="mt-12 mb-16 h-auto w-full bg-primary px-6 py-6 md:px-20 md:py-10"
      >
        <div className="flex flex-col justify-center md:flex-row md:justify-between">
          <div className="text-center text-xl text-white md:text-2xl">
            Subscribe to our Newsletter now
          </div>
          <div>
            <button onClick={()=>setShowNewsletter(true)} className="mt-2 w-full rounded border border-white py-2 px-2 text-white transition duration-200 hover:scale-90 md:mt-0 md:w-fit md:px-10">
             Subscribe
            </button>
          </div>
        </div>
      </div>
      {showNewsletter && (
        <div className="fixed top-0 right-0 h-screen w-full flex justify-center items-center bg-white/50">
          <div className=" bg-primary rounded-md p-6 w-[90%] max-w-4xl">
          <div className="flex justify-end mr-2">
            <div onClick={()=>setShowNewsletter(false)} className="text-secondary text-5xl hover:scale-90 active:scale-100 transition duration-300 cursor-pointer font-bold">&times;</div>
          </div>
            <h2 className="text-2xl text-white font-bold mb-4">Subscribe to our newsletter</h2>
            <form className="flex flex-col" action="/success" name="newsletter" method="POST" data-netlify="true" netlify>
              <input type="hidden" name="form-name" value="newsletter" />
              <label className="text-white mb-2 font-semibold" for="email">Name:</label>
              <input className="rounded-md border-2 border-secondary py-2 px-3 mb-4" type="text" name="name" id="name" required placeholder="Enter your name" />
              <label className="text-white mb-2 font-semibold" for="email">Email Address:</label>
              <input className="rounded-md border-2 border-secondary py-2 px-3 mb-4" type="email" name="email" id="email" required placeholder="Enter your email address" />
              <button className="bg-secondary text-white font-semibold py-2 rounded-md hover:bg-opacity-80 transition-colors duration-300" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      )}

    </>
  );
};

export default Newsletter;
