import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FormSection from "./FormSection";
import ColorThemeSelector from "./ColorThemeSelector";
import ResumeOutput from "./ResumeOutput";
import JsPDF from "jspdf";
import html2canvas from "html2canvas";

function ResumeEdit() {
  const { resumeId, templateId } = useParams();
  const navigate = useNavigate(); // Add useNavigate hook
  const [output, setOutput] = useState("");
  const [colorTheme, setColorTheme] = useState("red");
  const [hideForm, setHideForm] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(templateId);

  useEffect(() => {
    setSelectedTemplate(templateId);
  }, [templateId]);

  const handleTemplateChange = (newTemplateId) => {
    setSelectedTemplate(newTemplateId);
    navigate(`/resume/${resumeId}/template/${newTemplateId}/edit`); // Update the URL
  };

  const handleResumeDownload = async () => {
    console.log("Download Resume Button Clicked");

    // Create an invisible iframe to render the resume HTML content
    let iframe = document.createElement("iframe");
    iframe.style.visibility = "hidden";
    document.body.appendChild(iframe);
    let iframedoc = iframe.contentDocument || iframe.contentWindow.document;

    // Insert the generated resume content into the iframe body
    iframedoc.body.innerHTML = output;

    // Inject Tailwind CSS into the iframe (if needed)
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"; // Use the version you're using
    iframedoc.head.appendChild(link);

    // Wait for the iframe content to load and render
    setTimeout(async () => {
      // Use html2canvas to capture the content of the iframe
      let canvas = await html2canvas(iframedoc.body);

      // Convert the canvas into an image data URL
      let imgData = canvas.toDataURL("image/png");

      // Create a new PDF document and add the image to it
      const doc = new JsPDF({
        format: "a4",
        unit: "mm",
      });
      doc.addImage(imgData, "PNG", 0, 0, 210, 297); // Adjust size for A4

      // Save the PDF
      doc.save("resume.pdf");

      // Clean up by removing the iframe
      document.body.removeChild(iframe);
    }, 1000); // Add a small delay to ensure styles are loaded
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Resume Editor {resumeId ? `for Resume ID: ${resumeId}` : ""}
      </h1>

      <div className={`flex flex-col md:flex-row ${!hideForm ? "gap-6" : ""}`}>
        {!hideForm && (
          <div className="flex-1">
            <FormSection
              setOutput={setOutput}
              theme={colorTheme}
              template={selectedTemplate}
            />
          </div>
        )}

        <div className="flex-1 bg-gray-100 p-3 rounded-lg shadow-lg">
          <div className="flex flex-row justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Generated Resume</h2>
            <div className="flex space-x-2">
              <ColorThemeSelector setColorTheme={setColorTheme} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 cursor-pointer"
                onClick={() => setHideForm(!hideForm)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 cursor-pointer"
                onClick={handleResumeDownload}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              <select
                id="templateId"
                name="templateId"
                value={selectedTemplate}
                onChange={(e) => handleTemplateChange(parseInt(e.target.value))}
              >
                <option value="1">Gradient Background with Sidebar</option>
                <option value="2">Minimalistic Design</option>
              </select>
            </div>
          </div>
          <ResumeOutput output={output} />
        </div>
      </div>
    </div>
  );
}

export default ResumeEdit;
