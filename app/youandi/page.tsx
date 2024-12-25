"use client"

import { useState } from "react";

export default function YouAndI() {
    const photos = [
        { src: "/one.png", caption: "Snow Day!" },
        { src: "/two.png", caption: "Viewww" },
        { src: "/three.png", caption: "Gon and Killua <3" },
        { src: "/four.png", caption: "NYC!!!" }
    ];

    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const handleNext = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    };

    const handlePrev = () => {
        setCurrentPhotoIndex(
            (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
        );
    };

    return (
        <div className="bg-pink-200 min-h-screen flex flex-col justify-center items-center">
            <div className="relative flex flex-col items-center">
                <img
                    src={photos[currentPhotoIndex].src}
                    alt={photos[currentPhotoIndex].caption}
                    className="w-96 h-96 object-cover rounded-lg"
                />
                <p className="mt-4 text-lg font-semibold">
                    {photos[currentPhotoIndex].caption}
                </p>
                <div className="mt-4 flex justify-between w-full px-10">
                    <button
                        onClick={handlePrev}
                        className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                    >
                        &larr; Previous
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
        </div>
    );
}
