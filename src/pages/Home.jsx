import React, { useEffect, useState } from "react";
import CaruselSlider from "../components/CaruselSlider";
import VisaSection from "../components/VisaSection";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import FAQ from "../components/FAQ";
import AboutSection from "../components/AboutSection";

const Home = () => {
  const visas = useLoaderData();

  const savedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(savedTheme);

  // Update the body class based on the theme
  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme); // Save theme in localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <Helmet>
        <title>Home - VisaNavigator</title>
        <meta name="description" content="Learn more about our company." />
        <meta name="keywords" content="about, company, information" />
      </Helmet>
      <div>
        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
          className="p-2 border rounded mb-4 transition-colors"
        >
          Toggle Theme
        </button>
        <CaruselSlider />
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
