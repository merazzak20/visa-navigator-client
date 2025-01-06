import React from "react";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

const AboutSection = () => {
  return (
    <div id="about">
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {/* Mission Statement */}
            <div className="max-w-3xl mx-auto  p-8  rounded-lg mb-10 text-justify">
              <Slide>
                <h3 className="text-4xl font-bold text-[#4A00FF] mb-4">
                  About Us
                </h3>
              </Slide>

              <Fade>
                <p className="text-lg text-gray-700">
                  "VisaNavigator is a trusted online platform dedicated to
                  simplifying the global visa application process. We aim to
                  make international travel accessible by providing clear and
                  up-to-date visa information, seamless application processes,
                  and real-time tracking."
                </p>

                <p className="text-lg text-gray-700 mt-4">
                  "Behind VisaNavigator is a passionate and experienced team of
                  travel enthusiasts, technology experts, and customer service
                  professionals dedicated to improving the visa application
                  experience. We are constantly evolving and improving to meet
                  the needs of our global users."
                </p>
              </Fade>

              <Link className="btn btn-primary rounded-none mt-4">
                Read More
              </Link>
            </div>

            {/* How Users Learn Vocabulary */}
            <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
              <div className="mb-5">
                <h2 className="text-2xl font-semibold text-[#06283d]">
                  Mission
                </h2>
                <p>
                  Our mission is to empower travelers with the tools they need
                  to navigate visa requirements effortlessly, ensuring that
                  obtaining a visa is as simple and stress-free as possible. We
                  aim to provide a reliable and secure platform for visa
                  applications, offering real-time updates and personalized
                  guidance every step of the way.
                </p>
              </div>

              <div className="mt-5">
                <h2 className="text-2xl font-semibold text-[#06283d]">
                  Vision
                </h2>
                <p>
                  To become the leading platform for visa-related services
                  worldwide, bridging the gap between travelers and their
                  destinations, and helping people explore the world with ease
                  and confidence.
                </p>
              </div>

              <div className="mt-5">
                <h2 className="text-2xl font-semibold text-[#06283d]">
                  Values
                </h2>
                <p>
                  <span className="font-bold">Transparency:</span> We provide
                  clear, accurate, and timely visa information.
                </p>
                <p>
                  <span className="font-bold">Security:</span> We prioritize the
                  protection of your personal and application data with the
                  highest standards of security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
