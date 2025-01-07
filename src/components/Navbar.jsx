import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { user, userSignOut } = useContext(AuthContext);

  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        // Sign-out successful
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className="hover:text-primary">
          Home
        </NavLink>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#faq">FAQ</a>
      </li>
      <li>
        <NavLink to="/allvisas" className="hover:text-primary">
          All Visas
        </NavLink>
      </li>
    </>
  );
  const privateLinks = (
    <>
      <li>
        <NavLink to="/" className="hover:text-primary">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allvisas" className="hover:text-primary">
          All Visas
        </NavLink>
      </li>
      <li>
        <NavLink to="/addvisas" className="hover:text-primary">
          Add Visa
        </NavLink>
      </li>
      <li>
        <NavLink to="/myAddVisas" className="hover:text-primary">
          My Added Visas
        </NavLink>
      </li>
      <li>
        <NavLink to="/application" className="hover:text-primary">
          My Visa Application
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-white">
      <div className="navbar bg-base-100 w-11/12 mx-auto">
        {/* Navbar Start */}
        <div className="navbar-start ">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow flex flex-col gap-2"
            >
              {user ? privateLinks : links}
            </ul>
          </div>
          <Link to="/">
            <a className="text-2xl font-bold text-[#4a00ff]">VisaNavigator</a>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            {user ? privateLinks : links}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center space-x-2">
          {/* User Info and Logout */}
          {user?.photoURL ? (
            <div
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={user.photoURL}
                alt="User Profile"
              />
              {isHovered && (
                <div className="absolute top-12 -left-4 bg-white rounded shadow-md p-2 flex flex-col items-center">
                  <button
                    onClick={handleSignOut}
                    className="btn btn-primary rounded-none"
                  >
                    Logout
                  </button>
                  <p className="text-red-500 mt-2 font-bold">
                    {user.displayName}
                  </p>
                </div>
              )}
            </div>
          ) : (
            // Login & Register Buttons
            <div className="flex space-x-2">
              <Link to="/login" className="btn btn-primary rounded-none">
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-outline btn-primary rounded-none"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
