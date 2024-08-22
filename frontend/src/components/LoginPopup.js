import React from "react";

function LoginPopup({ changeModel }) {
  const handleSignUp=()=>{
     window.location.href = "http://localhost:3001/api/auth/gmail";
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold mb-3 text-center flex-1">
            Sign in
          </h2>
          <div onClick={() => changeModel(false)} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <p className="text-center">
          Sign in to save your reply and access them anytime
        </p>
        <button
          type="button"
          onClick={handleSignUp}
          className="w-full flex items-center justify-center mt-3 bg-white text-black p-3 rounded-lg hover:bg-[#1a1a2e] hover:text-white transition-colors duration-200"
        >
          <img
            className="w-10 h-8 mr-2"
            src="https://cdn.arstechnica.net/wp-content/uploads/2018/07/Chrome-Logo-800x652.png"
            alt="Google Logo"
          />
          <span className="text-sm font-medium">Sign in Using Google</span>
        </button>
      </div>
    </div>
  );
}

export default LoginPopup;
