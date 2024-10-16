"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="bg-black h-18  flex flex-col md:flex-row items-center justify-between px-8 bg-black-800 md:mt-0 sm:pt-8 md:pt-2">
      <Image
        src="/logo_white.png"
        alt="Description of the image"
        width={450}
        height={450}
        priority
        className="md:order-1 md:mr-20 "
      />

      <div className="flex justify-between space-x-4 md:order-2">
        <Link href="/benefits">
          <div className="relative">
            <button
              className={`text-white
              btn btn-outline btn-accent
              ${pathname === "/benefits" ? "border-b-4 border-red-500" : ""}
              w-24 h-10 sm:w-28 sm:h-12 md:w-16 md:h-14 lg:w-36 lg:h-16 xl:w-40 xl:h-18 2xl:w-[120px] 2xl:h-[70px]
            `}
            >
              Benefits
            </button>
          </div>
        </Link>
        <Link href="/safety">
          <div className="relative">
            <button
              className={`text-white
              btn btn-outline btn-accent
              ${pathname === "/safety" ? "border-b-4 border-red-500" : ""}
              w-24 h-10 sm:w-28 sm:h-12 md:w-16 md:h-14 lg:w-36 lg:h-16 xl:w-40 xl:h-18 2xl:w-[120px] 2xl:h-[70px]
            `}
            >
              Safety
            </button>
          </div>
        </Link>
        <Link href="/policies">
          <div className="relative">
            <button
              className={`text-white
              btn btn-outline btn-accent
              ${pathname === "/policies" ? "border-b-4 border-red-500" : ""}
              w-24 h-10 sm:w-28 sm:h-12 md:w-16 md:h-14 lg:w-36 lg:h-16 xl:w-40 xl:h-18 2xl:w-[120px] 2xl:h-[70px]
            `}
            >
              Policies
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};
