'use client'

import { useRouter } from 'next/navigation';

export default function Bello() {
  const router = useRouter();

  const handleNavigation = (page: string) => {
    router.push(page);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 px-4 bg-pink-200">
    <h1 className="text-5xl font-semibold text-amber-900">Bello!</h1>

      <div className="flex flex-col space-y-4">
        <button
          onClick={() => handleNavigation('/youandi')}
          className="w-64 p-3 bg-amber-900 text-white font-bold rounded-lg transition-all"
        >
          You and I &lt;3
        </button>

        <button
          onClick={() => handleNavigation('/stargazing')}
          className="w-64 p-3 bg-amber-900 text-white font-bold rounded-lg transition-all"
        >
          Stars
        </button>

        <button
          onClick={() => handleNavigation('/hungry')}
          className="w-64 p-3 bg-amber-900 text-white font-bold rounded-lg transition-all"
        >
          Hungry?
        </button>

        <button
          onClick={() => handleNavigation('/activities')}
          className="w-64 p-3 bg-amber-900 text-white font-bold rounded-lg transition-all"
        >
          Activities
        </button>

        <button
          onClick={() => handleNavigation('/compliments')}
          className="w-64 p-3 bg-amber-900 text-white font-bold rounded-lg transition-all"
        >
          Compliments for You
        </button>

        <button
          onClick={() => handleNavigation('/valentines')}
          className="w-64 p-3 bg-amber-900 text-white font-bold rounded-lg transition-all"
        >
          Happy Valentine's Day!
        </button>
      </div>
    </div>
  );
}
