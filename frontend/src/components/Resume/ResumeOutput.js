import React from "react";

const ResumeOutput = ({ output }) => (
  <div className="rounded-lg shadow-xl">
    <div dangerouslySetInnerHTML={{ __html: output }}></div>
  </div>
);

export default ResumeOutput;
