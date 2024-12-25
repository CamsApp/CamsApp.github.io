"use client";

import { useState } from "react";

export default function ChooseActivities() {
  const activities = ["Movie Night", "Board Games!", "Coffee Shop", "Go on a walk :)", "Meditate", "Museum", "Painting!", "Arcade", "Mario Kart :0", "Cuddle!!!!", "Partyyyy"];
  const [currentWord, setCurrentWord] = useState("");
  const [finalChoice, setFinalChoice] = useState<string | null>(null);
  const [animating, setAnimating] = useState(false);

  const startAnimation = () => {
    setAnimating(true);
    setFinalChoice(null);

    let index = 0;
    const interval = setInterval(() => {
      setCurrentWord(activities[index]);
      index = (index + 1) % activities.length;
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      const chosen = activities[Math.floor(Math.random() * activities.length)];
      setCurrentWord(chosen);
      setFinalChoice(chosen);
      setAnimating(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center font-sans">
      <h1 className="text-2xl mb-4 text-black font-bold">What should we do?</h1>
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
