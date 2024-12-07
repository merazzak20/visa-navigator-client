import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const MyVisa = ({ visa, loadedVisa, setLoadedVisa }) => {
  const [editableVisa, setEditableVisa] = useState(null);
  const [formData, setFormData] = useState([]);
  const {
    _id,
    countryImage,
    countryName,
    visaType,
    ageRestriction,
    processingTime,
    fee,
    validity,
    applicationMethod,
  } = visa;
  // console.log(loadedVisa);
  const handleDelete = (_id) => {
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
        fetch(`https://assignment10-server-two.vercel.app/visas/${_id}`, {
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

              // update the loaded visa state
              const remainingVisa = loadedVisa.filter(
                (visa) => visa._id !== _id
              );
              setLoadedVisa(remainingVisa);
            }
          });
      }
    });
  };

  const handleChange = (e) => {
    const newvisa = e.target.value;
    if (e.target.checked) {
      setFormData((previsa) => [...previsa, newvisa]);
    } else {
      setFormData((previsa) => previsa.filter((visa) => visa !== newvisa));
    }
  };

  const handleUpdate = (e, _id) => {
    e.preventDefault();
    // console.log(_id);

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

    const updateVisa = {
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
    // console.log(updateVisa);

    // send data to the server and database
    fetch(`https://assignment10-server-two.vercel.app/visas/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        document.getElementById(`id-${_id}`).close();
        // console.log(data);
        if (data.modifiedCount) {
          // console.log("successfully updated");
          Swal.fire({
            title: "Success!",
            text: "Visa updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      });
  };

  console.log(_id);

  return (
    <div className="card bg-base-100  shadow-xl">
      <div>
        <figure>
          {countryImage && (
            <img className="w-full h-[200px] object-cover" src={countryImage} />
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
          </div>

          <div className="card-actions justify-end">
            <button
              onClick={() => {
                setEditableVisa(loadedVisa); // Set the selected visa's data
                document.getElementById(`id-${_id}`).showModal(); // Open the modal
              }}
              className="btn btn-sm btn-outline btn-primary "
            >
              <FaEdit />
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-sm btn-outline btn-primary "
            >
              <MdDelete />
            </button>
          </div>
        </div>

        {/* Modal */}
        <dialog
          id={`id-${_id}`}
          className="modal modal-bottom sm:modal-middle "
        >
          <div className="modal-box ">
            <form onSubmit={(e) => handleUpdate(e, _id)} className="space-y-4 ">
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
                    //   defaultValue={editableVisa?.countryImage}
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
                    //   defaultValue={editableVisa?.countryName}
                    value={formData.countryName}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                    //   required
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
                    //   defaultValue={visaType}
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
                    //   defaultValue={processingTime}
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
                    //   defaultValue={ageRestriction}
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
                    // defaultValue={fee}
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
                    //   defaultValue={validity}
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
                    defaultValue={applicationMethod}
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
                Update
              </button>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MyVisa;
