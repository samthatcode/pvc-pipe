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
  FAQ,
} from "../components";
// import Accordion from "../components/Accordion";

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
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
