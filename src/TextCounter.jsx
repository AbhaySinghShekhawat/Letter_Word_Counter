import React, { useState } from "react";

const TextCounter = () => {
  const [text, setText] = useState("");

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const letterCount = text.replace(/\s/g, "").length;

  const handleClear = () => setText("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-gray-200 transition-all duration-300">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          ✨ Text Counter
        </h2>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={6}
          className="w-full resize-none overflow-auto p-4 border border-gray-300 rounded-xl shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          placeholder="Start typing your thoughts..."
        ></textarea>

        {text.length > 0 && (
          <div className="flex justify-center cursor-pointer mt-3">
            <button
              onClick={handleClear}
              className="text-sm px-4 cursor-pointer py-2 bg-gradient-to-r from-red-400 to-red-600 text-white font-semibold rounded-lg shadow hover:shadow-md hover:from-red-500 hover:to-red-700 transition-all duration-200"
            >
              Clear
            </button>
          </div>
        )}

        <div className="mt-6 flex justify-between text-gray-600 text-lg font-medium">
          <p>
            📝 Words:{" "}
            <span className="text-blue-600 font-semibold">{wordCount}</span>
          </p>
          <p>
            🔤 Letters:{" "}
            <span className="text-pink-600 font-semibold">{letterCount}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextCounter;
