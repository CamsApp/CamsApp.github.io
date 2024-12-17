'use client'

import { useRouter } from 'next/navigation';

export default function Bello() {
  const router = useRouter();

  const handleNavigation = (page: string) => {
    router.push(page);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 px-4 bg-pink-200">
    <h1 className="text-3xl font-semibold mb-8 text-amber-900">Bello!</h1>

      <div className="flex flex-col space-y-4">
        <button
          onClick={() => handleNavigation('/page1')}
          className="w-64 p-3 bg-amber-900 text-white font-bold rounded-lg hover:bg-amber-400 transition-all"
        >
          You and I &lt;3
        </button>

        <button
          onClick={() => handleNavigation('/page2')}
          className="w-64 p-3 bg-amber-900 text-white font-bold rounded-lg hover:bg-amber-400 transition-all"
        >
          Hungry?
        </button>

        <button
          onClick={() => handleNavigation('/page3')}
          className="w-64 p-3 bg-amber-900 text-white font-bold rounded-lg hover:bg-amber-400 transition-all"
        >
          Fun Activities!
        </button>

        <button
          onClick={() => handleNavigation('/page4')}
          className="w-64 p-3 bg-amber-900 text-white font-bold rounded-lg hover:bg-amber-400 transition-all"
        >
          Compliments for You
        </button>
      </div>
    </div>
  );
}
