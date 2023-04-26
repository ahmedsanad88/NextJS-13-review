import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between">
      <h1 className="text-6xl font-bold text-center text-gray-700">
        Next-13 Review
      </h1>
    </div>
  );
}
