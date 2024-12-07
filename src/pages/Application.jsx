import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import SingleApplication from "../components/SingleApplication";
import { AuthContext } from "../provider/AuthProvider";

const Application = () => {
  const { user } = useContext(AuthContext);
  const { applications } = useLoaderData();

  // console.log(navigation.state);

  // State for search query and filtered applications
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredApplications, setFilteredApplications] = useState([]);

  // Filter user's applications based on email
  const userApplications = applications.filter(
    (app) => app.email === user?.email
  );

  // Handle search functionality
  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFilteredApplications(userApplications); // Show all if input is empty
    } else {
      const filtered = userApplications.filter((app) =>
        (app.visa?.countryName || "")
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
      setFilteredApplications(filtered);
    }
  };

  // Initialize filtered applications with user's applications
  useEffect(() => {
    setFilteredApplications(userApplications);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Applications - VisaNavigator</title>
        <meta name="description" content="Learn more about our company." />
        <meta name="keywords" content="about, company, information" />
      </Helmet>

      {/* Page Header */}
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold">Applications</h1>
        <p>Number of Applications: {filteredApplications.length}</p>
      </div>

      {/* Search Input */}
      <div className="flex justify-center items-center mb-6">
        <input
          type="text"
          placeholder="Search by country name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-1/2 px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          onClick={handleSearch}
          className="ml-4 px-6 py-2 btn btn-primary rounded-none"
        >
          Search
        </button>
      </div>

      {/* Applications Grid */}
      <div className="grid md:grid-cols-3 gap-5 my-8">
        {filteredApplications.length > 0 ? (
          filteredApplications.map((app) => (
            <SingleApplication
              key={app._id}
              app={app}
              loadedApplications={filteredApplications}
              setLoadedApplications={setFilteredApplications}
            ></SingleApplication>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No applications found matching the search criteria.
          </p>
        )}
      </div>
    </div>
  );
};

export default Application;
