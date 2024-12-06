import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const Addvisas = () => {
  const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
    const newvisa = e.target.value;
    if (e.target.checked) {
      setFormData((previsa) => [...previsa, newvisa]);
    } else {
      setFormData((previsa) => previsa.filter((visa) => visa !== newvisa));
    }
  };
  // console.log(formData);

  // console.log(formData);

  const handleAddVisa = (e) => {
    e.preventDefault();

    const countryImage = e.target.countryImage.value;
    const countryName = e.target.countryName.value;
    const visaType = e.target.visaType.value;
    const processingTime = e.target.processingTime.value;
    const requiredDocuments = `${formData}`;
    const ageRestriction = e.target.ageRestriction.value;
    const fee = e.target.fee.value;
    const validity = e.target.validity.value;
    const applicationMethod = e.target.applicationMethod.value;
    const description = e.target.description.value;

    // console.log(requiredDocuments);

    const newVisa = {
      countryImage,
      countryName,
      visaType,
      processingTime,
      requiredDocuments,
      ageRestriction,
      fee,
      validity,
      applicationMethod,
      description,
    };
    console.log(newVisa);

    // send data to the server and database
    fetch("http://localhost:5000/visas", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          console.log("successfully added");
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      });
  };

  return (
    <div className="lg:w-3/4 mx-auto">
      <Helmet>
        <title>Add Visa - VisaNavigator</title>
        <meta name="description" content="Learn more about our company." />
        <meta name="keywords" content="about, company, information" />
      </Helmet>
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold">Add Visa</h1>
      </div>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleAddVisa} className="card-body">
          {/* First Row */}
          <div className="flex flex-col md:flex-row gap-5 justify-between">
            <div className="mb-4 w-full">
              <label
                htmlFor="countryImage"
                className="block text-sm font-medium text-gray-700"
              >
                Country Image
              </label>
              <input
                type="text"
                id="countryImage"
                name="countryImage"
                value={formData.countryImage}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                placeholder="Enter image URL"
              />
            </div>

            <div className="mb-4 w-full">
              <label
                htmlFor="countryName"
                className="block text-sm font-medium text-gray-700"
              >
                Country Name
              </label>
              <input
                type="text"
                id="countryName"
                name="countryName"
                value={formData.countryName}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                required
                placeholder="Country Name"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row gap-5 justify-between">
            <div className="mb-4 w-full">
              <label
                htmlFor="visaType"
                className="block text-sm font-medium text-gray-700"
              >
                Visa Type
              </label>
              <select
                id="visaType"
                name="visaType"
                value={formData.visaType}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                required
              >
                <option value="">Select Visa Type</option>
                <option value="Tourist visa">Tourist visa</option>
                <option value="Student visa">Student visa</option>
                <option value="Official visa">Official visa</option>
                {/* Add more options here */}
              </select>
            </div>

            <div className="mb-4 w-full">
              <label
                htmlFor="processingTime"
                className="block text-sm font-medium text-gray-700"
              >
                Processing Time
              </label>
              <input
                type="text"
                id="processingTime"
                name="processingTime"
                value={formData.processingTime}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                placeholder="Processing Time"
              />
            </div>
          </div>

          {/* 3rd Row */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Required Documents
            </label>
            <div className="flex space-x-4">
              {[
                "Valid passport",
                "Visa application form",
                "Recent passport-sized photograph",
              ].map((doc) => (
                <div key={doc} className="flex items-center">
                  <input
                    type="checkbox"
                    id={doc}
                    name="requiredDocuments"
                    value={doc}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor={doc} className="text-sm">
                    {doc}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* 4th Row */}
          <div className="flex flex-col md:flex-row gap-5 justify-between">
            <div className="mb-4 w-full">
              <label
                htmlFor="ageRestriction"
                className="block text-sm font-medium text-gray-700"
              >
                Age Restriction
              </label>
              <input
                type="number"
                id="ageRestriction"
                name="ageRestriction"
                value={formData.ageRestriction}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                placeholder="Age Restriction"
              />
            </div>

            <div className="mb-4 w-full">
              <label
                htmlFor="fee"
                className="block text-sm font-medium text-gray-700"
              >
                Fee
              </label>
              <input
                type="number"
                id="fee"
                name="fee"
                value={formData.fee}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                placeholder="Fee"
              />
            </div>
          </div>

          {/* 5th Row */}
          <div className="flex flex-col md:flex-row gap-5 justify-between">
            <div className="mb-4 w-full">
              <label
                htmlFor="validity"
                className="block text-sm font-medium text-gray-700"
              >
                Validity
              </label>
              <input
                type="text"
                id="validity"
                name="validity"
                value={formData.validity}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                placeholder="Validity"
              />
            </div>

            <div className="mb-4 w-full">
              <label
                htmlFor="applicationMethod"
                className="block text-sm font-medium text-gray-700"
              >
                Application Method
              </label>
              <input
                type="text"
                id="applicationMethod"
                name="applicationMethod"
                value={formData.applicationMethod}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                placeholder="Application Method"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#4a00ff] text-white py-2 px-4 rounded-none hover:bg-blue-600"
          >
            Add Visa
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addvisas;
