import React, { useState, useEffect } from "react";
import SkillsAddSection from "./skillsAddSection";
import PersonalDetailsSection from "./PersonalDetails";
import WorkExperienceSection from "./WorkExprienceSection"; // Renamed for consistency

const initialResumeData = {
  name: "John Doe",
  email: "john.doe@example.com",
  title: "Full Stack Developer",
  phone: "+1-234-567-8901",
  address: "123 Main St, Anytown, USA",
  summary: "Versatile Full Stack Developer with 6 years of experience...",
  workExperience: [
    "Software Developer at TechCorp from Jan 2018 to Present...",
  ],
  giturl: "https://github.com/johndoe",
  linkedlnURL: "https://www.linkedin.com/in/johndoe",
  portfolio: "https://johndoe.com",
  education: [
    {
      id: 1,
      Year: "2020",
      Degree: "BTech",
      Institute: "IIIT Kota",
      CGPA: "8.88",
    },
    {
      id: 2,
      Year: "2026",
      Degree: "MTech",
      Institute: "IIIT Kota",
      CGPA: "9.00",
    },
  ],
  skills: ["JavaScript", "React", "Node.js", "CSS"],
};

const FormSection = ({ setOutput, theme }) => {
  const [page, setPage] = useState(0);
  const [resumeData, setResumeData] = useState(initialResumeData);
  const [loading, setLoading] = useState(false);

  const fetchResumeData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(initialResumeData);
      }, 1000);
    });
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchResumeData();
        setResumeData(data);
      } catch (error) {
        console.error("Error fetching resume data:", error);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    updateOutput();
  }, [theme, resumeData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEducationChange = (id, field, value) => {
    setResumeData((prevData) => {
      const newData = {
        ...prevData,
        education: prevData.education.map((edu) =>
          edu.id === id ? { ...edu, [field]: value } : edu
        ),
      };
      return newData;
    });
  };

  const handleAddExperience = (newExperience) => {
    setResumeData((prevData) => ({
      ...prevData,
      workExperience: newExperience,
    }));
  };

  const handleSkillsChange = (newSkills) => {
    setResumeData((prevData) => ({
      ...prevData,
      skills: newSkills,
    }));
  };

  const updateOutput = () => {
    const generatedResume = `
      <div>
      <div class="bg-${theme}-500 h-2"></div>
      <div class="flex flex-col bg-gray-100 shadow-lg max-w-3xl mx-auto p-4">
        <section class="text-center mb-3">
          <p class="text-4xl font-bold text-gray-800 mb-2">${
            resumeData.name
          }</p>
          <p class="text-xl text-gray-600">${resumeData.title}</p>
          <div class="flex justify-center space-x-4">
            <p class="text-gray-700">Email: <a href="mailto:${
              resumeData.email
            }" class="text-blue-600">${resumeData.email}</a></p>
            <p class="text-gray-700">Phone: ${resumeData.phone}</p>
          </div>
          <p class="text-gray-700">Address: ${resumeData.address}</p>
          <p class="text-lg text-gray-600">
            <a href="${
              resumeData.linkedlnURL
            }" class="text-blue-600" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
            <a href="${
              resumeData.giturl
            }" class="text-blue-600" target="_blank" rel="noopener noreferrer">GitHub</a> |
            <a href="${
              resumeData.portfolio
            }" class="text-blue-600" target="_blank" rel="noopener noreferrer">Portfolio</a>
          </p>
        </section>

        <section class="mb-6">
          <h2 class="text-2xl font-semibold text-${theme}-500 mb-2">Summary</h2>
          <p class="text-gray-700 whitespace-pre-line">${resumeData.summary}</p>
        </section>
      
        <section class="mb-6">
          <h2 class="text-2xl font-semibold text-${theme}-500 mb-2">Education</h2>
          <table class="min-w-full bg-white">
            <thead>
              <tr class="w-full bg-gray-200">
                <th class="py-2 text-center">Year</th>
                <th class="py-2 text-center">Degree/Certificate</th>
                <th class="py-2 text-center">Institute</th>
                <th class="py-2 text-center">CGPA/%</th>
              </tr>
            </thead>
            <tbody>
              ${resumeData.education
                .map(
                  (edu) => `
                    <tr>
                      <td class="py-2 text-center">${edu.Year}</td>
                      <td class="py-2 text-center">${edu.Degree}</td>
                      <td class="py-2 text-center">${edu.Institute}</td>
                      <td class="py-2 text-center">${edu.CGPA}</td>
                    </tr>`
                )
                .join("")}
            </tbody>
          </table>
        </section>

        <section class="mb-6">
          <h2 class="text-2xl font-semibold text-${theme}-500 mb-2">Work Experience</h2>
          <ul class="list-disc pl-5 text-gray-700">
            ${resumeData.workExperience
              .map((exp, index) => `<li key=${index}>${exp}</li>`)
              .join("")}
          </ul>
        </section>
      
        <section class="mb-6">
          <h2 class="text-2xl font-semibold text-${theme}-500 mb-2">Skills</h2>
          <ul class="list-disc pl-5 text-gray-700">
            ${resumeData.skills
              .map(
                (skill) => `
                <li class="mb-2">
                  <div class="flex items-center">
                    <span class="w-32">${skill}</span>
                      <div class="w-full h-4 bg-gray-600 rounded">
                      <div class="w-60 bg-blue-100 h-4"></div>
                    </div>
                  </div>
                </li>`
              )
              .join("")}
          </ul>
        </section>
      </div>
      </div>
    `;
    setOutput(generatedResume);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    updateOutput(resumeData); // Ensure output is updated on submit
    setLoading(false);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Build Your Resume with AI</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Page Navigation */}
        <div className="flex justify-between mb-4">
          {page !== 0 && (
            <button
              type="button"
              onClick={() => handlePageChange(page > 0 ? page - 1 : 0)}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
              disabled={loading || page === 0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                />
              </svg>
            </button>
          )}
          {page !== 3 && (
            <button
              type="button"
              onClick={() => handlePageChange(page < 3 ? page + 1 : 3)}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
              disabled={loading || page === 3}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Conditional Rendering Based on Page */}
        {page === 0 && (
          <PersonalDetailsSection
            data={resumeData}
            onChange={handleChange}
            disabled={loading}
          />
        )}

        {page === 1 && (
          <WorkExperienceSection
            data={resumeData.workExperience}
            onChange={handleAddExperience}
            disabled={loading}
          />
        )}

        {page === 2 && (
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Education
            </h3>
            {resumeData.education.map((edu, index) => (
              <div key={edu.id} className="mb-4">
                <h1 className="my-2 font-semibold">
                  Education Details {index + 1}
                </h1>
                <label className="block text-sm font-medium text-gray-700">
                  Degree
                </label>
                <input
                  type="text"
                  value={edu.Degree}
                  onChange={(e) =>
                    handleEducationChange(edu.id, "Degree", e.target.value)
                  }
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  disabled={loading}
                />
                <label className="block text-sm font-medium text-gray-700 mt-2">
                  Institute
                </label>
                <input
                  type="text"
                  value={edu.Institute}
                  onChange={(e) =>
                    handleEducationChange(edu.id, "Institute", e.target.value)
                  }
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  disabled={loading}
                />
                <label className="block text-sm font-medium text-gray-700 mt-2">
                  Year
                </label>
                <input
                  type="text"
                  value={edu.Year}
                  onChange={(e) =>
                    handleEducationChange(edu.id, "Year", e.target.value)
                  }
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  disabled={loading}
                />
                <label className="block text-sm font-medium text-gray-700 mt-2">
                  CGPA
                </label>
                <input
                  type="text"
                  value={edu.CGPA}
                  onChange={(e) =>
                    handleEducationChange(edu.id, "CGPA", e.target.value)
                  }
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  disabled={loading}
                />
              </div>
            ))}
          </div>
        )}

        {page === 3 && (
          <div>
            <SkillsAddSection
              disabled={loading}
              value={resumeData.skills}
              onChange={handleSkillsChange}
            />
          </div>
        )}

        {/* Submit Button */}
        {page === 3 && (
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out w-full"
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Resume"}
          </button>
        )}
      </form>
    </div>
  );
};

export default FormSection;
