import React, { useState, useEffect } from "react";

const SkillsAddSection = ({ value, onChange, disabled }) => {
  const [allSkills, setAllSkills] = useState(value || []);
  const [skills, setSkills] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    setAllSkills(value || []);
  }, [value]);

  const addSkill = () => {
    if (skills.trim() === "") {
      setError("Skill cannot be empty.");
    } else if (skills.length > 15) {
      setError("Skill must be less than 15 characters.");
    } else if (allSkills.includes(skills.trim())) {
      setError("Skill already added.");
    } else {
      setAllSkills((prev) => [...prev, skills.trim()]);
      onChange([...allSkills, skills.trim()]);
      setSkills(""); // Clear input after adding
      setError(null); // Clear error message
    }
  };

  const removeSkill = (index) => {
    const updatedSkills = allSkills.filter((_, i) => i !== index);
    setAllSkills(updatedSkills);
    onChange(updatedSkills);
  };

  return (
    <div>
      <label className="block text-lg font-medium text-gray-700">Skills</label>
      {/* Map over allSkills to render each skill */}
      <div className="flex flex-wrap mt-2">
        {allSkills.map((skill, index) => (
          <p
            key={index}
            onClick={() => removeSkill(index)}
            className="bg-black px-3 py-1 mb-2 mr-3 text-white rounded cursor-pointer hover:bg-gray-800"
          >
            {skill}
          </p>
        ))}
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div className="flex">
        <input
          type="text"
          value={skills}
          id="skill"
          name="skill"
          onChange={(e) => setSkills(e.target.value)}
          className="flex-1 mr-2 border border-gray-300 rounded-md shadow-sm p-2"
          disabled={disabled}
        />
        <button
          type="button"
          onClick={addSkill}
          className="bg-green-500 mt-2 text-white px-4 py-2 rounded-lg"
          disabled={disabled} // Disable the button if input is disabled
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SkillsAddSection;
