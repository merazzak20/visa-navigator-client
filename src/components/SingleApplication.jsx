import React from "react";

const SingleApplication = ({ app }) => {
  const { email, fName, lName, date, visa } = app;
  console.log(app);
  return (
    <div>
      <div className="card bg-base-100 mx-auto shadow-xl">
        <figure>
          {visa?.countryImage && (
            <img
              className="w-full h-[350px] object-cover"
              src={visa.countryImage}
            />
          )}
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">
            {visa?.countryName}
            <div className="badge badge-primary p-2 py-3 ml-5">
              {visa?.visaType}
            </div>
          </h2>
          {/* Row 1 */}
          <div className="">
            <p className="font-medium text-gray-600">
              Processing Time: {visa?.processingTime}
            </p>

            <p className="font-medium text-gray-600">
              Fee: {visa?.fee ? <span>{visa.fee}</span> : <span>0</span>} Taka
            </p>
            <p className="font-medium text-gray-600">
              Validity: {visa?.validity}
            </p>
            <p className="font-medium text-gray-600">
              Applicatin Method:{" "}
              {visa?.applicationMethod ? (
                <span>{visa.applicationMethod}</span>
              ) : (
                <span>N/A</span>
              )}
            </p>
            <p className="font-medium text-gray-600">Date: {date}</p>
            <p className="font-medium text-gray-600">Name: {fName + lName}</p>
            <p className="font-medium text-gray-600">Email: {email}</p>
          </div>

          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-primary ">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleApplication;
