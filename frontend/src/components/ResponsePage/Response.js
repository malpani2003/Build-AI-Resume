import React, { useState } from "react";

function Response() {
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("Easy");
  const [recipient, setRecipient] = useState("");
  const [context, setContext] = useState("");
  const [tone, setTone] = useState("Neutral");
  const [output, setOutput] = useState(""); // State for the output
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    e.preventDefault();
    setTimeout(() => {
      // var generatedResponse = `Response for ${recipient} with ${level} level and ${tone} tone.\n`;
      var generatedResponse =
        "It's been a month since our placements started in college, and over 50 companies have visited so far. Some companies had their online assessments, so naturally, people cheated in every way possible. But what hit me hard was seeing that even during offline assessments in the college lab, where there were two invigilators present, people were still cheating. These invigilators, who were from our college, ignored it as if they were deaf and blind. The same invigilators used to make students remove their shoes during semester exams to check if they had any hidden notes.";
      setOutput(generatedResponse);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      {/* Form Section */}
      <div className="flex justify-center items-center mb-9">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <p className="text-center mt-9 mb-8 text-3xl">
            Generate AI Reply Message
          </p>
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
              className="mt-4 block p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          {/* <div className="mb-4">
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
          </div> */}

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
              rows="10"
              cols="15"
              placeholder="Provide any additional context here"
              value={context}
              onChange={handleContextChange}
              className="mt-4 resize-none block p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm overflow-y-auto"
            />
          </div>

          <div className="mb-4">
            <span className="block text-xl mb-2 font-medium text-gray-700">
              Choose Level of Response
            </span>
            <div className="flex mt-4 items-center space-x-4">
              <button
                type="button"
                onClick={() => handleLevelChange("Easy")}
                className={`p-2 ${
                  level === "Easy" ? "bg-[#0d0c22] text-white" : "bg-[#ebebec]"
                }  text-black rounded-full px-5`}
                aria-pressed={level === "Easy"}
              >
                Easy
              </button>
              <button
                type="button"
                onClick={() => handleLevelChange("Medium")}
                className={`p-2 ${
                  level === "Medium"
                    ? "bg-[#0d0c22] text-white"
                    : "bg-[#ebebec]"
                } text-black rounded-full px-5`}
                aria-pressed={level === "Medium"}
              >
                Medium
              </button>
              <button
                type="button"
                onClick={() => handleLevelChange("Hard")}
                className={`p-2 ${
                  level === "Hard" ? "bg-[#0d0c22] text-white" : "bg-[#ebebec]"
                } text-black rounded-full px-5`}
                aria-pressed={level === "Hard"}
              >
                Hard
              </button>
            </div>
          </div>

          <div className="mb-9">
            <span className="block text-xl mb-2 font-medium text-gray-700">
              Tone of Voice
            </span>
            <div className="flex mt-4 items-center space-x-4">
              <button
                type="button"
                onClick={() => handleToneChange("Formal")}
                className={`p-2 ${
                  tone === "Formal" ? "bg-[#0d0c22] text-white" : "bg-[#ebebec]"
                } text-black rounded-full px-5`}
                aria-pressed={tone === "Formal"}
              >
                Formal
              </button>
              <button
                type="button"
                onClick={() => handleToneChange("Neutral")}
                className={`p-2 ${
                  tone === "Neutral"
                    ? "bg-[#0d0c22] text-white"
                    : "bg-[#ebebec]"
                } text-black rounded-full px-5`}
                aria-pressed={tone === "Neutral"}
              >
                Neutral
              </button>
              <button
                type="button"
                onClick={() => handleToneChange("Casual")}
                className={`p-2 ${
                  tone === "Casual" ? "bg-[#0d0c22] text-white" : "bg-[#ebebec]"
                } text-black rounded-full px-5`}
                aria-pressed={tone === "Casual"}
              >
                Casual
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#3c3874] text-white p-2 rounded-lg flex items-center  hover:bg-[#0d0c22] transition duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>

            <span className="text-lg font-semibold mx-1">
              Generate Response
            </span>
          </button>
        </form>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-full max-w-md">
          <p className="text-center text-2xl font-bold mb-4">
            Generated Response:
          </p>
          <div className="p-4 border border-gray-300 rounded-md shadow-sm">
            {!loading && <p className="text-black font-bold mt-2 mb-2 italic">{description}</p>}
            {loading ? (
              <p className="text-gray-500">Loading...</p>
            ) : output ? (
              <p>{output}</p>
            ) : (
              <p className="text-gray-500">
                Your generated response will appear here.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Response;
