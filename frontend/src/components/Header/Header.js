import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="flex flex-col content-center mt-32 text-black px-4 md:px-8">
      <div className="text-center">
        <h1 className="font-bold text-4xl">Build Your Resume with AI</h1>
        <p className="mt-4 text-2xl w-auto">
          Create a professional, tailored resume in minutes with our
          AI-powered resume builder. Whether you're starting fresh or updating
          an existing resume, we've got you covered.
        </p>
        <button className="bg-[#FCFAF9] border-2 border-[#FCFAF9] text-black p-3 font-semibold rounded-lg mt-5 transition duration-300 ease-in-out hover:bg-indigo-900 hover:text-white">
          <Link to="/create-resume">Start Building Your Resume</Link>
        </button>
      </div>

      <h2 className="font-bold text-2xl mt-12">
        AI-Crafted Resumes for Every Career Path
      </h2>
      <p className="mt-4 text-xl w-auto">
        Our AI resume builder is designed to meet your career needs, providing
        tailored suggestions, formatting, and content for every industry.
        Whether you're a beginner or an experienced professional, our tool
        ensures your resume stands out.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-[#ffffff] text-black p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-lg text-[#0d0c22]">
            AI-Enhanced Resume Writing
          </h3>
          <p className="mt-2">
            Let AI assist you in creating a resume that highlights your
            strengths. Our tool ensures your resume is clear, concise, and
            tailored to your career goals.
          </p>
        </div>
        <div className="bg-[#ffffff] text-black p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-lg text-[#0d0c22]">
            Smart Formatting & Design
          </h3>
          <p className="mt-2">
            Choose from a range of professionally designed templates. Our AI
            adapts the formatting to ensure your resume is visually appealing
            and well-structured.
          </p>
        </div>
        <div className="bg-[#ffffff] text-black p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-lg text-[#0d0c22]">
            Tailored Content Suggestions
          </h3>
          <p className="mt-2">
            Receive personalized content suggestions based on your experience
            and job role. AI helps you craft relevant bullet points and
            descriptions for each section of your resume.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
