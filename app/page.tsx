import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <Image
          src="/clefairy.gif"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <p className="mt-4 text-xl font-semibold">Cam's App</p>
    </div>
  );
}
