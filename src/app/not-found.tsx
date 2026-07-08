import Image from "next/image";
import Link from "next/link";
import mtFujiAndMoon from "@/public/landing/mtFujiAndMoon.webp";

const Landing = () => {
  return (
    <div className="bg-blue-secondary relative flex h-screen items-center justify-center text-white">
      <div className="flex flex-col items-center space-y-6">
        <p className="text-5xl font-bold">Error 404</p>
        <Link
          href="/"
          className="bg-blue-secondary mb-50 w-30 cursor-pointer rounded-2xl border-2 p-3 text-center text-xl font-bold transition-transform duration-300 ease-in-out hover:scale-105"
        >
          Home
        </Link>
      </div>
      <Image
        src={mtFujiAndMoon}
        alt="Mount Fuji and Moon"
        className="absolute bottom-0 w-full"
      />
    </div>
  );
};

export default Landing;
