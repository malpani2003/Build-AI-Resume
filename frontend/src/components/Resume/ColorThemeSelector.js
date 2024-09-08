import React from "react";

const ColorThemeSelector = ({ setColorTheme }) => (
  <div className="flex space-x-2">
    <button
      className="w-5 h-5 bg-red-400 rounded-full cursor-pointer"
      onClick={() => setColorTheme("red")}
    ></button>
    <button
      className="w-5 h-5 bg-gray-400 rounded-full cursor-pointer"
      onClick={() => setColorTheme("gray")}
    ></button>
    <button
      className="w-5 h-5 bg-green-400 rounded-full cursor-pointer"
      onClick={() => setColorTheme("green")}
    ></button>
    <button
      className="w-5 h-5 bg-blue-400 rounded-full cursor-pointer"
      onClick={() => setColorTheme("blue")}
    ></button>
  </div>
);

export default ColorThemeSelector;
