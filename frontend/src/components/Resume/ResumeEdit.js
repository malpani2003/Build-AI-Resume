import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FormSection from "./FormSection";

function ResumeEdit() {
  const { resumeId } = useParams();
  const [output, setOutput] = useState(""); 
  const [loading, setLoading] = useState(false); 
  const [colorTheme, setColorTheme] = useState("red");
  const [hideForm, setHideForm] = useState(false);

  useEffect(() => {
    if (resumeId) {
      console.log(`Editing Resume ID: ${resumeId}`);
    }
  }, [resumeId]);

  const handleFullScreen = () => {
    // navigate("/resume-full-screen");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Resume Editor {resumeId ? `for Resume ID: ${resumeId}` : ""}
      </h1>
      <div className={`flex flex-col md:flex-row ${!hideForm ? "gap-6" : ""}`}>
        {/* Form Section */}
        {!hideForm && (
          <div className="flex-1">
            <FormSection setOutput={setOutput} theme={colorTheme} />
          </div>
        )}

        {/* Output Section */}
        <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-lg">
          <div className="flex flex-row justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Generated Resume</h2>
            <div className="flex space-x-2">
              <button
                className="w-5 h-5 bg-red-400 rounded-full cursor-pointer"
                onClick={() => setColorTheme("red")}
              ></button>
              <button
                className="w-5 h-5 bg-gray-400 rounded-full cursor-pointer"
                onClick={() => setColorTheme("gray")}
              ></button>
              <button
                className="w-5 h-5 bg-green-400 rounded-full cursor-pointer"
                onClick={() => setColorTheme("green")}
              ></button>
              <button
                className="w-5 h-5 bg-blue-400 rounded-full cursor-pointer"
                onClick={() => setColorTheme("blue")}
              ></button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 cursor-pointer"
                onClick={() => setHideForm(!hideForm)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
                />
              </svg>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: output }}></div>
        </div>
      </div>
    </div>
  );
}

export default ResumeEdit;
