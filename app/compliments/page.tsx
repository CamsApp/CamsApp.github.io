"use client";

import { useState } from "react";

export default function YouAndI() {
    const compliments = [
        "I love you mostestestestestestestestestestestestestestestestestestest",
        "You are so beautiful and perfect and amazing and everything",
        "You're my favorite person in the universe",
        "You make loving you so easy!",
    ];

    const [currentCompliment, setCurrentCompliment] = useState("");
    const [finalCompliment, setFinalCompliment] = useState<string | null>(null);
    const [animating, setAnimating] = useState(false);

    const startAnimation = () => {
        setAnimating(true);
        setFinalCompliment(null);

        let index = 0;
        const interval = setInterval(() => {
            setCurrentCompliment(compliments[index]);
            index = (index + 1) % compliments.length;
        }, 200);

        setTimeout(() => {
            clearInterval(interval);
            const chosen = compliments[Math.floor(Math.random() * compliments.length)];
            setCurrentCompliment(chosen);
            setFinalCompliment(chosen);
            setAnimating(false);
        }, 1500);
    };

    return (
        <div className="bg-pink-200 min-h-screen flex flex-col items-center justify-center text-center font-sans">
            <h1 className="text-2xl mb-4 text-pink-800 font-bold">Your Daily Compliment</h1>
            <div className="border-2 border-pink-400 rounded-lg p-4 bg-white mb-4 w-64 h-16 flex items-center justify-center">
                <h2 className="text-xl font-bold text-gray-800">
                    {currentCompliment || "Press the button!"}
                </h2>
            </div>
            {finalCompliment && (
                <p className="text-lg text-pink-700 mt-4">
                    Hi Cam, {finalCompliment}
                </p>
            )}
            <button
                onClick={startAnimation}
                className={`mt-4 px-4 py-2 text-lg rounded-lg ${
                    animating
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-pink-600 hover:bg-pink-700 text-white"
                }`}
                disabled={animating}
            >
                {animating ? "Choosing..." : "Give Me a Compliment"}
            </button>
        </div>
    );
}
