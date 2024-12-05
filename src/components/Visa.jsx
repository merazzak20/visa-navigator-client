import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Visa = ({ visa }) => {
  const {
    countryImage,
    countryName,
    visaType,
    processingTime,
    fee,
    validity,
    applicationMethod,
  } = visa;
  //     Country.
  // Country image.
  // Visa_type.
  // Processing_time.
  // Fee.
  // Validity.
  // Application_method.
  // “See Details” button.

  return (
    <div className="card bg-base-100  shadow-xl">
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
          <button className="btn btn-outline btn-primary ">
            See Details <MdOutlineKeyboardDoubleArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Visa;
