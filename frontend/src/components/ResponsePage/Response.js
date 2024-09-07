import React, { useState } from "react";

function ResumeBuilder() {
  const [name, setName] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");
  const [output, setOutput] = useState(""); // State for the resume output
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Mock AI resume generation logic
    setTimeout(() => {
      const generatedResume = `
        Name: ${name}\n
        Work Experience:\n${workExperience}\n
        Education:\n${education}\n
        Skills:\n${skills}
      `;
      setOutput(generatedResume);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      {/* Form Section */}
      <div className="flex justify-center items-center mb-9">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <p className="text-center mt-9 mb-8 text-3xl">
            Build Your Resume with AI
          </p>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-xl font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-4 block p-2 w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="workExperience"
              className="block text-xl font-medium text-gray-700"
            >
              Work Experience
            </label>
            <textarea
              id="workExperience"
              name="workExperience"
              rows="4"
              placeholder="Enter Your Work Experience"
              value={workExperience}
              onChange={(e) => setWorkExperience(e.target.value)}
              className="mt-4 block p-2 w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="education"
              className="block text-xl font-medium text-gray-700"
            >
              Education
            </label>
            <textarea
              id="education"
              name="education"
              rows="4"
              placeholder="Enter Your Education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="mt-4 block p-2 w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="skills"
              className="block text-xl font-medium text-gray-700"
            >
              Skills
            </label>
            <input
              type="text"
              id="skills"
              name="skills"
              placeholder="Enter Your Skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="mt-4 block p-2 w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-[#3c3874] text-white p-2 rounded-lg flex items-center hover:bg-[#0d0c22] transition duration-300 ease-in-out"
          >
            <span className="text-lg font-semibold mx-1">Generate Resume</span>
          </button>
        </form>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-full max-w-md">
          <p className="text-center text-2xl font-bold mb-4">
            Generated Resume:
          </p>
          <div className="p-4 border border-gray-300 rounded-md shadow-sm">
            {loading ? (
              <p className="text-gray-500">Generating...</p>
            ) : output ? (
              <pre>{output}</pre>
            ) : (
              <p className="text-gray-500">
                Your generated resume will appear here.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;
