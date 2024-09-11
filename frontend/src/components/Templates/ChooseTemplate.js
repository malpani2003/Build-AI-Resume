import React, { useState, } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams,useNavigate} from "react-router-dom";

function ChooseTemplate() {
  const [selectedId, setSelectedId] = useState(null);
  const {resumeId}=useParams();
  const navigate=useNavigate();

  const templates = [
    {
      id: 1,
      name: "Template 1",
      subtitle: "Basic Resume",
      image:
        "https://media.istockphoto.com/id/1194631932/vector/modern-yellow-cv-resume-design.jpg?s=1024x1024&w=is&k=20&c=f9zoSdmwczwpV7cIhcEdV6ZjOEAQFqOtLGTAcWvmI64=",
    },
    {
      id: 2,
      name: "Template 2",
      subtitle: "Creative Resume",
      image:
        "https://media.istockphoto.com/id/1192610614/vector/cv-resume-black-and-white-design.jpg?s=1024x1024&w=is&k=20&c=XboqlTh3UE-CgoiNfWXagSYfFZBJAIHRFtRMy-iolls=",
    },
    {
      id: 3,
      name: "Template 3",
      subtitle: "Professional Resume",
      image:
        "https://media.istockphoto.com/id/1194631932/vector/modern-yellow-cv-resume-design.jpg?s=1024x1024&w=is&k=20&c=f9zoSdmwczwpV7cIhcEdV6ZjOEAQFqOtLGTAcWvmI64=",
    },
    {
      id: 4,
      name: "Template 4",
      subtitle: "Modern Resume",
      image:
        "https://media.istockphoto.com/id/1194631932/vector/modern-yellow-cv-resume-design.jpg?s=1024x1024&w=is&k=20&c=f9zoSdmwczwpV7cIhcEdV6ZjOEAQFqOtLGTAcWvmI64=",
    },
  ];

  const handleSelectTemplate = (id) => {
    navigate(`/resume/${resumeId}/template/${id}/edit`);
  };
  
  const selectedTemplate = templates.find(
    (template) => template.id === selectedId
  );

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Choose Your Template
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {templates.map((template,index) => (
          <motion.div
            key={template.id}
            layoutId={template.id}
            className="border rounded-lg p-6 text-center cursor-pointer shadow-lg border-gray-300 bg-white hover:bg-gray-100"
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={template?.image}
              alt={template.name}
              className="w-full h-48 object-cover rounded-lg"
              onClick={() => setSelectedId(template.id)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.h5 className="text-sm font-medium text-gray-500 mt-4">
              {template.subtitle}
            </motion.h5>
            <motion.h2 className="mt-2 text-lg font-semibold text-gray-800">
              {template.name}
            </motion.h2>
            <motion.button
              className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none"
              onClick={() => handleSelectTemplate(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Select Template
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Animate presence for showing the detailed view of the selected template */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="fixed inset-0 bg-gray-900 bg-opacity-80 flex justify-center items-center p-8"
            style={{ zIndex: 1000 }}
          >
            <motion.div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full text-center">
              <motion.img
                src="https://media.istockphoto.com/id/1194631932/vector/modern-yellow-cv-resume-design.jpg?s=1024x1024&w=is&k=20&c=f9zoSdmwczwpV7cIhcEdV6ZjOEAQFqOtLGTAcWvmI64="
                alt={selectedTemplate?.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.h5 className="text-lg font-bold text-gray-600">
                {selectedTemplate?.subtitle}
              </motion.h5>
              <motion.h2 className="text-2xl mt-2 text-gray-800">
                {selectedTemplate?.name}
              </motion.h2>

              {/* Close button */}
              <motion.button
                className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none"
                onClick={() => setSelectedId(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ChooseTemplate;
