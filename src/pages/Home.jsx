import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  About,
  Hero,
  HowItWorks,
  Layout,
  Services,
  Testimonials,
  WhyUs,
  Newsletter,
  FAQ,
} from "../components";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <HowItWorks />
      <About />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Newsletter />
    </Layout>
  );
};

export default Home;
