import React, { useState, useEffect } from "react";

const SkillsAddSection = ({ value, onChange, disabled }) => {
  const [allSkills, setAllSkills] = useState(value || []);
  const [skills, setSkills] = useState("");
  const [skillLevel, setSkillLevel] = useState(50);
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
      const updatedSkills = [...allSkills, skills.trim() + ":" + skillLevel];
      setAllSkills(updatedSkills);
      onChange(updatedSkills);
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
    <div className="p-4 bg-white rounded-lg shadow-md">
      <label className="block text-lg font-semibold text-gray-700 mb-2">
        Skills
      </label>
      {/* Render existing skills */}
      <div className="flex flex-wrap mb-4">
        {allSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center bg-blue-300 px-4 py-2 mb-2 mr-2 text-black rounded-lg transition"
          >
            <span>{skill.split(":")[0]}</span>
            <button
              onClick={() => removeSkill(index)}
              className="ml-2 text-red-400 hover:text-red-900 focus:outline-none cursor-pointer"
            >
              &times; {/* This is the 'X' button to remove the skill */}
            </button>
          </div>
        ))}
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="flex-1 border border-gray-300 rounded-md p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Skill Name"
          disabled={disabled}
        />
        <label htmlFor="skillLevel" className="sr-only">
          Skill Level
        </label>
        <input
          type="range"
          id="skillLevel"
          onChange={(e) => setSkillLevel(e.target.value)}
          value={skillLevel}
          max={100}
          min={10}
          className="w-24"
          aria-labelledby="skillLevel"
        />
        <span className="ml-2 text-gray-600">{skillLevel}%</span>
      </div>
      <button
        type="button"
        onClick={addSkill}
        className={`bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={disabled} // Disable the button if input is disabled
      >
        Add Skill
      </button>
    </div>
  );
};

export default SkillsAddSection;
