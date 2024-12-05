import React from "react";

const Modal = () => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg text-center mb-4">Register</h3>
          <form className="space-y-4">
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="photo-url"
              >
                Photo URL
              </label>
              <input
                id="photo-url"
                type="text"
                placeholder="photo url"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="email"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="password"
                className="input input-bordered w-full"
              />
              <p className="text-sm text-gray-500 mt-1">
                Password must contain at least one uppercase, one lowercase
                letter, and be at least 6 characters.
              </p>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full bg-purple-700 text-white hover:bg-purple-800"
            >
              Register
            </button>
          </form>
          <div className="modal-action mt-4">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
