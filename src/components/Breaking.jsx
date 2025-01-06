import React from "react";
import Marquee from "react-fast-marquee";

const Breaking = () => {
  return (
    <div className="bg-blue-50 p-7">
      <h2 className="text-4xl font-bold text-[#4A00FF] mb-4">We Work For</h2>
      <div className="bg-white py-3">
        <Marquee>
          <p>
            <strong>Popular Destinations:</strong> United States, Canada, United
            Kingdom, Australia, New Zealand, Germany, France, Italy, Spain,
            Japan.
          </p>
          <p></p>
          <p>
            <strong>Emerging Travel Destinations:</strong> South Korea,
            Singapore, Thailand, Malaysia, Indonesia, Vietnam, Brazil, Mexico,
            South Africa, Turkey.
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default Breaking;
