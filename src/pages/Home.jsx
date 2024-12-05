import React, { useState } from "react";
import CaruselSlider from "../components/CaruselSlider";
import VisaSection from "../components/VisaSection";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const visas = useLoaderData();

  return (
    <div>
      <CaruselSlider></CaruselSlider>
      <div className="my-5">
        <VisaSection visas={visas}></VisaSection>
      </div>
    </div>
  );
};

export default Home;
