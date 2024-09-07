import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function UserDashboard() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loading, setLoading] = useState(null);
  const navigate=useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsDialogOpen(false);
      navigate("/dashboard/resume/123/edit");
    }, 2000);
  };

  return (
    <>
      <div className="p-10 md:px-20 lg:px-32">
        {/* Heading Section */}
        <h1 className="font-bold text-3xl mb-4">My Resume Dashboard</h1>
        <p className="text-lg mb-6">
          Start exploring and managing your resumes. You can create, view, and
          edit your resumes effortlessly using the AI Resume Builder.
        </p>

        {/* Placeholder for Resume or Content Section */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          <div
            className="bg-blue-500 w-36 h-44 rounded-lg shadow-md flex p-2 flex-col text-center justify-center cursor-pointer font-semibold hover:bg-blue-600 transition"
            onClick={() => setIsDialogOpen(true)}
          >
            <span className="text-white text-3xl">+</span>
            <p className="text-white">Click to Create New Resume</p>
          </div>
          <div className="bg-gray-300 w-36 h-44 rounded-lg shadow-md flex p-2 flex-col text-center justify-center font-semibold">
            <span className="text-gray-700">Resume 1</span>
            <p className="text-gray-700">Click to View</p>
          </div>
          <div className="bg-gray-300 w-36 h-44 rounded-lg shadow-md flex p-2 flex-col text-center justify-center font-semibold">
            <span className="text-gray-700">Resume 2</span>
            <p className="text-gray-700">Click to View</p>
          </div>
          <div className="bg-gray-300 w-36 h-44 rounded-lg shadow-md flex p-2 flex-col text-center justify-center font-semibold">
            <span className="text-gray-700">Resume 3</span>
            <p className="text-gray-700">Click to View</p>
          </div>
        </div>
      </div>

      {isDialogOpen && (
        <div className="fixed bg-opacity-50 bg-gray-700 flex justify-center items-center inset-0">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-5 mb-3">
            <form onSubmit={handleFormSubmit}>
              <label className="text-gray-700 font-semibold text-xl mb-1">
                Resume Title
              </label>
              <input
                type="text"
                className="mt-2 bg-gray-200 px-3 py-2 rounded w-full mb-3"
                placeholder="Full Stack Developer"
                required
              />
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#5444be] text-white px-3 py-1 rounded hover:bg-[#0d0c22]"
                >
                  {loading ? "Creating" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default UserDashboard;
