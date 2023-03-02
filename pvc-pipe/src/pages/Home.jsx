import React from "react";
import {
  About,
  Hero,
  HowItWorks,
  Navbar,
  Services,
  Testimonials,
  WhyUs,
  Footer,
} from "../components";

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
      <Footer />
    </div>
  );
};

export default Home;
