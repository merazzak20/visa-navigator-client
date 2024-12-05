import React, { useState } from "react";
import Visa from "./Visa";
import { Link } from "react-router-dom";

const VisaSection = ({ visas }) => {
  const [loadedVisas, setLoadedVisas] = useState(visas);

  return (
    <div>
      <div className="info text-center">
        <h1 className="text-4xl font-bold  text-[#4A00FF]">
          All Available Visas
        </h1>
        {/* <p className="text-xl mt-3 font-medium">
          Number of Visa: {loadedVisas.length}
        </p> */}
      </div>
      <div className="grid md:grid-cols-3 gap-5 my-8">
        {loadedVisas.map((visa) => (
          <Visa key={visa._id} visa={visa}></Visa>
        ))}
      </div>

      <div className=" text-center">
        <Link to="/allvisas">
          {" "}
          <button className="btn btn-primary rounded-none my-4">
            See all visas
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VisaSection;
