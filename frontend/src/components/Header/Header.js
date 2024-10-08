import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex flex-col items-center mt-16 text-black px-4 md:px-8">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          {/* <img
            src="https://img.freepik.com/free-vector/male-resume-sample-skills-abilities-experience-appearance_613284-2190.jpg?t=st=1725791020~exp=1725794620~hmac=8e96553f3644a455e6e51a83e88494d77e2d657086da26de627344516eff25b2&w=360"
            alt="Resume Sample"
            className="w-60 md:w-72 lg:w-80 rounded-lg shadow-lg"
          /> */}
        </div>
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Build Your Resume with AI
        </h1>
        <p className="mt-4 text-base md:text-lg lg:text-xl xl:text-2xl w-auto mx-auto">
          Create a professional, tailored resume in minutes with our AI-powered
          resume builder. Whether you're starting fresh or updating an existing
          resume, we've got you covered.
        </p>
        <Link to="/dashboard">
          <button className="bg-[#0d0c22] border-2 border-[#FCFAF9] text-white p-3 font-semibold rounded-lg mt-5 transition duration-300 ease-in-out hover:bg-indigo-900 hover:text-white">
            Start Building Your Resume
          </button>
        </Link>
      </div>

      <h2 className="font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl text-center mt-12">
        AI-Crafted Resumes for Every Career Path
      </h2>
      <p className="mt-4 text-sm md:text-base lg:text-lg xl:text-xl w-auto text-center mx-auto">
        Our AI resume builder is designed to meet your career needs, providing
        tailored suggestions, formatting, and content for every industry.
        Whether you're a beginner or an experienced professional, our tool
        ensures your resume stands out.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-[#ffffff] text-black p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-base md:text-lg lg:text-xl text-[#0d0c22]">
            AI-Enhanced Resume Writing
          </h3>
          <p className="mt-2 text-sm md:text-base lg:text-lg">
            Let AI assist you in creating a resume that highlights your
            strengths. Our tool ensures your resume is clear, concise, and
            tailored to your career goals.
          </p>
        </div>
        <div className="bg-[#ffffff] text-black p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-base md:text-lg lg:text-xl text-[#0d0c22]">
            Smart Formatting & Design
          </h3>
          <p className="mt-2 text-sm md:text-base lg:text-lg">
            Choose from a range of professionally designed templates. Our AI
            adapts the formatting to ensure your resume is visually appealing
            and well-structured.
          </p>
        </div>
        <div className="bg-[#ffffff] text-black p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-base md:text-lg lg:text-xl text-[#0d0c22]">
            Tailored Content Suggestions
          </h3>
          <p className="mt-2 text-sm md:text-base lg:text-lg">
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
