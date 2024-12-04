import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Register = () => {
  const {
    createNewUser,
    googleSignIn,
    setUser,
    updateUserProfile,
    userSignOut,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    // console.log(name, photo, email, password);

    if (!regex.test(password)) {
      toast.warn("invalid password");
      return;
    }

    createNewUser(email, password)
      .then((res) => {
        setUser(res.user);
        updateUserProfile({ dispalyName: name, photoURL: photo })
          .then(() => {
            userSignOut();
            navigate("/");
          })
          .catch((error) => {
            // console.log(error);
          });
      })
      .catch((err) => {
        // console.log(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        setUser(res.user);
        // console.log(res.user);
        updateUserProfile({ dispalyName: displayName, photoURL: photoURL })
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            // console.log(error);
          });
      })
      .catch((err) => {
        // console.log(err.message);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Helmet>
        <title>Register - WordTrail</title>
        <meta name="description" content="Learn more about our company." />
        <meta name="keywords" content="about, company, information" />
      </Helmet>
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-center font-semibold text-2xl">
          Register Your Account
        </h2>
        <form onSubmit={handleSignIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="photo url"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <span className="label-text">
                Password has must be one uppercase, one lowercase and must be at
                least 6 caracter
              </span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary rounded-none">Register</button>
          </div>
        </form>
        <div onClick={handleGoogleSignIn} className="mx-auto -mt-5">
          <button className="flex justify-arround items-center gap-4 bg-gray-100 btn">
            <FaGoogle />
            <span className="font-semibold">Login with Google</span>
          </button>
        </div>

        <p className="text-center ">
          Already have an account? Please{" "}
          <Link className="text-red-500" to="/login">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
