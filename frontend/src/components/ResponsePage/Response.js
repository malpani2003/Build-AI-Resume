import React, { useState } from "react";

function Response() {
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("Easy");
  const [recipient, setRecipient] = useState("");
  const [context, setContext] = useState("");
  const [tone, setTone] = useState("Neutral");
  const [error, setError] = useState(null);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleLevelChange = (newLevel) => {
    setLevel(newLevel);
  };

  const handleRecipientChange = (e) => {
    setRecipient(e.target.value);
  };
 
  const handleContextChange = (e) => {
    setContext(e.target.value);
  };

  const handleToneChange = (newTone) => {
    setTone(newTone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  };

  return (
    <div>
      <p>Generate AI response for your email</p>
      <div className="flex justify-center w-full">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-xl font-medium text-gray-700"
            >
              Enter Prompt
            </label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Enter Description"
              value={description}
              onChange={handleDescriptionChange}
              aria-describedby="description-helper"
              className="mt-1 block p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="recipient"
              className="block text-xl font-medium text-gray-700"
            >
              Recipient
            </label>
            <input
              type="text"
              id="recipient"
              name="recipient"
              placeholder="Enter Recipient's Name"
              value={recipient}
              onChange={handleRecipientChange}
              className="mt-1 block p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="context"
              className="block text-xl font-medium text-gray-700"
            >
              Additional Context (optional)
            </label>
            <textarea
              id="context"
              name="context"
              placeholder="Provide any additional context here"
              value={context}
              onChange={handleContextChange}
              className="mt-1 block p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <span className="block text-xl mb-2 font-medium text-gray-700">
              Choose Level of Response
            </span>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => handleLevelChange("Easy")}
                className={`p-2 ${
                  level === "Easy" ? "bg-indigo-500" : "bg-[#0d0c22]"
                } text-white rounded-lg`}
                aria-pressed={level === "Easy"}
              >
                Easy
              </button>
              <button
                type="button"
                onClick={() => handleLevelChange("Medium")}
                className={`p-2 ${
                  level === "Medium" ? "bg-indigo-500" : "bg-[#0d0c22]"
                } text-white rounded-lg`}
                aria-pressed={level === "Medium"}
              >
                Medium
              </button>
              <button
                type="button"
                onClick={() => handleLevelChange("Hard")}
                className={`p-2 ${
                  level === "Hard" ? "bg-indigo-500" : "bg-[#0d0c22]"
                } text-white rounded-lg`}
                aria-pressed={level === "Hard"}
              >
                Hard
              </button>
            </div>
          </div>

          <div className="mb-4">
            <span className="block text-xl mb-2 font-medium text-gray-700">
              Tone of Voice
            </span>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => handleToneChange("Formal")}
                className={`p-2 ${
                  tone === "Formal" ? "bg-indigo-500" : "bg-[#0d0c22]"
                } text-white rounded-lg`}
                aria-pressed={tone === "Formal"}
              >
                Formal
              </button>
              <button
                type="button"
                onClick={() => handleToneChange("Neutral")}
                className={`p-2 ${
                  tone === "Neutral" ? "bg-indigo-500" : "bg-[#0d0c22]"
                } text-white rounded-lg`}
                aria-pressed={tone === "Neutral"}
              >
                Neutral
              </button>
              <button
                type="button"
                onClick={() => handleToneChange("Casual")}
                className={`p-2 ${
                  tone === "Casual" ? "bg-indigo-500" : "bg-[#0d0c22]"
                } text-white rounded-lg`}
                aria-pressed={tone === "Casual"}
              >
                Casual
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md mt-6"
          >
            Generate Response
          </button>
        </form>
      </div>
    </div>
  );
}

export default Response;
