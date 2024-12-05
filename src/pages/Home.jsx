import React, { useState } from "react";
import CaruselSlider from "../components/CaruselSlider";
import VisaSection from "../components/VisaSection";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import FAQ from "../components/FAQ";
import AboutSection from "../components/AboutSection";

const Home = () => {
  const visas = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Home - VisaNavigator</title>
        <meta name="description" content="Learn more about our company." />
        <meta name="keywords" content="about, company, information" />
      </Helmet>
      <div className="">
        <CaruselSlider></CaruselSlider>
      </div>
      <div>
        <AboutSection></AboutSection>
      </div>
      <div className="my-5">
        <VisaSection visas={visas}></VisaSection>
      </div>
      <div className="my-7">
        <FAQ></FAQ>
      </div>
    </div>
  );
};

export default Home;
