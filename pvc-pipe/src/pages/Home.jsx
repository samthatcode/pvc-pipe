import React from "react";
import { About, Hero, Navbar, Services, WhyUs } from "../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyUs />
    </div>
  );
};

export default Home;
