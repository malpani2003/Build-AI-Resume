import React, { useState, useEffect } from "react";
import SkillsAddSection from "./skillsAddSection";
import PersonalDetailsSection from "./PersonalDetails";
import WorkExperienceSection from "./WorkExprienceSection"; // Renamed for consistency
import EducationComponents from "./EducationComponents";

const initialResumeData = {
  name: "John Doe",
  email: "john.doe@example.com",
  title: "Senior Full Stack Developer | Cloud Architect",
  phone: "+1-234-567-8901",
  address: "123 Main St, Silicon Valley, CA, USA",
  summary: `
    A results-driven Senior Full Stack Developer with 8+ years of experience building responsive web applications and interactive features that drive business growth. Proficient in JavaScript, React, Node.js, and AWS, with a proven track record of delivering high-quality cloud-native applications. Adept at leading cross-functional teams and mentoring junior developers. Passionate about learning new technologies and solving complex problems.
  `,
  workExperience: [
    "Led a team of 10 developers in the redesign and development of a scalable web application serving 1M+ users",
    "Developed and maintained full-stack applications using React, Node.js, MongoDB, and AWS",
  ],
  projects: [
    {
      name: "E-Commerce Platform",
      description: `
        Developed a fully responsive, cloud-native e-commerce platform using React, Node.js, and AWS. Integrated Stripe for payment processing and optimized the platform for high traffic and fast load times, serving over 500k users globally.
      `,
    },
    {
      name: "Real-Time Collaboration Tool",
      description: `
        Led the development of a real-time collaboration tool using WebSockets, React, and Node.js. Enabled real-time document editing and file sharing, enhancing remote team collaboration across multiple time zones.
      `,
    },
  ],
  giturl: "https://github.com/johndoe",
  linkedlnURL: "https://www.linkedin.com/in/johndoe",
  portfolio: "https://johndoe.dev",
  education: [
    {
      id: 1,
      Year: "2018",
      Degree: "B.Tech in Computer Science",
      Institute: "IIIT Kota",
      CGPA: "8.75",
    },
    {
      id: 2,
      Year: "2021",
      Degree: "M.Tech in Software Engineering",
      Institute: "IIIT Bangalore",
      CGPA: "9.2",
    },
  ],
  certifications: [
    "AWS Certified Solutions Architect",
    "Certified Kubernetes Administrator",
    "Google Cloud Professional DevOps Engineer",
  ],
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "AWS",
    "Docker",
    "Kubernetes",
    "Microservices",
    "CI/CD",
    "REST APIs",
    "MongoDB",
    "SQL",
    "GraphQL",
    "TypeScript",
  ],
  languages: ["English (Fluent)", "Spanish (Intermediate)", "German (Basic)"],
  interests: ["Open Source Contributions", "Blockchain", "AI/ML", "Traveling"],
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
    console.log(name,value);
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
    console.log(theme);
    const generatedResume = `
      <div>
      <div class="bg-${theme}-500 h-3 max-w-3xl"></div>
      <div class="flex flex-col bg-gray-100 shadow-lg max-w-2xl mx-auto p-4">
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
  
        <section class="mb-4">
          <h2 class="text-2xl font-semibold text-${theme}-500 mb-2">Summary</h2>
          <p class="text-gray-700 overflow-x break-all">${resumeData.summary}</p>
        </section>
      
        <section class="mb-4">
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
  
        <section class="mb-4">
          <h2 class="text-2xl font-semibold text-${theme}-500 mb-2">Work Experience</h2>
          <ul class="list-disc pl-5 text-gray-700">
            ${resumeData.workExperience
              .map((exp, index) => `<li key=${index}>${exp}</li>`)
              .join("")}
          </ul>
        </section>
      
        <section class="mb-4">
          <h2 class="text-2xl font-semibold text-${theme}-500 mb-2">Skills</h2>
          <div class="grid grid-cols-3 gap-3">
            ${resumeData.skills
              .map((skill) => {
                const skillParts = skill.split(":");
                const skillName = skillParts[0];
                const skillLevel = parseInt(skillParts[1], 10) || 55; // Fallback to 50 if parsing fails
                return `
                  <div class="mb-2">
                    <div class="flex items-center justify-between">
                      <span class="w-32 font-semibold">${skillName}</span>
                      <span class="text-sm text-gray-600">${skillLevel}%</span>
                    </div>
                    <div class="w-full h-2 bg-gray-300 rounded">
                      <div class="bg-${theme}-400 h-2 rounded" style="width: ${skillLevel}%"></div>
                    </div>
                  </div>`;
              })
              .join("")}
          </div>
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
          <button
            type="button"
            onClick={() => handlePageChange(page > 0 ? page - 1 : 0)}
            className={`${
              page === 0 ? "bg-gray-300" : "bg-gray-400"
            } text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition`}
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
          <button
            type="button"
            onClick={() => handlePageChange(page < 4 ? page + 1 : 4)}
            className={`${
              page === 3 ? "bg-gray-200" : "bg-gray-300"
            } text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition`}
            disabled={loading || page === 4}
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
          <div>
            <label htmlFor="summary" className="text-gray-800 text-xl font-bold">Summary</label>
            <textarea
              id="summary"
              name="summary"
              rows="4"
              maxLength={200}
              placeholder="Enter Your Summary"
              value={resumeData.summary}
              onChange={handleChange}
              className="block w-full p-1 h-56 border border-gray-300 rounded-md overflow-hidden shadow-sm mt-2 resize-none"
              disabled={loading}
              required
            />
            <button className="bg-blue-600 p-2 mt-2 text-white font-semibold rounded">Improve from AI</button>
          </div>
        )}
        {page === 2 && (
          <WorkExperienceSection
            data={resumeData.workExperience}
            onChange={handleAddExperience}
            disabled={loading}
          />
        )}
        {page === 3 && (
          <EducationComponents
            data={resumeData.education}
            onChange={handleEducationChange}
            disabled={loading}
          />
        )}
        {page === 4 && (
          <div>
            <SkillsAddSection
              disabled={loading}
              value={resumeData.skills}
              onChange={handleSkillsChange}
            />
          </div>
        )}

        {/* Submit Button */}
        {page === 4 && (
          <button
            type="submit"
            className="bg-blue-600 p-2 mt-2 text-white font-semibold rounded transition duration-300 ease-in-out w-52 hover:bg-blue-900"
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
