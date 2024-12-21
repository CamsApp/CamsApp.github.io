"use client";

import { useState } from "react";

export default function ChooseRestaurant() {
  const cuisines = ["Indian", "Mexican", "Chinese", "Vietnamese", "Italian"];
  const [currentWord, setCurrentWord] = useState("");
  const [finalChoice, setFinalChoice] = useState<string | null>(null);
  const [animating, setAnimating] = useState(false);

  const startAnimation = () => {
    setAnimating(true);
    setFinalChoice(null);

    let index = 0;
    const interval = setInterval(() => {
      setCurrentWord(cuisines[index]);
      index = (index + 1) % cuisines.length;
    }, 200);

    setTimeout(() => {
      clearInterval(interval);
      const chosen = cuisines[Math.floor(Math.random() * cuisines.length)];
      setCurrentWord(chosen);
      setFinalChoice(chosen);
      setAnimating(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center font-sans">
      <h1 className="text-2xl mb-4 text-black font-bold">Where Should We Eat?</h1>
      <div className="border-2 border-gray-300 rounded-lg p-4 bg-white mb-4 w-56 h-16 flex items-center justify-center">
        <h2 className="text-xl font-bold text-gray-800">
          {currentWord || "Press the button!"}
        </h2>
      </div>
      {finalChoice && (
        <p className="text-lg text-blue-600 mt-4">Final Choice: {finalChoice}</p>
      )}
      <button
        onClick={startAnimation}
        className={`mt-4 px-4 py-2 text-lg rounded-lg ${
          animating
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
        disabled={animating}
      >
        {animating ? "Choosing..." : "Choose Again"}
      </button>
    </div>
  );
}
