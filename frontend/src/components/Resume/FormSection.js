import React, { useState } from "react";

const FormSection = ({ setOutput }) => {
  const [resumeData, setResumeData] = useState({
    name: "",
    workExperience: "",
    education: "",
    skills: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Mock AI resume generation logic
    setTimeout(() => {
      const generatedResume = `
        Name: ${resumeData.name}\n
        Work Experience:\n${resumeData.workExperience}\n
        Education:\n${resumeData.education}\n
        Skills:\n${resumeData.skills}
      `;
      setOutput(generatedResume);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Build Your Resume with AI</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            value={resumeData.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            disabled={loading}
            required
          />
        </div>

        {/* Work Experience */}
        <div>
          <label
            htmlFor="workExperience"
            className="block text-lg font-medium text-gray-700"
          >
            Work Experience
          </label>
          <textarea
            id="workExperience"
            name="workExperience"
            rows="4"
            placeholder="Enter Your Work Experience"
            value={resumeData.workExperience}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            disabled={loading}
            required
          />
        </div>

        {/* Education */}
        <div>
          <label htmlFor="education" className="block text-lg font-medium text-gray-700">
            Education
          </label>
          <textarea
            id="education"
            name="education"
            rows="4"
            placeholder="Enter Your Education"
            value={resumeData.education}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            disabled={loading}
            required
          />
        </div>

        {/* Skills */}
        <div>
          <label htmlFor="skills" className="block text-lg font-medium text-gray-700">
            Skills
          </label>
          <input
            type="text"
            id="skills"
            name="skills"
            placeholder="Enter Your Skills"
            value={resumeData.skills}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            disabled={loading}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out w-full"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Resume"}
        </button>
      </form>
    </div>
  );
};

export default FormSection;
