import React from "react";
import { About, Hero,, HowItWorks Navbar, Services, Testimonials, WhyUs } from "../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <About />
      <WhyUs />
      <Testimonials />
    </div>
  );
};

export default Home;
