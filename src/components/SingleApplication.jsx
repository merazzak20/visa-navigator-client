import React from "react";
import Swal from "sweetalert2";

const SingleApplication = ({
  app,
  loadedApplications,
  setLoadedApplications,
}) => {
  const { _id, email, fName, lName, date, visa } = app;
  const handleCancel = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/applications/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              // update the loaded coffee state
              const remainingApplication = loadedApplications.filter(
                (app) => app._id !== _id
              );
              setLoadedApplications(remainingApplication);
            }
          });
      }
    });
  };
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
            <button
              onClick={() => handleCancel(_id)}
              className="btn btn-outline btn-primary "
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleApplication;
