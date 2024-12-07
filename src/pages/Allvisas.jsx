import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import AllVisasVisa from "../components/AllVisasVisa";

const Allvisas = () => {
  const allVisa = useLoaderData();
  const [selectedType, setSelectedType] = useState("All");
  const [filteredVisas, setFilteredVisas] = useState(allVisa);

  // Extract unique visa types
  const visaTypes = ["All", ...new Set(allVisa.map((visa) => visa.visaType))];
  // console.log(visaTypes);

  // Handle dropdown change
  const handleFilterChange = (event) => {
    const type = event.target.value;
    setSelectedType(type);

    if (type === "All") {
      setFilteredVisas(allVisa);
    } else {
      const filtered = allVisa.filter((visa) => visa.visaType === type);
      setFilteredVisas(filtered);
    }
  };

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

      {/* Dropdown for Filter */}
      <div className="text-center mb-6">
        <label htmlFor="visaType" className="mr-3 text-lg font-medium">
          Filter by Type:
        </label>
        <select
          id="visaType"
          value={selectedType}
          onChange={handleFilterChange}
          className="px-4 py-2 border border-gray-300 rounded-md"
        >
          {visaTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-8">
        {filteredVisas.map((visa) => (
          <AllVisasVisa key={visa._id} visa={visa}></AllVisasVisa>
        ))}
      </div>
    </div>
  );
};

export default Allvisas;
