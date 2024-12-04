import React from "react";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
      <ToastContainer />
    </div>
  );
};

export default HomeLayout;
