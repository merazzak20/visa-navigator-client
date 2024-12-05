import React from "react";

const FAQ = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold my-10">FAQ's</h2>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            How do I check visa requirements for my destination?
          </div>
          <div className="collapse-content">
            <p>
              To check visa requirements, simply enter your nationality,
              destination country, and the purpose of your visit. Our system
              will provide you with the latest visa information for your
              specific situation.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            How do I apply for a visa through VisaNavigator?
          </div>
          <div className="collapse-content">
            <p>
              After checking your visa requirements, you can fill out the online
              application form. Follow the step-by-step instructions, upload the
              required documents, and submit your application for processing.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            How long does the visa application process take?
          </div>
          <div className="collapse-content">
            <p>
              The processing time depends on the country and visa type. We
              provide estimated processing times for each visa application, and
              you can track the status in real-time once you’ve submitted your
              application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
