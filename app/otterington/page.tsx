'use client'

import Image from "next/image";
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
          <div className="envelope-letter envelope-letter-open overflow-y-auto p-5 sm:p-8">
            <p className="romantic-font mt-3 text-lg leading-relaxed text-amber-800 sm:text-xl">
              <span className="block">Dear Otterington,</span>
              <span className="block">
               It&apos;s so rainy today! I wishhhh I was cuddling under soft sheets with my significant otter... I hope you are having an amazing time volunteering. I know your warmth is making so many peoples&apos; day a lot better! Since I&apos;ve known you, you&apos;ve been so good at that. I am also so happy that you are loving your new place, and that everyday is again so exciting! I am so so so proud of the person you are growing into! See you soon, otter-half.
              </span>
              <span className="mt-4 block text-right">Your Otter</span>
            </p>
            <div className="mt-4 w-full overflow-hidden rounded-md">
              <Image
                src="/otteringtonGIF.gif"
                alt="Otterington"
                width={640}
                height={480}
                className="h-24 w-full object-contain sm:h-36"
              />
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
