import React from "react";
import { useLoaderData } from "react-router-dom";

const VisaDetail = () => {
  const visa = useLoaderData(); // Get the visa data loaded by the loader

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Visa Details</h1>
      <p className="text-xl">
        Visa ID: <strong>{visa?._id}</strong>
      </p>
      <p>Country Name: {visa?.countryName}</p>
      <p>Visa Type: {visa?.visaType}</p>
      <p>Processing Time: {visa?.processingTime}</p>
      <p>Fee: {visa?.fee} Taka</p>
      <p>Description: {visa?.description}</p>
      {/* Add other details as necessary */}
    </div>
  );
};

export default VisaDetail;
