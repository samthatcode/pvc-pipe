import React from "react";
import { About, Hero, Navbar, Services, Testimonials, WhyUs } from "../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Testimonials />
    </div>
  );
};

export default Home;
