import React from "react";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <div className=" mx-auto sticky top-0 bg-white z-50 shadow-md transition-all duration-300 ">
        <Navbar></Navbar>
      </div>
      <div className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
      <div className="mt-10">
        <Footer></Footer>
      </div>
      <ToastContainer />
    </div>
  );
};

export default HomeLayout;
