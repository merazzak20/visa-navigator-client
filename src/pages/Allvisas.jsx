import React from "react";
import { useLoaderData } from "react-router-dom";
import Visa from "../components/Visa";
import { Helmet } from "react-helmet";

const Allvisas = () => {
  const allVisa = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>All Visa - VisaNavigator</title>
        <meta name="description" content="Learn more about our company." />
        <meta name="keywords" content="about, company, information" />
      </Helmet>
      <div className="my-8 text-center">
        <h1 className="text-4xl font-bold  text-[#4A00FF]">All Visas</h1>
        <p className="text-xl mt-3 font-medium">
          Number of Visa: {allVisa.length}
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-5 my-8">
        {allVisa.map((visa) => (
          <Visa key={visa._id} visa={visa}></Visa>
        ))}
      </div>
    </div>
  );
};

export default Allvisas;
