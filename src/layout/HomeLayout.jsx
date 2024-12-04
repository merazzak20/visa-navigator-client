import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default HomeLayout;
