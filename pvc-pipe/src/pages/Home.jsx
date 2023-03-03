import React from "react";
import {
  About,
  Hero,
  HowItWorks,
  Navbar,
  Services,
  Testimonials,
  WhyUs,
  Newsletter,
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
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
