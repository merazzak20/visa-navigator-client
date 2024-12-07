import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const VisaDetail = () => {
  const { user } = useContext(AuthContext);
  const visa = useLoaderData();
  const {
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
  } = visa;

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [selectedDate, setSelectedDate] = useState(getCurrentDate());
  // Handle change in the date input
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const fName = form.firstName.value;
    const lName = form.lastName.value;
    const date = form.date.value;
    const fee = form.fee.value;
    // console.log(email, fName, lName, date, fee);

    const newApplication = {
      email,
      fName,
      lName,
      date,
      visa,
      user,
    };
    // console.log(newApplication);

    fetch("https://assignment10-server-two.vercel.app/applications", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("my_modal_5").close();
        if (data.insertedId) {
          // console.log("successfully added");
          toast.success("successfully added");
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Visa Details - VisaNavigator</title>
        <meta name="description" content="Learn more about our company." />
        <meta name="keywords" content="about, company, information" />
      </Helmet>
      <div>
        <h2 className="text-center text-3xl font-bold my-5">Visa Details</h2>
      </div>
      <div className="card bg-base-100 w-1/2 mx-auto shadow-xl">
        <figure>
          {countryImage && (
            <img className="w-full h-[350px] object-cover" src={countryImage} />
          )}
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">
            {countryName}
            <div className="badge badge-primary p-2 py-3 ml-5">{visaType}</div>
          </h2>
          {/* Row 1 */}
          <div className="">
            <p className="font-medium text-gray-600">
              Processing Time: {processingTime}
            </p>
            <p className="font-medium text-gray-600">
              Requirements: {requiredDocuments}
            </p>
            <p className="font-medium text-gray-600">
              Age Restriction: {ageRestriction}
            </p>
            <p className="font-medium text-gray-600">
              Fee: {fee ? <span>{fee}</span> : <span>0</span>} Taka
            </p>
            <p className="font-medium text-gray-600">Validity: {validity}</p>
            <p className="font-medium text-gray-600">
              Applicatin Method:{" "}
              {applicationMethod ? (
                <span>{applicationMethod}</span>
              ) : (
                <span>N/A</span>
              )}
            </p>
            <p className="font-medium text-gray-600">
              Description: {description}
            </p>
          </div>

          <div className="card-actions justify-end">
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn btn-outline btn-primary "
            >
              Apply
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box ">
          <form onSubmit={handleApply} className="space-y-4 ">
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="email"
                defaultValue={user?.email}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="date"
              >
                Date
              </label>
              <input
                id="dateInput"
                type="date"
                name="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="border rounded px-4 py-2"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="fee"
              >
                Fee
              </label>
              <input
                id="fee"
                name="fee"
                type="text"
                defaultValue={fee}
                placeholder="Fee"
                className="input input-bordered w-full"
              />
            </div>
            <div className="modal-action mt-4">
              <button
                type="submit"
                className="btn btn-primary w-full rounded-none text-white "
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default VisaDetail;
