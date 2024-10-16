import Image from "next/image";

export const UnderConstruction = ({ page }: { page: string }) => (
  <div className="flex flex-col items-center justify-center w-full min-h-screen bg-black p-4 md:flex-row md:p-8">
    <div className="flex flex-col items-center justify-center mb-8 md:mb-0 md:mr-8">
      <br />
      <p className="text tracking-tight text-center text-white leading-tight md:text-2xl lg:text-3xl">
        {`We are figuring out ${page}... and we will let you know`}
      </p>
    </div>
    <Image
      className="w-full max-w-xs md:max-w-md lg:max-w-lg dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
      src="/comingSoon.jpg"
      alt="coming-soon-image"
      width={1000}
      height={1000}
      priority
    />
  </div>
);
