'use client'

import { useState } from "react";

export default function Otterington() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-pink-200 px-4 text-center text-amber-900">
      <h1 className="text-5xl font-semibold">Otterington</h1>
      <p className="text-lg">A little note just for you.</p>

      <button
        type="button"
        className="envelope-stage"
        data-open={isOpen}
        aria-pressed={isOpen}
        aria-label={isOpen ? "Close the envelope" : "Open the envelope"}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? (
          <div className="envelope-letter envelope-letter-open">
            <h2 className="text-2xl font-semibold">To my love</h2>
            <p className="mt-3 text-sm leading-relaxed text-amber-800">
              Add your note here. You can also place an image below.
            </p>
            <div className="mt-4 h-24 w-full rounded-md border-2 border-dashed border-rose-300 text-xs text-rose-400">
              Image placeholder
            </div>
          </div>
        ) : null}
        <div className="envelope">
          <div className="envelope-body">
            <span className="envelope-label">click here</span>
          </div>
          <div className="envelope-flap" />
        </div>
      </button>
    </div>
  );
}
