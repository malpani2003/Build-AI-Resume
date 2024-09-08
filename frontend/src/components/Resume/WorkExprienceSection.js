import React, { useState, useEffect } from "react";

function WorkExperienceSection({ data, onChange, disabled }) {
  const [workExperience, setWorkExperience] = useState(data || [""]);
  const [text, setText] = useState("");

  // Handle input change in the textarea
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmitBtn = () => {
    const newExperience = text.trim();

    if (newExperience) {
        setWorkExperience((prev) => {
            const updatedExperience = [...prev, newExperience];
            onChange(updatedExperience); // Update parent component or wherever necessary
            console.log(updatedExperience)
            return updatedExperience;
        });
        
        setText(""); // Clear the textarea after adding
    }
  };

  // Update local state when data prop changes
  useEffect(() => {
    setWorkExperience(data || []);
  }, [data]);

  return (
    <div>
      <label
        htmlFor="workExperience"
        className="block text-lg font-bold text-gray-700"
      >
        Work Experience
      </label>
      <div className="flex flex-wrap mt-2">
        {workExperience.map((exp, index) => (
          <div key={index} className="flex justify-between mb-2">
            <p className="px-3 py-1 text-black bg-gray-300 rounded">{exp}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
              onClick={() => {
                // Optional: handle removal of work experience
                setWorkExperience((prev) => prev.filter((val, i) => i !== index));
                onChange(workExperience.filter((_, i) => i !== index));
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        ))}
      </div>
      <textarea
        id="workExperience"
        name="workExperience"
        rows="4"
        placeholder="Enter Your Work Experience"
        value={text}
        onChange={handleChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        disabled={disabled}
        required
      />
      <button
        type="button"
        onClick={handleSubmitBtn}
        className="mt-2 px-4 py-2 bg-blue-600 p-2 text-white font-semibold rounded"
        disabled={disabled}
      >
        Add New Experience
      </button>
    </div>
  );
}

export default WorkExperienceSection;
