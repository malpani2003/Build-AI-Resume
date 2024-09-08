import React from "react";

const EducationComponents = ({ data, onChange, disabled }) => {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-700 mb-2">Education</h3>
      {data.map((edu, index) => (
        <div key={edu.id} className="mb-4">
          <h1 className="my-2 font-semibold">Education Details {index + 1}</h1>
          <label className="block text-sm font-medium text-gray-700">
            Degree
          </label>
          <input
            type="text"
            value={edu.Degree}
            onChange={(e) => onChange(edu.id, "Degree", e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            disabled={disabled}
          />
          <label className="block text-sm font-medium text-gray-700">
            Year
          </label>
          <input
            type="text"
            value={edu.Year}
            onChange={(e) => onChange(edu.id, "Year", e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            disabled={disabled}
          />
          <label className="block text-sm font-medium text-gray-700 mt-2">
            Institute
          </label>
          <input
            type="text"
            value={edu.Institute}
            onChange={(e) =>onChange (edu.id, "Institute", e.target.value)
            }
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            disabled={disabled}
          />
        </div>
      ))}
    </div>
  );
};

export default EducationComponents;
