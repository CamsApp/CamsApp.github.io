'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useState } from 'react';

export default function Home() {
  const router = useRouter()
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (password === 'bello') {
      router.push('/bello');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 px-4">
      <Image
        src="/clefairy.gif"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <p className="text-xl font-semibold">Cam&#39;s App</p>

      <div className="mt-8 w-full sm:w-64">
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-md focus:outline-none bg-black text-white"
        />
      </div>
      
      <button
        onClick={handleSubmit}
        className="w-full sm:w-64 p-3 mt-4 bg-blue-500 text-white rounded-md"
      >
        Submit
      </button>

      {error && (
        <p className="text-red-500 mt-4 sm:mt-6">{error}</p>
      )}
    </div>
  );
}



