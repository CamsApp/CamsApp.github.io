"use client"

import { useEffect, useState } from 'react';

const Countdown = () => {
  const startDate: Date = new Date('2024-09-01T17:00:00-05:00'); // September 1, 2024, 5 PM EST
  const [timeLeft, setTimeLeft] = useState<string>('');

  const updateCountdown = () => {
    const now: Date = new Date();
    const diff: number = now.getTime() - startDate.getTime(); // Use getTime() to get the timestamp (in ms)

    if (diff < 0) {
      setTimeLeft('Time has not yet reached the start date.');
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  };

  useEffect(() => {
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="text-center p-4 border-2 border-neutral-100	 rounded-lg shadow-md bg-transparent text-black">
        <h1 className="text-xl font-bold mb-2 text-neutral-100	">We've been together for...</h1>
        <p className="text-lg font-semibold text-neutral-100	">{timeLeft}</p>
      </div>
    </div>
  );
};

export default Countdown;
