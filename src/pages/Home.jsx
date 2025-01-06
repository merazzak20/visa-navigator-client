import React, { useEffect, useState } from "react";
import CaruselSlider from "../components/CaruselSlider";
import VisaSection from "../components/VisaSection";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import FAQ from "../components/FAQ";
import AboutSection from "../components/AboutSection";
import Breaking from "../components/Breaking";

const Home = () => {
  const visas = useLoaderData();

  const [darkMode, setdarkMode] = useState(false);

  const toggleTheme = () => {
    setdarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <Helmet>
        <title>Home - VisaNavigator</title>
        <meta name="description" content="Learn more about our company." />
        <meta name="keywords" content="about, company, information" />
      </Helmet>
      {/* Theme toggle button */}
      {/* <div className="">
        <button
          onClick={toggleTheme}
          className="p-2 border rounded mb-4 transition-colors dark:text-white dark:bg-black"
        >
          {darkMode ? "light" : "dark"}
        </button>
      </div> */}
      <div className="dark:text-white dark:bg-black">
        <div className="">
          <CaruselSlider />
        </div>

        <div>
          <AboutSection darkMode={darkMode}></AboutSection>
        </div>
        <div className="my-5">
          <VisaSection visas={visas}></VisaSection>
        </div>
        <Breaking></Breaking>
        <div className="my-7">
          <FAQ></FAQ>
        </div>
      </div>
    </div>
  );
};

export default Home;
