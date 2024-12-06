import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import SingleApplication from "../components/SingleApplication";
import { AuthContext } from "../provider/AuthProvider";

const Application = () => {
  const { user } = useContext(AuthContext);
  const { visas, applications } = useLoaderData();
  console.log(applications);
  const [loadedApplications, setLoadedApplications] = useState(applications);

  const userApplications = applications.filter(
    (app) => app.email === user?.email
  );

  return (
    <div>
      <Helmet>
        <title>Applicatios - VisaNavigator</title>
        <meta name="description" content="Learn more about our company." />
        <meta name="keywords" content="about, company, information" />
      </Helmet>
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold">Applications</h1>
        <p>Number of Applications: {userApplications.length}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 my-8">
        {userApplications.length > 0 ? (
          userApplications.map((app) => (
            <SingleApplication
              key={app._id}
              app={app}
              loadedApplications={loadedApplications}
              setLoadedApplications={setLoadedApplications}
            ></SingleApplication>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No applications found for this user.
          </p>
        )}
      </div>
    </div>
  );
};

export default Application;
