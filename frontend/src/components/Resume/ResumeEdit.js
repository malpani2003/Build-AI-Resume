import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormSection from "./FormSection";

function ResumeEdit() {
  const { resumeId } = useParams();
  const [output, setOutput] = useState(""); // State for the resume output
  useEffect(() => {
    console.log(resumeId);
  }, [resumeId]); // Add resumeId to dependency array

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Resume Editor {resumeId}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Form Section */}
        <FormSection setOutput={setOutput}></FormSection>
        {/* Output Section */}
        <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Generated Resume</h2>
          <pre className="whitespace-pre-wrap">{output}</pre>
        </div>
      </div>
    </div>
  );
}

export default ResumeEdit;
