import React, { useState, useEffect } from "react";
import SkillsAddSection from "./skillsAddSection";
import PersonalDetailsSection from "./PersonalDetails";
import WorkExperienceSection from "./WorkExprienceSection"; // Renamed for consistency
import EducationComponents from "./EducationComponents";
import Templates1 from "../Templates/template1";
// import Templates2 from "../Templates/Templates2";
import TemplatesForImage from "../Templates/Templates2";

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

const FormSection = ({ setOutput, theme,template }) => {
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
    console.log(theme,template);
    loadData();
  }, []);

  useEffect(() => {
    updateOutput();
  }, [theme, resumeData,template]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
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
    let generatedResume;
    switch (parseInt(template)) {
      case 1:
        generatedResume = Templates1(theme, resumeData);
        break;
      case 2:
        generatedResume = TemplatesForImage(theme, resumeData);
        break;
      default:
        generatedResume = TemplatesForImage(theme, resumeData);
    }
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
            <label
              htmlFor="summary"
              className="text-gray-800 text-xl font-bold"
            >
              Summary
            </label>
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
            <button className="bg-blue-600 p-2 mt-2 text-white font-semibold rounded">
              Improve from AI
            </button>
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
