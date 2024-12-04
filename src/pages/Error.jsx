import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-7xl font-bold">404</h1>
          <p className="py-6">Opps! This page is not found</p>
          <Link to="/" className="btn btn-primary rounded-none">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
